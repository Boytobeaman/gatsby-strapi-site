import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery } from 'gatsby';
import Twitter from './Twitter';
import Facebook from './Facebook';
import { graphql } from 'gatsby'

const SEO = ({
  title = null,
  twitter_title = null,
  facebook_title = null,
  thisTitleTemplate = null,
  description = null,
  twitter_description = null,
  facebook_description = null,
  image = null,
  pathname = '',
  position = null,
  article = false,
  ratingValue = null,
  reviewCount = null,
  price = null,
  lowPrice = null,
  highPrice = null,
  productBrand = null
}) => (
  <StaticQuery
    query={graphql`
      query SEOQuery {
        site {
          siteMetadata {
            defaultTitle: title
            defaultTitleTemplate: titleTemplate
            defaultDescription: description
            siteUrl: siteUrl
            defaultImage: image
            twitterUsername
            facebookAppID
            productBrand
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultTitleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername,
          facebookAppID,
          productBrand,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        titleTemplate: thisTitleTemplate || defaultTitleTemplate,
        description: description || defaultDescription,
        image: image || `${defaultImage}`,
        url: `${siteUrl}${pathname || '/'}`,
      };

      const itemListElement = [
        {
          "@type": "ListItem",
          item: {
            "@id": siteUrl,
            name: "Homepage",
          },
          position: 1,
        },
      ];
      let ratingRichData;
      if (position && position == '2'){
        itemListElement.push({
          "@type": "ListItem",
          item: {
            "@id": seo.url,
            name: seo.title,
          },
          position: 2,
        });

        ratingRichData =
        {
          "@context": "http://schema.org/",
          "@type": "Product",
          "name": seo.title,
          "image": seo.image,
          "description": seo.description,
          "brand": {
            "@type": "Thing",
            "name": productBrand
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": ratingValue,
            "reviewCount": reviewCount
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": lowPrice,
            "highPrice": highPrice,
            "priceValidUntil": "2027-11-05",
            "itemCondition": "http://schema.org/UsedCondition",
            "availability": "http://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": productBrand
            }
          }
        }

      }

      
      const breadcrumb = {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        description: "Breadcrumbs list",
        name: "Breadcrumbs",
        itemListElement,
      }

      return (
        <>
          <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image ? `${siteUrl}${seo.image}` : ''} />
            <script type="application/ld+json">
              {JSON.stringify(breadcrumb).replace(/\//g,'\\/')}
            </script>
            {ratingRichData &&(
              <script type="application/ld+json">
                {JSON.stringify(ratingRichData).replace(/\//g,'\\/')}
              </script>
            )}
          </Helmet>
          <Facebook
            pageUrl={seo.url}
            type={article ? 'article' : null}
            title={facebook_title ? facebook_title : seo.title}
            description={facebook_description ? facebook_description : seo.description}
            image={seo.image ? `${siteUrl}${seo.image}` : ''}
            appID={facebookAppID}
          />
          <Twitter
            username={twitterUsername}
            title={twitter_title ? twitter_title : seo.title}
            description={twitter_description ? twitter_description : seo.description}
            image={seo.image ? `${siteUrl}${seo.image}` : ''}
          />
        </>
      );
    }}
  />
);

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
};

export default SEO;
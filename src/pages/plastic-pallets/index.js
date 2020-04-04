import 'core-js/es6/map';
import 'core-js/es6/set';
import React from "react";
import { Link, graphql } from 'gatsby';
import ProductDetailTemplateCat from '../../components/ProductDetailTemplateCat';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO/SEO';
import { menu } from '../../utils';
import Img from 'gatsby-image';
import '../../cat-page-style.scss';
// need to change
import ThisCatDesc from '../../components/productDesc/Pallet';
import AllProductCommonDesc from '../../components/productDesc/AllProductCommonDesc';



const JSONbuildtime = ({data}) => {

  let posts = data.strapidata.edges;
  let img_data = data.jsondata.edges;

  // need to change, get banner data
  let bannerDesktop = data.bannerDesktop;
  let bannerPhone = data.bannerPhone;

  posts = posts.map(item=>item.node);
  img_data = img_data.map(item => item.node)
  posts.forEach(item => {
    let local_img = img_data.filter(i_data => i_data.seo_meta_slug === item.slug)[0].local_img;
    item.local_img = local_img
  	if (item.local_img.length>0) {
  		item.images = item.local_img.map(local_img_item=>local_img_item.path.childImageSharp)
  	}
  })
  // for facebook url
  let cat_link = posts[0].seo_category_slug
  cat_link= `/${cat_link}/`
  // need to change
  let cat_text = menu.pallet.text
  
  let the_image = ``;
  if(posts[0].images[0] && posts[0].images[0].fluid){
    the_image = posts[0].images[0].fluid.src
  }

  return (
      <Layout>
        <section className="section product-cate-page">
          <SEO 
            thisTitleTemplate={`%s | ${cat_text} for sale`}
            title={`${cat_text}, cheap ${cat_text} supplier`}
            description = {`Wholesale ${cat_text}, cheap ${cat_text} for sale, These lightweight plastic pallets can be stacked one into the other to save space. Despite their low empty weight, They have a high load-bearing capacity`}
            pathname = {`${cat_link}`}
            image = {the_image}
            position = '2'
            ratingValue = '4.8'
            reviewCount = '168'
            price = '22.19'
            lowPrice = '20.69'
            highPrice = '30.49'
          />
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-white my-2">
                <li className="breadcrumb-item">
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">{cat_text}</li>
              </ol>
            </nav>
            
            <div className="cat-desc-top-wrap">
              <div className="d-none d-sm-block cat-desc-top-img-wrap custom">
                <Img
                  fluid={bannerDesktop.childImageSharp.fluid}
                  alt='plastic pallets'
                />
              </div>
              <div className="d-block d-sm-none cat-desc-top-img-wrap custom">
                <Img
                  fluid={bannerPhone.childImageSharp.fluid}
                  alt='plastic pallets'
                />
              </div>
            </div>
            <div className="">
              <ThisCatDesc />
            </div>
            
            {posts
              .map((post) => {

                let short_title = post.short_title
                post.commonproduct.short_title = short_title
                post.commonproduct.images = post.images
                
                return (
                  <div
                    className="cat-desc-element-wrap"
                    key={post.slug}
                  >
                    <div className="col-xs-12">
                      <Link className="cat-product-link" to={`${post.seo_category_slug}/${post.slug}/`}>
                        <ProductDetailTemplateCat 
                          infodata={post.commonproduct}
                        />
                      </Link>
                    </div>
                  </div>
                )
              })}

            <div className="cat-desc-section">
              <AllProductCommonDesc />
            </div>
          </div>
        </section>
      </Layout>
  )
}
export default JSONbuildtime

// need to change domain and product_identify_cat
export const query = graphql`
  query{
    strapidata: allStrapiWebsiteseometa(filter: {domain: {name: {eq: "palletssupplier.com"}}, product_identify_cat: {eq: "pallet"}}) {
      edges {
        node {
          id
          strapiId
          title
          slug
          tags
          seo_category
          seo_category_slug
          product_identify_cat
          description
          seo_description
          twitter_description
          twitter_image
          twitter_title
          facebook_description
          facebook_image
          facebook_title
          backlinks
          short_title
          commonproduct {
            external_height
            external_long
            external_width
            internal_height
            internal_long
            internal_width
            folded_height
            model
            static_load
            dynamic_load
            volumn
            weight
            source
          }
        }
      }
    }
    jsondata: allPalletJson {
      edges {
        node {
          local_img {
            path {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          seo_meta_slug
        }
      }
    }
    # need to change the file path
    bannerDesktop: file(relativePath: {eq: "plastic-pallets-factory-display.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # need to change the file path
    bannerPhone: file(relativePath: {eq: "plastic-pallet-production.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
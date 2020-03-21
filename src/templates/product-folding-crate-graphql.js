import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import ProductDetailTemplate from '../components/ProductDetailTemplate'
import SEO from '../components/SEO/SEO'
import { menu } from '../utils'


const ProductPost = (props) => {
  // need to change
  let img_data = props.data.foldingCrateJson
  let post = props.data.strapiWebsiteseometa
  post.images = img_data.local_img.map(item=>item.path.childImageSharp)
  post.tags = typeof post.tags === "string" ? post.tags.split(",").filter(item=>item) : []


  let cat_link = post.seo_category_slug
  cat_link = `/${cat_link}/`
  // need to change
  let parentLevelLinkText = menu.foldingCrate.text
  let commonproduct = post.commonproduct;

  return (
    <Layout>
      <ProductDetailTemplate
        content={post.description}
        contentComponent={HTMLContent}
        description={post.description}
        model={commonproduct.model}
        external_long={commonproduct.external_long}
        external_width={commonproduct.external_width}
        external_height={commonproduct.external_height}
        internal_long={commonproduct.internal_long}
        internal_width={commonproduct.internal_width}
        internal_height={commonproduct.internal_height}
        volumn={commonproduct.volumn}
        weight={commonproduct.weight}
        images={post.images}
        product_identify_cat={post.product_identify_cat}
        helmet={
          <SEO 
            title={post.title}
            twitter_title = {post.twitter_title}
            facebook_title = {post.facebook_title}
            description = {post.description}
            twitter_description = {post.twitter_description}
            facebook_description = {post.facebook_description}
            image = {post.images[0] ? post.images[0].fluid.src: ''}
            pathname = {`${cat_link}${post.slug}`}
          />
        }
        parentLevelLink = {cat_link}
        parentLevelLinkText = {parentLevelLinkText}
        tags={post.tags}
        title={post.short_title}
      />
    </Layout>
  )

}

export default ProductPost

// need to change graphql name for json
export const query = graphql`
  query($id: String!, $slug: String!) {
    strapiWebsiteseometa(strapiId: { eq: $id }) {
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
      commonproduct{
        model
        dynamic_load
        external_height
        external_long
        external_width
        internal_width
        internal_long
        internal_height
        volumn
        weight
        static_load
        static_load
        dynamic_load
      }
    }
    foldingCrateJson(seo_meta_slug: { eq: $slug }) {
      local_img {
        path {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
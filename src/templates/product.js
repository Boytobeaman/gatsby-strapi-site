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


const MovingcratePost = (props) => {
  // const { markdownRemark: post } = data
  const post = props.pageContext
  let cat_link = menu.movingBins.url
  post.images = post.img_path.split(",").filter(item=>item)
  post.tags = post.tags.split(",").filter(item=>item)

  return (
    <Layout>
      <ProductDetailTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.description}
        model={post.model}
        external_long={post.external_long}
        external_width={post.external_width}
        external_height={post.external_height}
        internal_long={post.internal_long}
        internal_width={post.internal_width}
        internal_height={post.internal_height}
        volumn={post.volumn}
        weight={post.weight}
        images={post.images}
        helmet={
          <SEO 
            titleTemplate="%s | Moving Crate"
            title={post.post_title}
            description = {post.description}
            image = {post.images[0]}
            pathname = {`${cat_link}${post.post_title.replace(/ +/g,"-")}/`}
          />
        }
        parentLevelLink = {cat_link}
        parentLevelLinkText = "Moving Crates"
        tags={post.tags}
        title={post.post_title}
      />
    </Layout>
  )
}

// MovingcratePost.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.object,
//   }),
//   imagea: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
// }

export default MovingcratePost
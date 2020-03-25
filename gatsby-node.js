const _ = require('lodash');

exports.createPages = async ({ actions: { createPage }, graphql }) => {

  let domain_name = 'movingbox.cn'
  const result = await graphql(
    `
      {
        products: allStrapiWebsiteseometa(filter: {domain: {name: {eq: "movingbox.cn"}}}) {
          edges {
            node {
              id
              strapiId
              slug
              seo_category
              seo_category_slug
              product_identify_cat
              tags
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog products pages.
  const products = result.data.products.edges
  console.log(`got products number ================= ${products.lenght}`)

  
  // let allPalletBoxJsonResult = await graphql(`
  //   {
  //     allPalletBoxJson {
  //       edges {
  //         node {
  //           post_title_slug
  //           category
  //           product_identify_cat
  //         }
  //       }
  //     }
  //   }
  // `)
  // allProductsData.push(...allPalletBoxJsonResult.data.allPalletBoxJson.edges);

  // Tag pages:
  let tags = [];

  products.forEach(edge => {
    const product = edge.node
    let seo_category_slug = product.seo_category_slug
    let product_identify_cat = product.product_identify_cat
    let product_identify_cat_path = product_identify_cat.replace(/ +/g,"-")
    let slug = product.slug
    console.log(`product.tags  ===== ${product.tags}`)
    if(product.tags){
      tags = tags.concat(product.tags.split(","))
    }
    
    createPage({
      path: `/${seo_category_slug}/${product.slug}/`,
      component: require.resolve(`./src/templates/product-${product_identify_cat_path}-graphql.js`),
      context: {
        id: product.strapiId,
        slug
      },
    })
  })

  // Eliminate duplicate tags and false value
  tags = _.compact(_.uniq(tags))

  //get rid of space in began or end of each tag
  tags.forEach((item, i) => {
    tags[i] = item.trim()
  })
console.log(`tags ============================ ${JSON.stringify(tags)}`)
  tags.forEach(tag => {
    const tagPath = `/tags/${_.kebabCase(tag)}/`
    let tag_regex = `/${tag}/`

    createPage({
      path: tagPath,
      component: require.resolve(`./src/templates/tags.js`),
      context: {
        tag,
        tag_regex,
      },
    })
  })

}

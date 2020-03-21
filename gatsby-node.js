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
  // console.log(`products ================= ${JSON.stringify(products)}`)

  
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
  products.forEach(edge => {
    const product = edge.node
    let seo_category_slug = product.seo_category_slug
    let product_identify_cat = product.product_identify_cat
    let product_identify_cat_path = product_identify_cat.replace(/ +/g,"-")
    let slug = product.slug
    createPage({
      path: `/${seo_category_slug}/${product.slug}/`,
      component: require.resolve(`./src/templates/product-${product_identify_cat_path}-graphql.js`),
      context: {
        id: product.strapiId,
        slug
      },
    })
  })
}

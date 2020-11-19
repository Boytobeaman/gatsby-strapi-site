import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react'

import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Slider from '../components/Slider'

import { menu } from '../utils';
import SEO from '../components/SEO/SEO';
import Img from 'gatsby-image';

export default class IndexPage extends React.Component {
  render() {
    let img_data = this.props.data;

    let items = [
      {
        childImageSharp: img_data.p1.childImageSharp,
        altText: menu.pallet.text,
        caption: '',
        link_to: menu.pallet.url,
        key: 1
      },
      {
        childImageSharp: img_data.p2.childImageSharp,
        altText: menu.palletBox.text,
        caption: '',
        link_to: menu.palletBox.url,
        key: 2
      },
      {
        childImageSharp: img_data.p3.childImageSharp,
        altText: 'Nesting Crates',
        caption: '',
        link_to: '',
        key: 3
      }
    ];

    return (
      <Layout>
        <SEO 
            titleTemplate="%s | Plastic pallets supplier"
            title='Bulk Plastic Containers for sale, Plastic Pallets Manufacturer'
            description = {`Choose Bulk Plastic Containers, Plastic Pallets, Collapsible bulk containers of all kinds and sizes. Best Prices, ${menu.foldingCrate.text && `${menu.foldingCrate.text}, `}${menu.nestingBox.text && `${menu.nestingBox.text}, `}${menu.stackingCrate.text && `${menu.stackingCrate.text}, `}${menu.palletBox.text && `${menu.palletBox.text}, `} wholesale`}
          />
        <div className="home-page">
          <section className="section">
              <div className="">
                <Slider items={items}/>
              </div>
          </section>
          <section className="bg-dark home-cat-pic pt-4 pb-5">
            <h2 className="text-center p-4 text-white">Products Categories</h2>
            <div className="row mx-0">
              <div className="col-sm-3">
                <Link className="nav-link text-white font-weight-bold pb-0" to={menu.pallet.url}>
                  <Img
                    fluid={img_data.cat_p3.childImageSharp.fluid}
                    alt="Euro Stacking Containers"
                  />
                  <p className="home-page-cat-text text-center">
                    Plastic Pallets
                  </p>
                </Link>
              </div>
              <div className="col-sm-3">
                <Link className="nav-link text-white font-weight-bold pb-0" to={menu.palletBox.url}>
                  <Img
                    fluid={img_data.cat_p4.childImageSharp.fluid}
                    alt="Plastic Pallet Boxes"
                  />
                  <p className="home-page-cat-text text-center">
                    Plastic Pallet Boxes
                  </p>
                  <div className="d-none">
                    each reusable container is designed to protect your product and reduce handling costs.
                    containers are available in light-duty, medium-duty and heavy-duty designs to meet any requirement.
                  </div>
                </Link>
              </div>
              <div className="col-sm-3">
                <a className="nav-link text-white font-weight-bold pb-0" href="https://www.movingboxsale.com/folding-crates/" target="_blank" rel="noreferrer">
                  <Img
                    fluid={img_data.cat_p1.childImageSharp.fluid}
                    alt="Plastic Folding Crates"
                  />
                  <p className="home-page-cat-text text-center">
                    Folding Crates
                  </p>
                </a>
              </div>
              <div className="col-sm-3">
              <a className="nav-link text-white font-weight-bold pb-0" href="https://www.movingboxsale.com/moving-bins/" target="_blank" rel="noreferrer">
                <Img
                  fluid={img_data.cat_p2.childImageSharp.fluid}
                  alt="Plastic Moving Bins"
                />
                <p className="home-page-cat-text text-center">
                  Plastic Moving Bins
                </p>
              </a>
              </div>
              
            </div>
          </section>
          <section className="bg-light product-customization">
            <div className="row mx-0">
              <div className="col-sm-5">
                <Img
                  fluid={img_data.feature_p1.childImageSharp.fluid}
                  alt="Plastic moving boxes customization"
                />
              </div>
              <div className="col-sm-7">
                <div className="center-y-parent h-100">
                  <div className="center-y-child invalid-xs p-3">
                    <h2 className="mb-4 font-weight-bold">Products Customization Service</h2>
                    <h5>Custom service according to your specific demand</h5>
                    <p>
                    Browsed our selection and still can’t find the right crates? 
                    No problem. Check out our specialty items, or contact us about creating a custom mold to your exact specifications
                    </p>
                    <p>
                      OEM service are designed to provide you with customized services by predicting your desires and needs.
                    </p>
                    <Link className="btn btn-danger btn-lg active" role="button" aria-pressed="true" to="/contact/">
                        Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="manufacturering-equipment py-5 bg-color-a text-white">
            <div className="row mx-0">
              <div className="col-sm-6">
                <div className="center-y-parent h-100">
                  <div className="center-y-child invalid-xs p-3">
                    <h2 className="mb-4 font-weight-bold">Manufacturering Equipment</h2>
                    <h5>Well-equipped with 22 sets 30ton-1600ton injection molding machine</h5>
                    <p>
                      MOQ as 300pcs, flash leadtime as 7-10 days
                    </p>
                    <Img
                      fluid={img_data.feature_p2.childImageSharp.fluid}
                      alt="Plastic crates manufacturer equipment"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <Img
                  fluid={img_data.feature_p3.childImageSharp.fluid}
                  alt="Plastic crates manufacturer equipment"
                />
              </div>
            </div>
          </section>
          <section className="factory-img py-5 bg-light">
            <div className="row mx-0">
              <div className="col-sm-7">
                <div className="center-y-parent h-100">
                  <div className="center-y-child invalid-xs p-3">
                    <h2>Plastic Pallets Manufacturer & Supplier</h2>
                    <ul>
                      <li>Wholesale Pricing</li>
                      <li>Quality assurance</li>
                      <li>Light, space-saving, and reliable</li>
                    </ul>
                    <div className="text-left">
                      <h6>Pallets intended for moderate reuse applications. Depending on the style of plastic pallet, some models are much lighter weight, and thus are easier to handle than wood pallets, plastic pallets that can be used for various industries and applications. </h6>
                      <p>These plastic pallets can be used again and again, making them an economical solution for your business.</p>
                      <p>Consider stackable plastic pallets when your typical product loads are very heavy, and you need to stack-load products in your warehouse operations.</p>
                      <p>These plastic pallets reduce storage and transportation costs. The consistent lightweight design facilitates handling and makes these plastic pallets optimal carriers for export.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-5 pr-0">
                <Img
                  fluid={img_data.feature_p4.childImageSharp.fluid}
                  alt="Plastic crates manufacturer"
                />
              </div>
            </div>
          </section>
        </div>
        
      </Layout>
    )
  }
}


export const query = graphql`
  query{
    # need to change the file path
    p1: file(relativePath: {eq: "home/main-slider-plastic-pallets.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # need to change the file path
    p2: file(relativePath: {eq: "home/main-slider-pallet-box.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # need to change the file path
    p3: file(relativePath: {eq: "home/main-slider-nesting-crates.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # need to change the file path
    cat_p1: file(relativePath: {eq: "folding-crates.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # need to change the file path
    cat_p2: file(relativePath: {eq: "plastic-moving-crates.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # need to change the file path
    cat_p3: file(relativePath: {eq: "plastic-pallets.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # need to change the file path
    cat_p4: file(relativePath: {eq: "plastic-pallet-boxes-b.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # need to change the file path
    feature_p1: file(relativePath: {eq: "plastic-moving-boxes-customization-grey.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # need to change the file path
    feature_p2: file(relativePath: {eq: "crates-manufacturer-equipment-b.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # need to change the file path
    feature_p3: file(relativePath: {eq: "crates-manufacturer-equipment-a.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # need to change the file path
    feature_p4: file(relativePath: {eq: "plastic-crate-manufacture-factory.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # need to change the file path
    customer_p1: file(relativePath: {eq: "moving-company.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # need to change the file path
    customer_p2: file(relativePath: {eq: "retails.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # need to change the file path
    customer_p3: file(relativePath: {eq: "anyboy.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

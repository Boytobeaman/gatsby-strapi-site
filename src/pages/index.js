import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
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
        altText: 'Attached Lid Container',
        caption: '',
        link_to: menu.nestingBox.url,
        key: 1
      },
      {
        childImageSharp: img_data.p2.childImageSharp,
        altText: 'Folding Crates',
        caption: '',
        link_to: menu.foldingCrate.url,
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
            titleTemplate="%s | Moving boxes"
            title='Plastic Moving Boxes For Sale, Plastic Moving Crates Manufacturer & Supplier'
            description = 'JOINPLASTIC is a Plastic Moving Crate manufacturers and suppliers from China,we wholesale a wide range of products which include plastic moving boxes, collapsible plastic crates, fruits crate, stacking crates, attached lid containers, heavy duty crates, pallets, dollies'
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
                <Link className="nav-link text-white font-weight-bold pb-0" to={menu.foldingCrate.url}>
                  <Img
                    fluid={img_data.cat_p1.childImageSharp.fluid}
                    alt="Plastic Folding Crates"
                  />
                  <p className="home-page-cat-text text-center">
                    Plastic Folding Crates
                  </p>
                </Link>
              </div>
              <div className="col-sm-3">
                <Link className="nav-link text-white font-weight-bold pb-0" to={menu.nestingBox.url}>
                  <Img
                    fluid={img_data.cat_p2.childImageSharp.fluid}
                    alt="Plastic Moving Boxes"
                  />
                  <p className="home-page-cat-text text-center">
                    Plastic Moving Boxes
                  </p>
                </Link>
              </div>
              <div className="col-sm-3">
                <Link className="nav-link text-white font-weight-bold pb-0" to={menu.stackingCrate.url}>
                  <Img
                    fluid={img_data.cat_p3.childImageSharp.fluid}
                    alt="Euro Stacking Containers"
                  />
                  <p className="home-page-cat-text text-center">
                    Euro Stacking Containers
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
                </Link>
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
                    <h2>Plastic Crates Manufacturer & Supplier</h2>
                    <ul>
                      <li>Wholesale Pricing</li>
                      <li>All Colors + Custom Logo</li>
                      <li>Quality assurance</li>
                    </ul>
                    <div className="text-left">
                      <h6>Get the best deal for plastic moving boxes, collapsible plastic crates, stackable plastic crates, pallet boxes from Chinese manufacture directly.</h6>
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
          <section className="bg-dark text-white py-5">
              <div className="text-center mb-4 h3 py-3">We Provide Crates and Boxes For</div>
              <div className="row mx-0 text-center">
                  <div className="col-sm-12 col-md-4">
                    <h5 className="text-white">Moving company</h5>
                    <Img
                      fluid={img_data.customer_p1.childImageSharp.fluid}
                      alt="Plastic crates manufacturer"
                    />
                    <p className="text-muted p-3">Moving isn’t always great for the environment. Luckily, we provide <strong>plastic moving boxes</strong> for moving companies to make moving more planet-friendly.</p>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <h5 className="text-white">Retailers</h5>
                    <Img
                      fluid={img_data.customer_p2.childImageSharp.fluid}
                      alt="Plastic crates manufacturer"
                    />
                    <p className="text-muted p-3">Retailers can enjoy the high quality and competitive price of our plastic products,and we had build a good relationship with retails across the world</p>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <h5 className="text-white">Anyone</h5>
                    <Img
                      fluid={img_data.customer_p3.childImageSharp.fluid}
                      alt="Plastic crates manufacturer"
                    />
                    <p className="text-muted p-3">We had supplied <strong>plastic crates</strong> for farms, schools, corporations and organizations.And we provide good Pre-and post-sales support for our customers</p>
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
    p1: file(relativePath: {eq: "home/main-slider-attached-lid-container.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # need to change the file path
    p2: file(relativePath: {eq: "home/main-slider-folding-crates.jpg"}) {
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
    cat_p3: file(relativePath: {eq: "euro-stacking-crates.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # need to change the file path
    cat_p4: file(relativePath: {eq: "plastic-pallet-boxes.jpg"}) {
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

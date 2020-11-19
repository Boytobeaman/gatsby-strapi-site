import 'core-js/es6/map';
import 'core-js/es6/set';

import React from "react";
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/Layout'
import Slider from '../../components/Slider'
import { cdn_url } from '../../utils'
import './about.scss'

export default class Index extends React.Component {

  render() {
    let img_data = this.props.data;

    let items = [
      {
        childImageSharp: img_data.p1.childImageSharp,
        altText: 'cooperate brand',
        caption: '',
        link_to: '',
        key: 1,
      },
      {
        childImageSharp: img_data.p2.childImageSharp,
        altText: 'our customers',
        caption: '',
        link_to: '',
        key: 2,
      },
      {
        childImageSharp: img_data.p3.childImageSharp,
        altText: 'plastic products certifications',
        caption: '',
        link_to: '',
        key: 3,
      }
    ];
    return (
      <Layout>
        <Helmet>
          <title>{`Plastic Pallets Manufacturer & Supplier | About us`}</title>
          <meta name="description" content={`We take pride in being the largest plastic pallet manufacturer in China in serving our customers with the best quality plastic pallets`} />
        </Helmet>
        <section className="section">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-white my-2">
                <li className="breadcrumb-item">
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">About us</li>
              </ol>
            </nav>
          </div>
        </section>
        <div className="container-fluid">
          <section className='mb-5 border bg-light'>
            <div className="row">
              <div className="col-md-6">
                <video controls className='w-100 factory-video' poster={`${cdn_url}/static/plastic-crate-manufacture-factory.jpg`}>
                  <source src={`${cdn_url}/static/video/plastic_crates_company_introduce.mp4`} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
              <div className="col-md-6">
                <div>
                  <div className="p-3 bg-white">
                    <h1 className="h4">Who are we?</h1>
                    <p>At palletssupplier.com, there is a highly professional, hardworking and passionate group of people in the plastic pallet manufacturer and supplier business to serve the shipping, storage, and handling industry as well as the consumer market. 
                      Our products are exceptional and are ahead of all their competition in terms of price, structure, and durability. 
                      We take pride in being the largest plastic pallet manufacturer in China in serving our customers with the best quality plastic pallets and a similar variety of products that the market has to offer.
                    </p>
                    <p>
                      Customer satisfaction is our number one priority, we have dedicated ourselves to provide the finest class goods by going above and beyond. 
                      Please feel free to look around our website and browse through the products we have to offer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className='mb-3'>
          <Slider items={items} />
        </section>
        <div className="container-fluid">
          <section className='my-5 border bg-light'>
            <div className="text-center mb-4 border-bottom h5 py-3">Why choose us</div>
            <div className="row mx-0">
              <div className="col-md-3 col-sm-6">
                <div className="why-choose-us one">
                  <div className="why-header">
                    Raw material
                  </div>
                  <div className="why-text">
                    100% virgin PP/PE,<br />
                    Eco-firendly
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="why-choose-us two">
                  <div className="why-header">
                    Quality assurance
                  </div>
                  <div className="why-text">
                    Every box will be inspected<br />
                    before shipment
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="why-choose-us three">
                  <div className="why-header">
                    After service
                  </div>
                  <div className="why-text">
                    One year free replacement<br />
                    (No-human damages)
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="why-choose-us four">
                  <div className="why-header">
                    Trade assurance
                  </div>
                  <div className="why-text">
                    Protect your orders<br />
                    from payment to delivery
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="container-fluid">
          <section className='my-5 border bg-light faq'>
            <div className="text-center mb-4 border-bottom h5 py-3">FAQ</div>
            <div className="row mx-0">
              <div className="col-sm-12">
                <div className="question-wrap">
                  <div className="question">
                    Are you a factory, is custom service available?
                  </div>
                  <div className="answer">
                    Yes, we are a factory based in Shanghai, China and authenticated by TUV.
                  </div>
                </div>
                <div className="question-wrap">
                  <div className="question">
                    Can I order a sample to check quality?
                  </div>
                  <div className="answer">
                    Yes, sample will be free but you take the delivery cost.
                  </div>
                </div>
                <div className="question-wrap">
                  <div className="question">
                    What's your MOQ for bulk order?
                  </div>
                  <div className="answer">
                    Normally we start from 300pcs.
                  </div>
                </div>
                <div className="question-wrap">
                  <div className="question">
                    What's your regular colors and can I do custom color?
                  </div>
                  <div className="answer">
                    Regular colors are blue and grey,MOQ for custom color: 500pcs.
                  </div>
                </div>
                <div className="question-wrap">
                  <div className="question">
                    Do you support logo branding?
                  </div>
                  <div className="answer">
                    Yes, we support OEM and ODM service.
                  </div>
                </div>
                <div className="question-wrap">
                  <div className="question">
                    Which package methods are available?
                  </div>
                  <div className="answer">
                    Export wooden pallet packing, canton packing or nude packing for space saving purpose.
                  </div>
                </div>
                <div className="question-wrap">
                  <div className="question">
                    What's your term of payment?
                  </div>
                  <div className="answer">
                    We support T/T, L/C at sight and Paypal for sample.
                  </div>
                </div>
                <div className="question-wrap">
                  <div className="question">
                    How long does it take for production?
                  </div>
                  <div className="answer">
                    7~15 working days after we receive your deposit.
                  </div>
                </div>
                <div className="question-wrap">
                  <div className="question">
                    How can I protect my rights if we meet quality issue?
                  </div>
                  <div className="answer">
                    To benefit buyers, we can draw up a Alibaba trade assurance order.
                    Go to <a href="https://shjiajiu.en.alibaba.com/" target="_blank" rel="noreferrer">our Alibaba store</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="container-fluid">
          <section className='my-5 border bg-light map'>
            <div className="text-center mb-0 border-bottom h5 py-3">Contact</div>
            <div className="row mx-0">
              <div className="position-relative w-100">
                <div className="bg-img"></div>
                <div className="position-absolute map-overlay">
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <div className="col-sm-8 text-center p-3 content">
                      <h6 className="py-3 h4">If you interested in our products and service, please don't hesitate to contact us</h6>
                      <Link className="btn btn-danger btn-lg active" role="button" aria-pressed="true" to="/contact/">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query{
    # need to change the file path
    p1: file(relativePath: {eq: "about-us-cooperate-brand.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # need to change the file path
    p2: file(relativePath: {eq: "about-us-with-customers.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # need to change the file path
    p3: file(relativePath: {eq: "about-us-certifications.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

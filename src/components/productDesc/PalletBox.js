import React from 'react'
import { cdn_url } from '../../utils';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Description(props) {
  const imgs = useStaticQuery(graphql`
    query{
      p1: file(relativePath: {eq: "plastic-pallet-boxes-show.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      p2: file(relativePath: {eq: "plastic-pallet-boxes-application.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="product-detail-description common-plastic-pallet-boxes p-3">
      <div className="row mb-1 no-gutters">
        <div className="col-sm-6">
          <div className="cat-desc-section h-100">
            <h1 className="cat-desc-top-title h4 my-4">Plastic pallet boxes</h1>
            <ul>
              <li>Collapsible, Reinforced design, Ventilated.</li>
              <li>Bulk packing, Multiple Sizes and Colors, LIdded pallet boxes, Plastic pallet.</li>
              <li>100% New PP material.</li>
              
            </ul>
            <p className="d-none d-lg-block mb-0 h6">
            Eco-friendly, Collapsible saving you space, Effecient loading via built-in plastic pallet.
            </p>
            <p>
            We offer you hot sale and cheap plastic pallet bin, folding plastic pallet box, pallet crate, plastic pallet containers at wholesale price. Our Plastic pallet containers are made from the most durable, dependable plastics, designed to withstand the shipping process for years to come. We offer both heavy duty and light duty pallet boxes.
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <video controls className='w-100 h-100'>
            <source src={`${cdn_url}/static/video/plastic-pallet-container.mp4`} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
      <div>
        <div className="section-title h4 my-4">Plastic pallet crates application</div>
        <Img
          fluid={imgs.p1.childImageSharp.fluid}
          alt='Plastic pallet crates'
        />
        <p>Agriculture and in particular Fruit and Vegetables growing and processing is a very demanding business. It requires packaging with high efficiency, strength and resistance to harsh environment. Packaging also has to preserve freshness and quality of produce from field to supermarket shelf.Our vented pallet box perfectly meeting this end use specific needs.</p>
        <Img
          fluid={imgs.p2.childImageSharp.fluid}
          alt='Plastic pallet vegetable container'
        />
      </div>
      
    </div>
  );
}
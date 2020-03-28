import React from 'react'
import { 
  contact_email,
  facebook_url,
  twitter_url
} from '../utils'
import footerLogo from '../img/logo-stack.png'

export default class Footer extends React.Component{

  render() {
    return (
      <footer className="footer w-100 position-absolute bg-secondary py-3" style={{ bottom: '0' }}>
        <div className="footer-logo text-center my-2">
          <img style={{maxHeight: "80px"}} src={footerLogo} />
        </div>
        <div className="footer-social pt-2">
          <a title="facebook" href={facebook_url} target="_blank" rel="nofollow noopener" className="footer-social-link">
            <figure className="icon icon-fb"></figure>
          </a>
          <a title="twitter" href={twitter_url} target="_blank" rel="nofollow noopener" className="footer-social-link">
            <figure className="icon icon-tw"></figure>
          </a>
          <a title="email" href={`mailto:${contact_email}?subject=Inquiry about your products`} rel="nofollow noopener" className="footer-social-link">
            <figure className="icon icon-em"></figure>
          </a>
        </div>
        <div className="friendly-link">
          <a href="https://www.best-boxes.com/product-category/attached-lid-container/" target="_blank" className="footer-friendly-link">
            plastic shipping containers with attached lids
          </a>
          <a href="https://www.plastic-crates.com/product-category/totes-with-lids/" target="_blank" className="footer-friendly-link">
          plastic totes with lids
          </a>
          <a href="https://www.ausplastic.com/product-category/euro-storage-boxes/" target="_blank" className="footer-friendly-link">
            euro containers 600x400
          </a>
          <a href="https://www.movingboxsale.com/plastic-pallet-containers/" target="_blank" className="footer-friendly-link">
          plastic storage pallet box
          </a>
          <a href="https://www.vegcrates.com/" target="_blank" className="footer-friendly-link">
          vegetable storage crates
          </a>
          <a href="https://www.chinaboxsale.com/product-category/straight-wall-container/" target="_blank" className="footer-friendly-link">
          straight wall containers
          </a>
          <a href="https://www.storage-totes.com/product-category/collapsible-storage-bins/" target="_blank" className="footer-friendly-link">
          collapsible storage bins
          </a>
          
        </div>
        <div className="copy-right text-center py-3 px-1">
          <span className="text-white">© 2020 Shanghai Join Plastic, Inc. All Rights Reserved.</span>
        </div>
      </footer>
    )
  }
}

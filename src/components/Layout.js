import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react'
import Helmet from 'react-helmet'

import MainNavbar from '../components/MainNavbar'
import Footer from './Footer'
import favicon from '../img/icon-32.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './all.scss'


const TemplateWrapper = ({ children }) => {
  let parentLevelLink = ''
  if(children && children.props && children.props.parentLevelLink){
    parentLevelLink = children.props.parentLevelLink
  }
  return <div className="layout-wrap position-relative">
    <Helmet>
      <title>Home | Moving Crates Supplier</title>
      <link rel="shortcut icon"  href={favicon}></link>
    </Helmet>
    <MainNavbar parentLevelLink={parentLevelLink} />
    <div className="main-body">{children}</div>
    <Footer />
  </div>
}


export default TemplateWrapper

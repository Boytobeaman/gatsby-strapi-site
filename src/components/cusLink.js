import React from "react";
import { Link } from "gatsby";

const isActiveWrap = (props) => {
  const isActive = (obj) => {

    //obj attributes
    // 1. isCurrent — true if the location.pathname is exactly the same as the <Link> component’s to prop
    // 2. isPartiallyCurrent — true if the location.pathname starts with the <Link> component’s to prop
    // 3. href — the value of the to prop
    // 4. location — the page’s location object

    let activeClassName = 'active'
    if(props.className){
      activeClassName+=` ${props.className}`
    }

    if((obj.isPartiallyCurrent && obj.href !== "/") || obj.isCurrent){
      return { className: activeClassName }
    }
    return {}

  }
  return isActive
}

export const CusLink = props => {

  return <Link getProps={isActiveWrap(props)} {...props} />
}
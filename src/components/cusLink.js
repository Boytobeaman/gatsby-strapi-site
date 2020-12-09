import React from "react";
import { Link } from "gatsby";

const isActiveWrap = (props) => {
  const isActive = (obj) => {

    let activeClassName = 'active'
    if(props.className){
      activeClassName+=` ${props.className}`
    }
    return (obj.isCurrent || obj.isPartiallyCurrent) ? { className: activeClassName } : {}
  }
  return isActive
}

export const CusLink = props => {

  return <Link getProps={isActiveWrap(props)} {...props} />
}
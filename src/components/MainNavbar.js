import React from 'react'
import { CusLink } from './cusLink'
import logo from '../img/header-icon-grey.png'
import { menu } from '../utils'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown
} from 'reactstrap';
export default class MainNavbar extends React.Component{
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  // componentWillMount(){
  //   let parentLevelLink = this.props.parentLevelLink;
  //   let this_parent_url = parentLevelLink
  //     for (let elem in menu) {
  //       let this_url = menu[elem].url
  //       if(this_url === this_parent_url){
  //         menu[elem].activeStatus = "active"
  //       }else{
  //         menu[elem].activeStatus = ""
  //       }
  //     }
  // }
  renderNavbar(){

    return Object.keys(menu).map(function(key) {
      let this_menu = menu[key];
      let this_url = menu[key].url;
      if(this_url === "/"){
        return (
          <NavItem key={key}>
            <CusLink className="nav-link" to="/" title="Home">
              Home
            </CusLink>
          </NavItem>
        )
      }else{
        if(this_menu.showInUi){
          return (
            <NavItem key={key}>
              <CusLink className={`nav-link ${this_menu.activeStatus}`} to={this_menu.url} title={this_menu.text}>
                  {this_menu.text}
              </CusLink>
            </NavItem>
          )
        }
      }
    });
  }
  render() {
    return (
      <Navbar color="dark" dark className="fixed-top border-bottom" expand="md" id="mainNavbar" itemScope='' itemType="http://schema.org/SiteNavigationElement">
        <NavbarBrand className="py-0" href="/">
          <figure className="image mb-0">
            <img src={logo} alt="moving crates logo" style={{ height: "40px", width:"160px" }} />
          </figure>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className="mr-auto" navbar>
            {this.renderNavbar()}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

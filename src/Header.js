import React from 'react';
import {Navbar,Nav,NavItem,NavbarToggle,NavbarCollapse,form} from 'react-bootstrap';

class MovieLogo extends React.Component{
    render(){
           var imageName = require('./images/icon.png')
        return(
<div className="nameblog">
<img src={imageName} width="100px" height="100px"/>
<h1 className="moviename">movie<span>spot</span><p id="subtitle">YOUR FAVORITE MOVIES</p></h1>
    </div>
        );
    }
}
class NavBar extends React.Component{
    render(){
       
        return(
            <div>
            <div className="navlist">
            <Navbar inverse collapseOnSelect >
            <Navbar.Header>
              <Navbar.Brand>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav className="navbar">
                 <NavItem eventKey={1}  className="navitem"  href="">HOME</NavItem>
                 <NavItem eventKey={2}   className="navitem" href="#">COMEDY</NavItem>
                <NavItem eventKey={3}   className="navitem" href="#">DRAMA</NavItem>
               <NavItem eventKey={4}   className="navitem"  href="">ACTION</NavItem>
                 <NavItem eventKey={5}  className="navitem"  href="#">HORROR</NavItem>
                <NavItem eventKey={6}   className="navitem" href="#">SCI-FI</NavItem>
               <NavItem eventKey={7}   className="navitem"  href="">TV SHOWS</NavItem>
                 <NavItem eventKey={8}  className="navitem"  href="#">OTHER GENRES</NavItem>
              </Nav>
              
            </Navbar.Collapse>
          </Navbar>
        </div>
        </div>
        )
    }
}
class Searc extends React.Component{
    render(){
        return(
            <div>
            <form>
            <input type="search" placeholder="Search"/>
        </form>
        </div>
        );
    }
}
export default class Header extends React.Component{
    render(){
        return(
            <div>
<div className="header-wrapper">
    <div className="header-logo">
    <MovieLogo/>
    </div>
    <div className="header-search">
        <Searc/>
        </div>
        </div>
        <NavBar/>

        </div>

    
        );
    }
}
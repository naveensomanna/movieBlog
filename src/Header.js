import React from 'react';
import {Navbar,Nav,NavItem,form,inverse, PageHeader} from 'react-bootstrap';
import {NavLink,withRouter} from 'react-router-dom'; 
import Logo from '../src/images/youtubelogo.png'
import axios from 'axios'; 
class MovieLogo extends React.Component{
    
    render(){
        return(
<div className="nameblog" >
<div className="logoimg">
</div>
<div className="moviename">
<h1 >MOVIE<span>SPOT</span><p id="subtitle">YOUR FAVORITE MOVIES</p></h1>

    </div>
    </div>
        );
    }
}
class NavBar extends React.Component{
    render(){
        var divStyle={
            marginBottom:"10px",
        };
        return(
            <div style={divStyle}>
           <Navbar  collapseOnSelect>
           <Navbar.Toggle />

  <Navbar.Collapse>
    <Nav>
    <NavItem eventKey={1}   href=""><NavLink to="/"   className="nav_achor">HOME</NavLink></NavItem>
    <NavItem eventKey={2}    href="#"><NavLink to="/comdey"  className="nav_achor">COMEDY</NavLink></NavItem>
    <NavItem eventKey={3}    href="#"><NavLink to="/drama"  className="nav_achor">DRAMA</NavLink></NavItem>
    <NavItem eventKey={4}     href="" ><NavLink to="/action"  className="nav_achor">ACTION</NavLink></NavItem>
    <NavItem eventKey={5}    href="#" ><NavLink to="/horror"  className="nav_achor">HORROR</NavLink></NavItem>
    <NavItem eventKey={6}    href="#" ><NavLink to=""  className="nav_achor">SCI-FI</NavLink></NavItem>
    <NavItem eventKey={7}    href="" ><NavLink to="/tvshows"  className="nav_achor">TV SHOWS</NavLink></NavItem>
    <NavItem eventKey={8}    href="#"><NavLink to=""  className="nav_achor">OTHER GENRES</NavLink></NavItem>

    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
        )
    }
}


 class Header extends React.Component{
    constructor(Props) {
        super(Props)
        this.state = {
          
        }
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleSubmit(event) {
        console.log("updated");
        event.preventDefault();
        this.props.history.push(`/SearchBar/${this.refs.attack.value}`); // or whatever

      }
    render(){
        console.log("render");
        return(
            <div>
<div className="header-wrapper">
<div className="header-section">
    <div className="header-logo">
    <MovieLogo/>
    </div>
    <div className="header-search">
    <form  onSubmit={this.handleSubmit}>
        <label>
        
          <input type="text" ref="attack" placeholder="search movie"  />
        </label>
      </form>
      </div>
        </div>
        </div>
        <NavBar />
        <div>
</div>
        </div>

    
        );
    }
}
export default withRouter(Header);
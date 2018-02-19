import React from 'react';
import {Navbar,Nav,NavItem,form,inverse, PageHeader} from 'react-bootstrap';
import {Link,withRouter} from 'react-router-dom'; 
import axios from 'axios'; 
class MovieLogo extends React.Component{
    
    render(){
           var imageName = require('./images/icon.png')
        return(
<div className="nameblog">
<img src={imageName} alt="" width="100px" height="100px"/>
<h1 className="moviename">movie<span>spot</span><p id="subtitle">YOUR FAVORITE MOVIES</p></h1>
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
  <Navbar.Collapse>
    <Nav>

    <NavItem eventKey={1}   href=""><Link to="/"  style={{ color:"white",textDecoration:"none",":hover":{color:"green"}}}>HOME</Link></NavItem>
    <NavItem eventKey={2}    href="#"><Link to="/comdey" style={{ color:"white",textDecoration:"none",":hover": { background: "green" }}}>COMEDY</Link></NavItem>
    <NavItem eventKey={3}    href="#"><Link to="/drama" style={{ color:"white",textDecoration:"none",":hover": { background: "green" }}}>DRAMA</Link></NavItem>
    <NavItem eventKey={4}     href="">ACTION</NavItem>
    <NavItem eventKey={5}    href="#">HORROR</NavItem>
    <NavItem eventKey={6}    href="#">SCI-FI</NavItem>
    <NavItem eventKey={7}    href=""><Link to="tvshows" style={{ color:"white",textDecoration:"none",":hover": { background: "green" }}}>TV SHOWS</Link></NavItem>
    <NavItem eventKey={8}    href="#">OTHER GENRES</NavItem>

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
    <div className="header-logo">
    <MovieLogo/>
    </div>
    <div className="header-search">
    <form  onSubmit={this.handleSubmit}>
        <label>
        
          <input type="text" ref="attack" placeholder="search movie" />
        </label>
      </form>
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
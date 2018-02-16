import React from 'react';
import {Navbar,Nav,NavItem,form,inverse, PageHeader} from 'react-bootstrap';
import {Link} from 'react-router-dom'; 
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

class Searc extends React.Component{
  constructor(props){
    super(props)
    this.state={
        value:'',
        movie:[]
    }
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(event){
      event.preventDefault();
      console.log(this.refs.contenttype.value);
      this.setState({
          value:this.refs.contenttype.value
      })
  }
  componentDidMount(){
let value=this.state.value;
    let requestUrl = "https://api.themoviedb.org/3/search/movie?api_key=0060474990618f8eace5a7835a1fead6&query="+{value};
axios
.get(requestUrl)
.then(response => {
    this.setState({movie: response.data.results})
});
  }
    render(){
        console.log("moviee search result"+this.state.movie);
let title=this.state.movie.map(movie =>{
return (
    <div>
        <p>{movie.overview}</p>
        </div>
);
})
console.log(title);
        return(
            <div>
            <form onSubmit={this.handleClick}>
            <input type="search"  placeholder="Search" ref="contenttype"/>
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
        <NavBar />
        </div>

    
        );
    }
}
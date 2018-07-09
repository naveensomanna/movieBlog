import React from 'react';
import {NavLink,withRouter} from 'react-router-dom';




 class Header extends React.Component{
    constructor(Props) {
        super(Props)
        this.state = {
          btnclick:false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleSubmit(event) {
    
        event.preventDefault();
        if(event.target.value.length>0){
            this.props.history.push(`/SearchBar/${event.target.value}`);
        } // or whatever
        else{
            this.props.history.push('/');
        }
       

    }
btnclick=()=>{
    document.getElementById('side-menu').style.width='250px';
}     
btnclose=()=>{
document.getElementById('side-menu').style.width='0';
    }
    render(){
        return(

<div id="header-wrapper">
<div className="header-section">
<div>
<span id="open-slide" style={{cursor:'pointer'}} onClick={this.btnclick}>&#9776;</span>

  <a id="logo" ><img src="https://www.themoviedb.org/static_cache/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"  width="81" height="71"/></a>
</div>
<ul>
<li><NavLink exact to="/" className="nav_achor" activeStyle={{ color: '#FB0378' }}>Home</NavLink></li>
<li><NavLink to="/comdey"  className="nav_achor" activeStyle={{ color: '#FB0378' }}>Comedy</NavLink></li>
<li><NavLink  to="/drama"  className="nav_achor" activeStyle={{ color: '#FB0378' }}>Drama</NavLink></li>
<li><NavLink to="/action"  className="nav_achor" activeStyle={{ color: '#FB0378' }}>Action</NavLink></li>
<li><NavLink to="/horror"  className="nav_achor" activeStyle={{ color: '#FB0378' }}>Horror</NavLink></li>
<li><NavLink to="/people"  className="nav_achor" activeStyle={{ color: '#FB0378' }}>People</NavLink></li>

</ul>
 <div className="searchbox">
    <input type="text"  placeholder="Search" onChange={this.handleSubmit} />
    </div>
    <div id="side-menu" className="side-nav">
    <a href="#" className="btn-close" onClick={this.btnclose}>&times;</a>
    <NavLink exact to="/" className="nav_achor" activeStyle={{ color: '#FB0378' }}>Home</NavLink>
<NavLink to="/comdey"  className="nav_achor" activeStyle={{ color: '#FB0378' }}>Comedy</NavLink>
<NavLink  to="/drama"  className="nav_achor" activeStyle={{ color: '#FB0378' }}>Drama</NavLink>
<NavLink to="/action"  className="nav_achor" activeStyle={{ color: '#FB0378' }}>Action</NavLink>
<NavLink to="/horror"  className="nav_achor" activeStyle={{ color: '#FB0378' }}>Horror</NavLink>
<NavLink to="/people"  className="nav_achor" activeStyle={{ color: '#FB0378' }}>People</NavLink>

    </div>
    </div>
    </div>
           

        );
    }
}

export default withRouter(Header);

import React from 'react';
import {Navbar,Nav,NavItem,form,inverse, PageHeader,FormGroup,FormControl} from 'react-bootstrap';
import {Link,withRouter} from 'react-router-dom';
import Logo from '../src/images/title.png'
import axios from 'axios';



 class Header extends React.Component{
    constructor(Props) {
        super(Props)
        this.state = {
          
        }
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleSubmit(event) {
        console.log("update");
        event.preventDefault();
        this.props.history.push(`/SearchBar/${event.target.value}`); // or whatever
      }
    render(){
        console.log("render");
        var divStyle={
            marginBottom:"10px",
        
        };
        return(
<div className="header-wrapper">
<div className="header-section">
<div>
  <a id="logo" ><img src="https://www.themoviedb.org/static_cache/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"  width="81" height="71"/></a>
</div>
<ul>
<li><Link to="/" className="nav_achor">HOME</Link></li>
<li><Link to="/comdey"  className="nav_achor">COMEDY</Link></li>
<li><Link to="/drama"  className="nav_achor">DRAMA</Link></li>
<li><Link to="/action"  className="nav_achor">ACTION</Link></li>
<li><Link to="/horror"  className="nav_achor">HORROR</Link></li>
<li><Link to="/people"  className="nav_achor">PEOPLE</Link></li>

</ul>
 <div className="searchbox">
    <input type="text"  placeholder="Search" onChange={this.handleSubmit} />
    </div>
    </div>
           
        </div>

        );
    }
}
export default withRouter(Header);
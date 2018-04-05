import React from 'react';
import {Navbar,Nav,NavItem,form,inverse, PageHeader,FormGroup,FormControl} from 'react-bootstrap';
import {NavLink,withRouter} from 'react-router-dom'; 
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
            <div>
<div className="header-wrapper">
<div className="header-section">
       <Navbar  collapseOnSelect fixedTop >
       <Navbar.Header>
<Navbar.Brand >
  <a id="logo" ><img src={Logo}  width="91" height="91"/></a>
</Navbar.Brand>
<Navbar.Toggle />
</Navbar.Header>

<Navbar.Collapse>
<Nav>
<NavItem eventKey={1}   href=""><NavLink to="/"   className="nav_achor">HOME</NavLink></NavItem>
<NavItem eventKey={2}    href="#"><NavLink to="/comdey"  className="nav_achor">COMEDY</NavLink></NavItem>
<NavItem eventKey={3}    href="#"><NavLink to="/drama"  className="nav_achor">DRAMA</NavLink></NavItem>
<NavItem eventKey={4}     href="" ><NavLink to="/action"  className="nav_achor">ACTION</NavLink></NavItem>
<NavItem eventKey={5}    href="#" ><NavLink to="/horror"  className="nav_achor">HORROR</NavLink></NavItem>
<NavItem eventKey={6}    href="#" ><NavLink to="/people"  className="nav_achor">PEOPLE</NavLink></NavItem>
<NavItem eventKey={7}    href="" ><NavLink to="/tvshows"  className="nav_achor">TV SHOWS</NavLink></NavItem>
<NavItem eventKey={8}    href="#"><NavLink to=""  className="nav_achor">CONTACT</NavLink></NavItem>

</Nav>
<Navbar.Form pullRight>
  <FormGroup>
    <FormControl type="text"  placeholder="Search" onChange={this.handleSubmit}/>
  </FormGroup>{' '}
</Navbar.Form>    
</Navbar.Collapse>
</Navbar>
    </div>
    </div>
    
           
           
        </div>

        );
    }
}
export default withRouter(Header);
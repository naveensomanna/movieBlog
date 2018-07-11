import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {headerLogo} from "./Api";

class Header extends React.Component {
    constructor(Props) {
        super(Props);
        this.state = {
            btnclick: false
        }
    }

    handleChange = (event) => {

        event.preventDefault();
        if (event.target.value.length > 0) {
            this.props.history.push(`/SearchBar/${event.target.value}`);
        } // or whatever
        else {
            this.props.history.push('/');
        }


    }

    btnclick = (e) => {
        e.preventDefault();
        document.getElementById('side-menu').style.width = '250px';
    }
    btnclose = (e) => {
        e.preventDefault();
        document.getElementById('side-menu').style.width = '0';
    }

    render() {
        return (

            <div id="header-wrapper">
                <div className="header-section">
                    <div>
                        <span id="open-slide" style={{cursor: 'pointer'}} onClick={this.btnclick}>&#9776;</span>

                        <a id="logo"><img src={headerLogo} width="81" height="71" alt=" "/></a>
                    </div>
                    <ul>
                        <li><NavLink exact to="/" activeStyle={{color: '#FB0378'}}>Home</NavLink>
                        </li>
                        <li><NavLink to="/comdey"
                                     activeStyle={{color: '#FB0378'}}>Comedy</NavLink></li>
                        <li><NavLink to="/drama"  activeStyle={{color: '#FB0378'}}>Drama</NavLink>
                        </li>
                        <li><NavLink to="/action"
                                     activeStyle={{color: '#FB0378'}}>Action</NavLink></li>
                        <li><NavLink to="/horror"
                                     activeStyle={{color: '#FB0378'}}>Horror</NavLink></li>
                        <li><NavLink to="/people"
                                     activeStyle={{color: '#FB0378'}}>People</NavLink></li>

                    </ul>
                    <div className="searchbox">
                        <input type="text" placeholder="Search" onChange={this.handleChange}/>
                    </div>
                    <div id="side-menu" className="side-nav">
                        <a href=" " className="btn-close" onClick={this.btnclose}>&times;</a>
                        <a href=" " onClick={this.btnclose}><NavLink exact to="/"
                                                                     activeStyle={{color: '#FB0378'}}>Home</NavLink></a>
                        <a href=" " onClick={this.btnclose}><NavLink to="/comdey"
                                                                     activeStyle={{color: '#FB0378'}}>Comedy</NavLink></a>
                        <a href=" " onClick={this.btnclose}><NavLink to="/drama"
                                                                     activeStyle={{color: '#FB0378'}}>Drama</NavLink></a>
                        <a href=" " onClick={this.btnclose}><NavLink to="/action"
                                                                     activeStyle={{color: '#FB0378'}}>Action</NavLink></a>
                        <a href=" " onClick={this.btnclose}><NavLink to="/horror"
                                                                     activeStyle={{color: '#FB0378'}}>Horror</NavLink></a>
                        <a href=" " onClick={this.btnclose}><NavLink to="/people" 
                                                                     activeStyle={{color: '#FB0378'}}>People</NavLink></a>

                    </div>
                </div>
            </div>


        );
    }
}

export default withRouter(Header);

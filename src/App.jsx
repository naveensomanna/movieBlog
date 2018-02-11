import React from 'react';
import './index.css';
import Header from './Header.js';
import Home from './Home.js';
import Comdey from './Comdey.js';
import Drama from './Drama.js';
import TvShows from './TvShows.js';
import Footer from './Footer.js';
import Movies from './Movies.js';
import Moviess from './Moviess.js';
import Moviesss from './Moviesss.js';

import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';

export default class App extends React.Component{
    constructor(props) {
        super(props)
        
      
    this.scrollFunction=this.scrollFunction.bind(this);
    this.topFunction=this.topFunction.bind(this);
      }
    scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }
    topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
render(){
    window.onscroll =()=> {this.scrollFunction()};

    return(
<Router>
    <div>
    <Header/>
    

<Route exact path="/" component={Home}/>
<Route  path="/comdey" component={Comdey}/>
<Route  path="/drama" component={Drama}/>
<Route  path="/tvshows" component={TvShows}/>
<Route  path="/movies/:id" component={Movies}/>
<Route  path="/moviess/:id" component={Moviess}/>
<Route  path="/moviesss/:id" component={Moviesss}/>

<Footer/>
<button onClick={this.topFunction} id="myBtn" title="Go to top">Top</button>

    </div>
   </Router>
    );
}
}


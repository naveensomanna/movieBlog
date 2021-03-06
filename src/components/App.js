import React from 'react';
import '../index.css';
import Header from './Header.js';
import Home from './Home.js';
import Comdey from './genres/Comdey.js';
import Drama from './genres/Drama.js';
import Action from './genres/Action.js';
import Horror from './genres/Horror.js';
import Footer from './Footer.js';
import MovieInfo from './movieInfo/MovieInfo.js';
import SearchBar from './Searchbar.js';
import People from './genres/People.js';
import {BrowserRouter as Router,Route} from 'react-router-dom';

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
    <React.Fragment>
    <Header/>
<Route exact path="/" component={Home}/>
<Route  path="/comdey" component={Comdey}/>
<Route  path="/drama" component={Drama}/>
<Route  path="/action" component={Action}/>
<Route  path="/horror" component={Horror}/>
<Route  path="/movies/:id" component={MovieInfo}/>
<Route  path="/SearchBar/:id" component={SearchBar}/>
<Route path="/people" component={People}/>
<Footer/>
<button onClick={this.topFunction} id="myBtn" title="Go to top"> &#8593;</button>

    </React.Fragment>
   </Router>
    );
}
}



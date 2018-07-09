import React from 'react';
import './index.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Comdey from './components/Comdey.js';
import Drama from './components/Drama.js';
import Action from './components/Action.js';
import Horror from './components/Horror.js';
import Footer from './components/Footer.js';
import Movies from './components/Movies.js';
import SearchBar from './components/Searchbar.js';
import People from './components/People.js';
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
    <div>

    <Header/>
<Route exact path="/" component={Home}/>
<Route  path="/comdey" component={Comdey}/>
<Route  path="/drama" component={Drama}/>
<Route  path="/action" component={Action}/>
<Route  path="/horror" component={Horror}/>
<Route  path="/movies/:id" component={Movies}/>
<Route  path="/SearchBar/:id" component={SearchBar}/>
<Route path="/people" component={People}/>
<Footer/>
<button onClick={this.topFunction} id="myBtn" title="Go to top"> &#8593;</button>

    </div>
   </Router>
    );
}
}



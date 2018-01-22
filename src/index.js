import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header.js';
import Home from './Home.js';
import Comdey from './Comdey.js';
import Drama from './Drama.js';
import TvShows from './TvShows.js';
import Footer from './Footer.js';

import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router>
    <div>
    <Header/>
    

<Route exact path="/" component={Home}/>
<Route  path="/comdey" component={Comdey}/>
<Route  path="/drama" component={Drama}/>
<Route  path="/tvshows" component={TvShows}/>
<Footer/>

    </div>
   </Router> ,
 document.getElementById('root'));
registerServiceWorker();

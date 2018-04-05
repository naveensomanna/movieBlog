import React from 'react';
import {Jumbotron, Grid, Row, Col,button} from 'react-bootstrap';
import axios from 'axios';
import NowPlaying from './NowPlaying.js';
import UpcomingMovies from './Upcoming.jsx';
import Latest from './latest.js';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: []
    }
  }
   

  
  render() {
    
  

    var style = {
      marginLeft: '400px'
    }




// When the user clicks on the button, scroll to the top of the document

    return (
      <div>

 
        <NowPlaying/>

          <UpcomingMovies/>
        <Latest/>
        </div>

    
    );

  }
}
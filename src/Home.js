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
    this.handleClick = this
      .handleClick
      .bind(this);
    this.getdata = this
      .getdata
      .bind(this);

  }
  componentDidMount() {
    this.getdata();

  }
  handleClick(data) {

    console.log("click value" + data);
    console.log(data);

    this.getdata(data.selected + 1);
  }
  getdata(value) {
    let requestUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0060474990618f8eace5a7835a1fead6&page=" + value;
    axios
      .get(requestUrl)
      .then(response => {
        this.setState({movie: response.data.results})
      });
    console.log("results array" + this.state.movie);
  }
   

  
  render() {
    let baseImgURL = "https://image.tmdb.org/t/p/w500";
    let movieList = this
      .state
      .movie
      .map(movie => {
        console.log("mapped movie" + movie)
        let imgurl = baseImgURL + movie.poster_path;
        console.log("imgurl" + imgurl)
        return (
          <div>

            <a href=""><img src={imgurl} alt="" width="250px" height="250px"/></a>
            <div className="moviedetails">
              {movie.title}
              {movie.release_date}
            </div>

          </div>
        );
      });

    var style = {
      marginLeft: '400px'
    }




// When the user clicks on the button, scroll to the top of the document

    return (
      <div>

 
        <NowPlaying/>
        <div className="upcomingmainblog">
        <h5 className="contentheading">upcoming news</h5> 

        <div className="upcomingmain">
          <UpcomingMovies/>
        </div>
        </div>
        <Latest/>

        </div>
    
    );

  }
}
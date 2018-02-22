import React from 'react';
import axios from 'axios';
import {Carousel,CarouselCaption,CarouselItem} from 'react-bootstrap';

export default class UpcomingMovies extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movie:[],
        }
    }
componentWillMount(){
    let requestUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
    axios.get(requestUrl).then(response => {
      this.setState({
        movie: response.data.results
      })
    });
    console.log("url"+this.state.movie);
}
    render(){
        let baseImgURL = "https://image.tmdb.org/t/p/w500";
        let movies=[];
        movies=this.state.movie.slice(2,5);
      let movieList = movies.map(movie => {
        return baseImgURL + movie.poster_path;
      });
        return (

            <div id="carouselblog">
<div >
            <Carousel >
    <Carousel.Item>
      <img className="img1carousel" width={1000} height={300} alt="900x500" src={movieList[0]} />
      <Carousel.Caption>
       <h5></h5>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="img1carousel" width={1000} height={300} alt="900x500" src={movieList[1]} />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="img1carousel" width={1000} height={300} alt="900x500" src={movieList[2]} />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>     
 </div>
        </div>
        );
      
     
        
    }
}
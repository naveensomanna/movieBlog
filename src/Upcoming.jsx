import React from 'react';
import axios from 'axios';
import {Carousel,CarouselCaption,CarouselItem,Row,Col, Grid} from 'react-bootstrap';

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
        let baseImgURL = "https://image.tmdb.org/t/p/w780";
        let movies=[];
        movies=this.state.movie.slice(2,5);
      let movieList = movies.map(movie => {
        return baseImgURL + movie.poster_path;
      });
        return (

            <div >
            <Grid>
            <Row>
              <Col>
              <div md={12} lg={12} id="upcoming_main-blog" >
             <h3> up coming </h3>  
              </div>
              </Col>
              </Row>
              </Grid>
              <Grid>
              <Row>
                <Col>
                <div md={12} id="carousell">   
                         <Carousel>
    <Carousel.Item>
      <img   alt="900x500" src={movieList[0]} width="100%" height="1200px" /> 
    </Carousel.Item>
    <Carousel.Item>
      <img  className="carousel_image" alt="900x500" src={movieList[1]} width="400px" height="1200px"/>
      
    </Carousel.Item>
    <Carousel.Item>
      <img className="carousel_image" alt="900x500" src={movieList[2]} width="400px" height="1200px"/>
      
    </Carousel.Item>
  </Carousel>     
        </div>
        </Col>
        </Row>
        </Grid>
        </div>
        );
      
     
        
    }
}
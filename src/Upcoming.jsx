import React from 'react';
import axios from 'axios';

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
        let baseImgURL = "https://image.tmdb.org/t/p/w1280";
        let movies=[];
        movies=this.state.movie.slice(2,5);
      let movieList = movies.map(movie => {
        return baseImgURL + movie.poster_path;
      });
        return (

            <div >
              <div id="upcoming_main-blog" >
              </div>
                <span id="carousell">
      <img  className="carousel_image" alt="900x500" src={movieList[2]} width="100%"  height="1200px"/>

        </span>



        </div>
        );
      
     
        
    }
}
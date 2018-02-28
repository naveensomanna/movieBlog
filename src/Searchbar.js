import React from 'react';
import axios from 'axios';
export default class SearchBar extends React.Component{

    constructor(Props) {
        super(Props)
        this.state = {
          val: ' ',
          movie: [],
          query:""
        }
      }
      
        componentDidMount(){
        
      }
    render(){
        let requestUrl = "https://api.themoviedb.org/3/search/movie?api_key=0060474990618f8eace5a7835a1fead6&query="+this.props.match.params.id;
        axios
          .get(requestUrl)
          .then(response => {
            this.setState({ movie: response.data.results })
          });
        console.log("render");
    let baseImgURL = "https://image.tmdb.org/t/p/w500";
    let movies = [];
    movies = this.state.movie;
    let search_result = movies.map(movie => {
      let imgurl = baseImgURL + movie.poster_path;
      console.log(imgurl);
      return (
        <div className="well" id="well_searchbox">
          <img src={imgurl} width="186px" height="270px" />
          <div className="search_content">
          <p>{movie.title}</p>
          <p>{movie.overview}</p>
        </div>
        </div>
      );
    })
        return(
          <div id="search_wrapper_main">

            <div>
            <h2>Search <span className="glyphicons glyphicons-chevron-right x1 breadcrumb"></span>Movie Results</h2>
   <div className="search_wrapper">
      {search_result}
      </div>
      </div>
      </div>

       


    
          );
      }
}
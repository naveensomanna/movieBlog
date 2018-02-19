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
        let requestUrl = "https://api.themoviedb.org/3/search/movie?api_key=0060474990618f8eace5a7835a1fead6&query="+this.props.match.params.id;
        axios
          .get(requestUrl)
          .then(response => {
            this.setState({ movie: response.data.results })
          });
      }
    render(){
        console.log("render");
    let baseImgURL = "https://image.tmdb.org/t/p/w500";
    let movies = [];
    movies = this.state.movie;
    let title = movies.map(movie => {
      let imgurl = baseImgURL + movie.poster_path;
      console.log(imgurl);
      return (
        <div>
          <img src={imgurl} width="126px" height="250px" />
        </div>
      );
    })
        return(
            <div>

   
      {title}
      </div>
       


    
          );
      }
}
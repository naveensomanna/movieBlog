import React from 'react';
import axios from 'axios';
import { Col ,Well,Row,Grid} from 'react-bootstrap';
import SubscrbPopular from './SubscrbPopular.js';
import {NavLink} from 'react-router-dom';
export default class TvShows extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: [],
        }
    }
    componentDidMount() {
        let requestUrl = " https://api.themoviedb.org/3/tv/popular?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
        axios.get(requestUrl).then(response => {
            this.setState({
                movie: response.data.results
            });
        })
    }
    render() {
        
        let baseImgURL = "https://image.tmdb.org/t/p/w500";
        let movieList = this.state.movie.map(movie => {
            // console.log("mapped movie" + movie)
            let imgurl = baseImgURL + movie.poster_path;
            // console.log("imgurl" + imgurl)
            let tv_id=movie.id;
            return (   

                <div className=" well_genres"> 
      

                      <NavLink to=""> <img src={imgurl} alt="" width="220px" height="200px" /></NavLink>
                      <div className="details_movie">
                      <p>{movie.original_name}</p>

                <p>{movie.overview}</p>
                
                </div>
                        
                    </div>

);
        });
        return (
<div className="genre_blog">
            <h2 style={{fontSize:"2.1em",color:"black",margin:"0 0 8px 180px",fontWeight:"600"}}>Tv</h2>
            <div className="genre_details">
            <div className="main_wrapper">
                
                {movieList}
                </div>
                <div>
                <SubscrbPopular/>

                </div>
                </div>
                </div>
        );
    }
}
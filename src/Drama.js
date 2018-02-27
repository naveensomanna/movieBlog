import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import './App.css';

export default class Comdey extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movie: []
        }
    }
    componentWillMount() {
        let requestUrl = "https://api.themoviedb.org/3/genre/18/movies?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({movie: response.data.results})
            });
        console.log("url" + this.state.movie);
    }
    render()
    {
        let baseImgURL = "https://image.tmdb.org/t/p/w500";
        let movies = [];
        movies = this.state.movie;
        let movieList = movies.map(movie => {
            console.log("mapped movie" + movie)
            let imgurl = baseImgURL + movie.poster_path;
            let mainid_image2= movie.id;
            console.log("imgurl" + imgurl)
            return (
                <div className="well">
            <NavLink to={`/Movies/${mainid_image2}`}><img className="img2SecondBlog" src={imgurl} width="200px" height="220px"/></NavLink>
            <div className="details_movie">
                <p>{movie.title}</p>
                <p>{movie.overview}</p>
                
                </div>
                <div className="more_card">
                <NavLink to={`/Movies/${mainid_image2}`}><p>More</p></NavLink>
                </div>
            </div>
            );
        });
    
        return(<div>
            <h2 style={{fontSize:"1.5em",color:"black",margin:"0 0 8px 250px",fontWeight:"600"}}>Drama Movies</h2>

            <div className="main_wrapper">
                {movieList}
                </div>
                </div>
        );
    }
}

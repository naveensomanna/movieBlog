import React, { Component } from 'react';
import {params,match} from 'react-router-dom';
import {well} from 'react-bootstrap';
import axios from 'axios';

export default class Moviesss extends Component{
    constructor(props){
        super(props);
    this.state={
        movie:[],
    }
    }
    componentDidMount(){
        let requestUrl="https://api.themoviedb.org/3/movie/"+this.props.match.params.id+"?api_key=0060474990618f8eace5a7835a1fead6&language=en-US";
axios.get(requestUrl).then(response =>{
    this.setState({
        movie:response.data
    }
)
}
    );
}
    
    render(){
        let baseImgURL = "https://image.tmdb.org/t/p/w500";

        let imgUrl=baseImgURL+this.state.movie.poster_path;

        return (
            <div>
        <div className="well movie_details">
        <img src={imgUrl}  width="70%" height="70%"/>
        <p>{this.state.movie.original_title}</p>
        <p>{this.state.movie.overview}</p>
        <p>{this.state.movie.popularity}</p>
        <p>{this.state.movie.vote_count}</p>

        </div>
        </div>
        );
}
}
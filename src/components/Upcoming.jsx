import React from 'react';
import axios from 'axios';

export default class Upcoming extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upcoming: [],
        }
    }

    componentWillMount() {
        let requestUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
        axios.get(requestUrl).then(response => {
            this.setState({
                upcoming: response.data.results
            })
        });
    }

    render() {
        let baseImgURL = "https://image.tmdb.org/t/p/w1280";
        let movies = [];
        movies = this.state.upcoming.slice(2, 6);
        let upcoming_movie = movies.map(movie => {
            return baseImgURL + movie.poster_path;
        });
        return (
            <div>
                <span id="carousell">
      <img className="carousel_image" alt="900x500" src={upcoming_movie[1]} width="100%" height="1200px"/>
        </span>
                <div className="home-title"><p>Collections & Entertainment</p>
                </div>
                <a href="#movies_section" className="readmore"><p id="home-title-button">Read More</p></a>

            </div>
        );


    }
}
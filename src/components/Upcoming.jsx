import React from 'react';
import axios from 'axios';
import { upcomingApi,backDropApi} from "./Api";

export default class Upcoming extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upcoming: [],
        }
    }

    componentWillMount() {
        let requestUrl = upcomingApi;
        axios.get(requestUrl).then(response => {
            this.setState({
                upcoming: response.data.results
            })
        });
    }

    render() {
        let movies = [];
        movies = this.state.upcoming.slice(2, 6);
        let upcoming_movie = movies.map(movie => {
            return backDropApi + movie.poster_path;

        });
        let upcoming_movie_title=movies.map(movie =>{
            return movie.title;
        })
        return (
            <div>
                <span id="carousell">
      <img className="carousel_image" alt="900x500" src={upcoming_movie[1]} width="100%" height="1200px"/>
        </span>
                <div className="home-title"><p>{upcoming_movie_title[1]}</p>
                </div>
                <a href="#movies_section" className="readmore"><p id="home-title-button">Read More</p></a>

            </div>
        );


    }
}
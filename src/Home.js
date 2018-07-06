import React from 'react';
import {Jumbotron, Grid, Row, Col, button} from 'react-bootstrap';
import axios from 'axios';
import NowPlaying from './NowPlaying.js';
import UpcomingMovies from './Upcoming.jsx';
import Latest from './latest.js';
import ReactSlick from './ReactSlick';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: []
        }
    }

    componentDidMount() {

        let requestUrl = "https://api.themoviedb.org/3/genre/35/movies?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({movie: response.data.results})
            });

    }
    render() {


        var style = {
            marginLeft: '400px'
        }

let movied=[];
        movied=this.state.movie;
// When the user clicks on the button, scroll to the top of the document
        let movieLi = movied.map(movie => {
            console.log("mapped movie" + movie)
            let mainid_image2= movie.id;
            return (
                mainid_image2
            );
        });
        return (
            <div>
                <NowPlaying/>
                <UpcomingMovies/>
                <Latest/>

            </div>

        );

    }
}
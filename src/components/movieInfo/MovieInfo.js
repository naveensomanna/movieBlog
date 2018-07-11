import React, {Component} from 'react';
import axios from 'axios';
import Recommendation from './Recommendations.js';

export default class MovieInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            casts: [],
            trailer: [],

        }
    }

    componentDidMount() {
        let requestUrl = "https://api.themoviedb.org/3/movie/" + this.props.match.params.id + "?api_key=0060474990618f8eace5a7835a1fead6&language=en-US";
        axios.get(requestUrl).then(response => {
                this.setState({
                        movie: response.data
                    }
                )
            }
        );
        let requestUrl1 = "https://api.themoviedb.org/3/movie/" + this.props.match.params.id + "/casts?api_key=0060474990618f8eace5a7835a1fead6&language=en-US";
        axios.get(requestUrl1).then(response => {
                this.setState({
                        casts: response.data.cast
                    }
                )
            }
        );
        let requestUrl2 = "https://api.themoviedb.org/3/movie/" + this.props.match.params.id + "/videos?api_key=0060474990618f8eace5a7835a1fead6&language=en-US";
        axios.get(requestUrl2).then(response => {
                this.setState({
                        trailer: response.data.results
                    }
                )
            }
        );

    }
    componentDidUpdate() {

            window.scrollTo(0,0);


    }
    render() {
        let baseImgURL = "https://image.tmdb.org/t/p/w500";
        let URL_YOUTUBE = 'https://www.youtube.com/embed/';
        let videos = [];
        videos = this.state.trailer.slice(0, 3);
        let link = videos.map(trailer => {
            return trailer.key;
        });
        let link1 = URL_YOUTUBE + link[0];
        let imgUrl = baseImgURL + this.state.movie.poster_path;
        let imgUrl_backdrop = "https://image.tmdb.org/t/p/w1280" + this.state.movie.backdrop_path;
        let casts_movies = [];
        casts_movies = this.state.casts.slice(1, 5);

        let casts_movieList = casts_movies.map(movie => {
            let imgurl;
            imgurl = baseImgURL + movie.profile_path;
            return (
                <div className="well_style">
                    <img src={imgurl} id="e" className="people_casting" alt=" "/><p className="casts_name">{movie.name}</p>
                </div>
            );
        });

        var Style = {
            'background-image': `url(${imgUrl_backdrop}) `,
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
            'max-width': '100%',
            'filter': 'brightness(0.3)'
        }


        return (
            <div>
                <div className="first">
                    <div id="bg_image" className="second" style={Style}></div>
                    <div className="movie_details_main">
                        <div className="overlay_image">
                            <img src={imgUrl} alt=" "/>
                        </div>
                        <div className="sing_colum_blog">
                            <p className="movie_details_title">{this.state.movie.original_title}</p>
                            <p>Overview :</p>
                            <p className="movie_details">{this.state.movie.overview}</p>
                            <p>Popularity : <span className="movie_details">{this.state.movie.popularity}</span></p>

                            <p>Votes : <span className="movie_details">{this.state.movie.vote_count}</span></p>

                        </div>
                    </div>
                </div>
                <div className="movie_detail_section">

                    <div className="people">
                        <h2>Top Billed Cast</h2>

                        <div className="casts">
                            {casts_movieList}


                        </div>
                    </div>
                    <div className="trailer">
                        <div className="trailer-body">
                            <h2>Trailer</h2>
                            <iframe src={link1} allowFullScreen title="trailer"/>
                        </div>
                    </div>

                    <Recommendation id={this.props.match.params.id}/>
                </div>
            </div>
        );
    }
}
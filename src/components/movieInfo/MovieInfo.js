import React, {Component} from 'react';
import axios from 'axios';
import Recommendation from './Recommendations.js';
import {BarLoader} from 'react-css-loaders';
import {baseImgURL, YoutubeApi,movieBaseUrl,token,backDropApi} from "../Api";

export default class MovieInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            casts: [],
            trailer: [],
            movieViewState: 0,
            castsViewState: 0,
            trailerViewState: 0,
        }
    }

    componentDidMount() {
        let requestUrl = movieBaseUrl + this.props.match.params.id + token ;
        axios.get(requestUrl).then(response => {
                this.setState({
                        movie: response.data,
                        movieViewState: 1
                    }
                )
            }
        ).catch(() => {
            this.setState({
                    movieViewState: 2
                }
            )

        })

        let requestUrl1 = movieBaseUrl + this.props.match.params.id + "/casts"+token;
        axios.get(requestUrl1).then(response => {
                this.setState({
                        casts: response.data.cast,
                        castsViewState: 1
                    }
                )
            }
        ).catch(() => {
            this.setState({
                castsViewState: 2
            })
        })

        let requestUrl2 = movieBaseUrl + this.props.match.params.id + "/videos"+token;
        axios.get(requestUrl2).then(response => {
                this.setState({
                        trailer: response.data.results,
                        trailerViewState: 1
                    }
                )
            }
        ).catch(() => {
            this.setState({
                trailerViewState: 2
            });

        })

    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    render() {
        let movieStateVariable, castsStateVariable, trailerStateVariable,videos = [], casts_movieList,casts_movies = [],link,trailerUrl,imgUrl,imgUrl_backdrop;

        videos = this.state.trailer.slice(0, 3);
        link = videos.map(trailer => {
            return trailer.key;
        });
         trailerUrl = YoutubeApi + link[0];
         imgUrl = baseImgURL + this.state.movie.poster_path;
         imgUrl_backdrop =  backDropApi+ this.state.movie.backdrop_path;
        casts_movies = this.state.casts.slice(1, 5);
        casts_movieList = casts_movies.map(movie => {
            let imgurl;
            imgurl = baseImgURL + movie.profile_path;
            return (
                <div className="well_style" key={movie.id}>
                    <img src={imgurl} id="e" className="people_casting" alt=" "/><p
                    className="casts_name">{movie.name}</p>
                </div>
            );
        });
        var Style = {
            'backgroundImage': `url(${imgUrl_backdrop}) `,
            'backgroundRepeat': 'no-repeat',
            'backgroundSize': 'cover',
            'maxWidth': '100%',
            'filter': 'brightness(0.3)'
        }

        movieStateVariable = (() => {
            switch (this.state.movieViewState) {
                case 0:
                    return <BarLoader/>;
                case 1:
                    return <Bground imgUrl={imgUrl} original_title={this.state.movie.original_title} Style={Style}
                                    overview={this.state.movie.overview} popularity={this.state.movie.popularity}
                                    vote_count={this.state.movie.vote_count}/>;
                default:
                    return null;
            }
        })();
        castsStateVariable = (() => {
            switch (this.state.castsViewState) {
                case 0:
                    return <BarLoader/>;
                case 1:
                    return <Casts casts_movieList={casts_movieList}/>

            }
        })();
        trailerStateVariable = (() => {
            switch (this.state.trailerViewState) {
                case 0:
                    return <BarLoader/>;
                case 1:
                    return <Trailer trailerUrl={trailerUrl}/>
            }
        })();

        return (
            <div className="first">
                {movieStateVariable}
                <div className="movie_detail_section">
                    {castsStateVariable}
                    <div className="trailer">
                        {trailerStateVariable}
                    </div>
                    <Recommendation id={this.props.match.params.id}/>
                </div>
            </div>
        );
    }
}
const Bground = (props) => {
    return (
        <React.Fragment>
            <div id="bg_image" className="second" style={props.Style}></div>
            <div className="movie_details_main">
                <div className="overlay_image">
                    <img src={props.imgUrl} alt=" "/>
                </div>
                <div className="sing_colum_blog">
                    <p className="movie_details_title">{props.original_title}</p>
                    <p>Overview :</p>
                    <p className="movie_details">{props.overview}</p>
                    <p>Popularity : <span className="movie_details">{props.popularity}</span></p>
                    <p>Votes : <span className="movie_details">{props.vote_count}</span></p>
                </div>
            </div>
        </React.Fragment>
    );
}
const Casts = (props) => {
    return (

        <div className="people">
            <div style={{margin: '0 auto'}}>
                <h2>Top Billed Cast</h2>
                <div className="casts">
                    {props.casts_movieList}
                </div>
            </div>
        </div>
    )
}
const Trailer = (props) => {
    return (

        <div className="trailer-body">
            <h2>Trailer</h2>
            <iframe src={props.trailerUrl} allowFullScreen title="trailer"/>
        </div>
    )
}
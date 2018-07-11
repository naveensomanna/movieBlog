import React from 'react'
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import { now_playingApi ,baseImgURL} from './Api.js';

export default class NowPlaying extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            in_theatre: [],

        }
    }

    componentDidMount() {
        let requestUrl = now_playingApi;
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({in_theatre: response.data.results})
            });

    }

    render() {
        let theatre_movies = [], theatre_movies1 = [], main_image2;
        theatre_movies = this.state.in_theatre.slice(1, 2);
        let movieList = theatre_movies.map(movie => {
            let imgurl = baseImgURL + movie.poster_path;
            let main_image1 = movie.id;
            return (
                <div className="block_item1" key={movie.id} >
                    <div  className="boxshadow_img" id="running_now1">
                        <img id="img1FirstBlog" src={imgurl} alt=" "/>
                    </div>
                    <div className="movie_title">
                        <NavLink to={`/Movies/${main_image1}`}><p> {movie.title}</p></NavLink>
                        <p> {movie.release_date}</p>
                    </div>
                </div>

            );
        });



        theatre_movies1 = this.state.in_theatre.slice(3, 7);


      let  movieList1 = theatre_movies1.map(movie => {
            let imgurl1 = baseImgURL + movie.poster_path;
            main_image2 = movie.id;
            return (
                <div className="block_item2 top-blog" key={movie.id}>
                    <div className="boxshadow_img">
                        <img className="img2SecondBlog" src={imgurl1} alt=" "/>
                    </div>
                    <div className="movie_title">
                        <NavLink to={`/Movies/${main_image2}`}><p> {movie.title}</p>
                        </NavLink>
                        <p>{movie.release_date}</p>
                    </div>
                </div>

            );
        });
        return (
            <React.Fragment>
                <div className="np_block_wrapper" >
                    <div className="_intheatre" >
                        <h4 className="title_" id="movies_section">In Theaters</h4>
                        <div className="theater_blog">

                                {movieList}

                            <div className="wrap_img">
                                {movieList1}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

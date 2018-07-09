import React from 'react'
import axios from 'axios';
import {NavLink} from 'react-router-dom';

export default class NowPlaying extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            movie1: [],

        }
    }

    componentDidMount() {
        let requestUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({movie: response.data.results})
            });

    }

    render() {

        let baseImgURL = "https://image.tmdb.org/t/p/w500";
        let movies = [], mainid_image2, movieList;

        movies = this.state.movie.slice(3, 7);


        movieList = movies.map(movie => {
            let imgurl = baseImgURL + movie.poster_path;
            mainid_image2 = movie.id;
            return (
                <div className="block_item2 top-blog" key={movie.id}>
                    <div className="boxshadow_img">
                        <img className="img2SecondBlog" src={imgurl} alt=" "/>
                    </div>
                    <div className="movie_title">
                        <NavLink to={`/Movies/${mainid_image2}`}><p> {movie.title}</p>
                        </NavLink>
                        <p>{movie.release_date}</p>
                    </div>
                </div>

            );
        });
        let movies1 = [];
        movies1 = this.state.movie
            .slice(1, 2);
        let movieList1 = movies1.map(movie => {
            let imgurl = baseImgURL + movie.poster_path;
            let mainid_image1 = movie.id;
            return (
                <div className="block_item1" key={movie.id}>
                    <div style={{overflow: "hidden"}} className="boxshadow_img">
                        <img id="img1FirstBlog" src={imgurl} alt=" "/>
                    </div>
                    <div className="movie_title">
                        <NavLink to={`/Movies/${mainid_image1}`}><p> {movie.title}</p></NavLink>
                        <p> {movie.release_date}</p>
                    </div>
                </div>

            );
        });


        return (
            <React.Fragment>
                <div className="np_block_wrapper">
                    <div className="_intheatre">
                        <h4 className="title_">In Theaters</h4>
                        <div className="theater_blog">
                            <div>
                                {movieList1}
                            </div>
                            <div className="wrap_img">
                                {movieList}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

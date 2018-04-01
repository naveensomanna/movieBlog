import React from 'react'
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

var arr;
var nam,aa=[];
export default class NowPlaying extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            movie1:[],
    
        }
    }
    componentDidMount() {
        let requestUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({ movie: response.data.results })
            });
        console.log("url" + arr);
       
    }
    
    render() {
        
        let baseImgURL = "https://image.tmdb.org/t/p/w500";
        let movies = [];
        movies = this
            .state
            .movie
            .slice(3, 7);
        let mainid_image2;
       arr=movies.map(id=>{
            return id.id;
                    });
            nam=this.state.movie1.map(na=>{
                return na.name;
            });
        let movieList = movies.map(movie => {
            console.log("mapped movie" + movie)
            let imgurl = baseImgURL + movie.poster_path;
            mainid_image2 = movie.id;
            console.log("imgurl" + imgurl);
            return (
                <div className="block_item2">
                    <div className="boxshadow_img">
                        <img className="img2SecondBlog" src={imgurl}  />

                    </div>
                    <div className="movie_title">
                        <NavLink to={`/Movies/${mainid_image2}`}> <p> {movie.title}</p>{nam}</NavLink>
                        <p>{movie.release_date}</p>
                    </div>
                </div>

            );
        });
        let movies1 = [];
        movies1 = this.state.movie
            .slice(1, 2);
        console.log("movies1" + movies1);
        let movieList1 = movies1.map(movie => {
            let imgurl = baseImgURL + movie.poster_path;
           let mainid_image1=movie.id;
            return (
                <div className="block_item1">
                    <div style={{ overflow: "hidden",height:"500px" }} className="boxshadow_img" >
                        <img id="img1FirstBlog" src={imgurl}   />
                    </div>
                    <div className="movie_title">
                    <NavLink to={`/Movies/${mainid_image1}`}>   <p> {movie.title}</p><p></p></NavLink>
                        <p > {movie.release_date}</p>
                    </div>
                </div>

            );
        });

        
        var Style = {
            marginLeft: "190px"
        }
        return (
            <div className="np_block_wrapper">
                <h4>In Theatre</h4>

                <div className="theater_blog">

                    <div >

                        {movieList1}
                    </div>
                    <div className="wrap_img" >
                        {movieList}
                    </div>
                </div>
            </div>

        );
    }
}

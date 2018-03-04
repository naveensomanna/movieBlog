import React from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SubscrbPopular from './SubscrbPopular.js';
let datas = [];
export default class Latest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
        }
    }
    componentDidMount() {
        console.log("componentWillMount");
        let requestUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
        axios.get(requestUrl).then(response => {
            this.setState({
                movie: response.data.results
            })
            console.log("got the results1");

        });
        // console.log("url in latest" + this.state.movie);
        
    }
    render() {
        console.log("render called");
        let baseImgURL = "https://image.tmdb.org/t/p/w500";
        let movies = [];
        movies = this
            .state
            .movie
            .slice(1, 7);
        let movieList = movies.map(movie => {
            // console.log("mapped movie" + movie)
            let imgurl = baseImgURL + movie.poster_path;
            let main_imgid = movie.id;
            // console.log("imgurl" + imgurl)
            return (<div className="block_item2">
            <div className="boxshadow_img">
            <img className="img_align" src={imgurl} width="375px" height="300px" />  </div>
                              <div className="movie_title">
<Link to={`/Movies/${main_imgid}`}>{movie.title}</Link><p>{movie.release_date}</p></div></div>

);
        });
        
        // console.log(moviess.release_date);
        return (
            <div>
                <div className="toprated-main">
                    <Row>
                        <Col lg={8} md={6} xs={12} sm={12}>

                            <div className="contents-toprated">
                                <h4>top rated movies</h4>
                                <div className="main-blog">

                                    {movieList}

                                </div>

                            </div>
                        </Col>
                        <Col lg={4}>
                            <SubscrbPopular/>
                        </Col>
                    </Row>
                </div>

            </div>

        );
    }
}
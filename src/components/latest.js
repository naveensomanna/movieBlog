import React from 'react';
import axios from 'axios';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Popular from './Popular.js';

export default class Latest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toprated: [],
        }
    }

    componentDidMount() {
        let requestUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
        axios.get(requestUrl).then(response => {
            this.setState({
                toprated: response.data.results
            })

        });

    }

    render() {
        let baseImgURL = "https://image.tmdb.org/t/p/w500";
        let toprated_movies = [];
        toprated_movies = this.state.toprated.slice(1, 7);
        let movieList = toprated_movies.map(data => {
            let imgurl = baseImgURL + data.poster_path;
            let main_imgid = data.id;
            return (
                <div className="block_item2" key={data.id}>
                    <div className="boxshadow_img" id="up_movies">
                        <img className="img_align" src={imgurl} alt=" "/>
                    </div>
                    <div className="movie_title">
                        <Link to={`/Movies/${main_imgid}`}>{data.title}</Link><p>{data.release_date}</p></div>
                </div>

            );
        });
        return (
            <div>
                <div className="toprated-main">
                    <Row>
                        <Col lg={7} md={8} sm={8} xs={12}>
                            <div className="contents-toprated">
                                <div className="main-blog">
                                    <h4 className="toprated_title">top rated movies</h4>
                                    <div className="inner-blog">

                                        {movieList}

                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} md={4} sm={4} xs={12}>
                            <Popular/>
                        </Col>
                    </Row>
                </div>
            </div>

        );
    }
}
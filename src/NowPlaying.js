import React from 'react'
import axios from 'axios';
import {Row,Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
export default class NowPlaying extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: []
        }
    }
    componentWillMount() {
        let requestUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=0060474990618f8eace5a7835" +
                "a1fead6&language=en-US&page=1";
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({movie: response.data.results})
            });
        console.log("url" + this.state.movie);
    }
    render()
    {
        let baseImgURL = "https://image.tmdb.org/t/p/w500";
        let movies = [];
        movies = this
            .state
            .movie
            .slice(13, 17);
        let movieList = movies.map(movie => {
            console.log("mapped movie" + movie)
            let imgurl = baseImgURL + movie.poster_path;
            console.log("imgurl" + imgurl)
            return (<img className="img2SecondBlog" src={imgurl} width="326px" height="250px"/>);
        });
        let movies1 = [];
        movies1 = this.state .movie
            .slice(4, 5);
        console.log("movies1" + movies1);
        let movieList1 = movies1.map(movie => {
            let imgurl = baseImgURL + movie.poster_path;
            return (<img id="img1FirstBlog" src={imgurl} width="500px" height="500px"/>);
        });
        var Style={
            marginLeft:"190px"
        }
        return (
            <div>
                <h4 style={Style} className="h4_theatre">In Theatre</h4>

                            <div class="theater_blog">
            <Row>

                <Col lg={5}>

                {movieList1}
                    </Col>
                    <Col lg={7}>
                    {movieList}
                </Col>
            
                </Row>
                </div>
</div>
               );
    }
}

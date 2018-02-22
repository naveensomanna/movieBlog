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
        let requestUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
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
            let mainid_image2= movie.id;
            console.log("imgurl" + imgurl)
            return (
            <NavLink to={`/Movies/${mainid_image2}`}><img className="img2SecondBlog" src={imgurl} width="329px" height="250px"/></NavLink>);
        });
        let movies1 = [];
        movies1 = this.state .movie
            .slice(4, 5);
        console.log("movies1" + movies1);
        let movieList1 = movies1.map(movie => {
            let imgurl = baseImgURL + movie.poster_path;
            return (<div>
            <img id="img1FirstBlog" src={imgurl} width="495px" height="500px"/>
            </div>
            );
        });
        
      let  mainid_image1= movies1.map(movie =>{
return movie.id;
       });
        var Style={
            marginLeft:"190px"
        }
        return (
            <div><h4 style={Style}>In Theatre</h4>

                            <div class="theater_blog">
            <Row>

                <Col lg={5} md={6} xs={12} sm={12}>

               <NavLink to={`/Movies/${mainid_image1[0]}`} className="hover_movienname"> {movieList1}</NavLink>
                    </Col>
                    <Col lg={7} md={6} xs={12} sm={12}>
                    {movieList}
                </Col>
            
                </Row>
                </div>
</div>
               );
    }
}

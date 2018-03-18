import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import {Pager ,Item} from 'react-bootstrap';
import SubscrbPopular from './SubscrbPopular.js';
import './App.css';
import template from './images/comedy_template.png';
import './carousel.js';
import ReactSlick from './ReactSlick';
export default class Comdey extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            movie1:[],
            count:1,
            pagecount:1
        }
    }
    componentWillMount(){
        console.log("parent will");
        let requestUrl = "https://api.themoviedb.org/3/genre/35/movies?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({movie1: response.data.results})
            });

        }
    componentDidMount() {
        console.log("parent did");
        let requestUrl = "https://api.themoviedb.org/3/genre/35/movies?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page="+this.state.count;
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({movie: response.data.results})
            });
        console.log("url" + this.state.movie);
    }
   

    render()
    {
       

        let movied = [];
        movied = this.state.movie1;
        let movieLi = movied.map(movie => {
            console.log("mapped movie" + movie)
            let mainid_image2= movie.id;
            return (
                mainid_image2
            );
        });
        let baseImgURL = "https://image.tmdb.org/t/p/w500";
        let movies = [];
        movies = this.state.movie;
        let movieList = movies.map(movie => {
            console.log("mapped movie" + movie)
            let imgurl = baseImgURL + movie.poster_path;
            let mainid_image2= movie.id;
            console.log("imgurl" + imgurl)
            return (
                <div className="well_comedy">
            <NavLink to={`/Movies/${mainid_image2}`}><img className="comedy_image" src={imgurl} width="240px" height="230px"/></NavLink>
            <div className="comedy_title">
                <p>{movie.title}</p>    
                </div>
                
            </div>
            );
        });


        
        console.log("fadeblog");

        let styles = {
            
               backgroundImage: `url(${template})`,
               backgroundRepeat: 'repeat-x',
               backgroundPosition: 'bottom',
          
        }
        return(
            <div className="genre_blog">
            <div id="comedy_carousel_blog" style={styles}>
            <h1>Comedy Movies</h1>
            <ReactSlick data={movieLi}/>
            </div>
            <div className="comedy_details">
            <div className="comedy_wrapper">
                
                {movieList}
                </div>
                <div>
                <SubscrbPopular/>

                </div>
                </div>
               
                </div>
        );
    }
}

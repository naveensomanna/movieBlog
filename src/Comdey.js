import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import {Pager ,Item} from 'react-bootstrap';
import SubscrbPopular from './SubscrbPopular.js';
import './App.css';
import template from './images/comedy_template.png';

export default class Comdey extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            count:1,
            pagecount:1
        }
        this.handleClick=this.handleClick.bind(this);
        this.handlePrevious=this.handlePrevious.bind(this);
    }
    componentWillMount() {
       
        console.log("url" + this.state.movie);
    }
    handleClick(e){
e.preventDefault();
let co=++this.state.pagecount;
if(true){
this.setState({
    count:co

    });
}
    }
handlePrevious(e){
    e.preventDefault();
let co=--this.state.pagecount;
    this.setState({
        count:co
    })
}

    render()
    {
        let requestUrl = "https://api.themoviedb.org/3/genre/35/movies?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page="+this.state.count;
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({movie: response.data.results})
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


        let movie_ = [];
        movie_ = this.state.movie.slice(10,17);
        let movie__fadeblog = movie_.map(movie => {
            console.log("mapped movie" + movie)
            let imgurl = baseImgURL + movie.poster_path;
            console.log("imgurl" + imgurl)
            return (
            <li id="slide"><img className="comedy_fade_in" src={imgurl}/></li>
            
                
            );
        });

        let styles = {
            
               backgroundImage: `url(${template})`,
               backgroundRepeat: 'repeat-x',
               backgroundPosition: 'bottom',
          
        }
        return(
            <div className="genre_blog">
            <div id="comedy_carousel_blog" style={styles}>
            <h1>Comedy Movies</h1>
            <div id="fade_carousel_blog">

<ul id="img_fade">{movie__fadeblog}</ul>
                </div>
            </div>
            <div className="comedy_details">
            <div className="comedy_wrapper">
                
                {movieList}
                </div>
                <div>
                <SubscrbPopular/>

                </div>
                </div>
                <Pager>
  <Pager.Item href="#" onClick={this.handlePrevious}>Previous</Pager.Item>{' '}
  <Pager.Item href="" onClick={this.handleClick}>Next</Pager.Item>
</Pager>
                </div>
        );
    }
}

import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import './App.css';
import './carousel.js';
import ReactSlick from './ReactSlick';
import ReactPaginate from 'react-paginate';

export default class Comdey extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            data:[],
            pageCount:10
        }
        this.handlePageClick=this.handlePageClick.bind(this);
    }
    
    componentDidMount() {
        console.log("parent did");
        let requestUrl = "https://api.themoviedb.org/3/genre/35/movies?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({movie: response.data.results})
            });
        console.log("url" + this.state.movie);
    }
   handlePageClick(data){
       console.log(data);
       var pageValue=data.selected+1;
    let requestUrl1 = "https://api.themoviedb.org/3/genre/35/movies?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page="+pageValue;
    axios
        .get(requestUrl1)
        .then(response => {
            this.setState({movie: response.data.results})
        });
   }

    render()
    {
        let baseImgURL = "https://image.tmdb.org/t/p/w500";
        let movied = [],movies = [];
        movied = this.state.movie;
        let movieLi = movied.map(movie => {
            console.log("mapped movie" + movie)
            let mainid_image2= movie.id;
            return (
                mainid_image2
            );
        });
        movies = this.state.movie;
        let movieList = movies.map(movie => {
            console.log("mapped movie" + movie)
            let imgurl = baseImgURL + movie.poster_path;
            let mainid_image2= movie.id;
            console.log("imgurl" + imgurl)
            return (
                <div className="well_genres">
            <NavLink to={`/Movies/${mainid_image2}`}><img className="genre_image" src={imgurl} width="240px" height="230px"/></NavLink>
            <div className="genre_title">
                <p>{movie.title}<span className="vote_genres">{movie.vote_average}<span className="glyphicon glyphicon-star"></span></span></p>   
                </div>
                
            </div>
            );
        });


        

        return(
            <div className="genre_blog">
            <div id="comedy_carousel_blog" >
            <ReactSlick data={movieLi}/>
            </div>
            <div className="title_movies container">
            <h2>Comedy Movies</h2>
            </div>
            <div className="genre_details">
            <div className="genre_wrapper ">
                
                {movieList}
                </div>
               
                </div>
                <div className="pagination">                   
                    <ReactPaginate previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={<a href="">...</a>}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                
                />                </div>
                </div>
        );
    }
}

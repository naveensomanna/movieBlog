import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import './App.css';

export default class Drama extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            count:1,
            pagecount:1
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){
        
        }
    componentWillMount() {
      
        console.log("url" + this.state.movie);
    }
    componentDidMount(){
        let requestUrl = "https://api.themoviedb.org/3/genre/18/movies?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
    axios
        .get(requestUrl)
        .then(response => {
            this.setState({movie: response.data.results})
        });
    }
    render()
    { 
         

        let baseImgURL = "https://image.tmdb.org/t/p/w500";
        let movies = [];
        movies = this.state.movie;
        let movieList = movies.map(movie => {
            console.log("mapped movie" + movie)
            let imgurl = baseImgURL + movie.poster_path;
            let mainid_image2= movie.id;
            console.log("imgurl" + imgurl)
            return (
                <div className="well_genres">
            <NavLink to={`/Movies/${mainid_image2}`}><img  className="genre_image" src={imgurl} width="200px" height="300px"/></NavLink>
                    <div className="genre_title">
                        <p>{movie.title}</p>
                    </div>
                    <div className="vote_genres">{movie.release_date}</div>
            </div>
            );
        });
    
        return(
        <div className="genre_blog">
        <div className="title_movies container">

        </div>
<div className="genre_details">
            <div className="genre_wrapper">
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

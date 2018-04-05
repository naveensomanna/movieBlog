import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import './App.css';

export default class Horror extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            data:[],
            pageCount:10
        }
        this.handlePageClick=this.handlePageClick.bind(this);
    }
    componentWillMount() {
        
        console.log("url" + this.state.movie);
    }
    handlePageClick(data){
        var pageValue=data.selected+1;
        let requestUrl = "https://api.themoviedb.org/3/genre/27/movies?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page="+pageValue;
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({movie: response.data.results})
            });
        }
            
        
        componentDidMount()
        {
            let requestUrl = "https://api.themoviedb.org/3/genre/27/movies?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
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
                <div className=" well_genres">
            <NavLink to={`/Movies/${mainid_image2}`}><img  className="genre_image" src={imgurl} width="240px" height="230px"/></NavLink>
            <div className="genre_title">
                <p>{movie.title}</p>
                </div>
            </div>
            );
        });
        return (
            <div className="genre_blog">
            <div className="title_movies container">            <h2>Horror Movies</h2>
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
                
                />       
                         </div>
                </div>
        );
    }
}



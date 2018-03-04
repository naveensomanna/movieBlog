import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Pager, Item } from 'react-bootstrap';
import SubscrbPopular from './SubscrbPopular.js';
import Pagination from './Pagination.js';
import ReactPaginate from 'react-paginate';

import './App.css';

export default class Action extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            movie: [],
            pageCount: 10,
            currentPage:1
        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }
    componentWillMount() {
        console.log("will mount");
            }
    componentDidMount() {
console.log("did mount");
let requestUrl = "https://api.themoviedb.org/3/genre/28/movies?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({ movie: response.data.results })
            });
    }
componentWillUpdate(){
    console.log(" willupdate");

}
componentDidUpdate(){
    console.log(" didupdate");

}

componentWillUnmount(){
    console.log(" willUnmount");

}
componentWillReceiveProps(){
    console.log(" receiveprops");

}
    handlePageClick(data) {
        console.log("selected");
let pagevalue=data.selected+1;
        let requestUrl = "https://api.themoviedb.org/3/genre/28/movies?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=" + pagevalue;
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({ movie: response.data.results })
            });


    }
    render() {
console.log("render called");
        let baseImgURL = "https://image.tmdb.org/t/p/w500";

        let movies = [];
        movies = this.state.movie.slice(0, 7);
        let movieList = movies.map(movie => {
            console.log("mapped movie" + movie)
            let imgurl = baseImgURL + movie.poster_path;
            let mainid_image2 = movie.id;
            console.log("imgurl" + imgurl)
            return (
                <div className=" well_genres">
                    <NavLink to={`/Movies/${mainid_image2}`}><img className="img2SecondBlog" src={imgurl} width="200px" height="200px" /></NavLink>
                    <div className="details_movie">
                        <p>{movie.title}</p>
                        <p>{movie.overview}</p>

                    </div>

                </div>
            );
        });




        return (
            <div className="genre_blog">
                <h2 style={{ fontSize: "2.1em", color: "black", margin: "0 0 8px 180px", fontWeight: "600" }}>Action Movies</h2>
                <div className="genre_details">
                    <div className="main_wrapper">

                        {movieList}



                    </div>

                    <div>
                        <SubscrbPopular />
                    </div>
                    <ReactPaginate previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={<a href="">...</a>}
                    breakClassName={"break-me"}
                    pageCount={this.props.pageCount}
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

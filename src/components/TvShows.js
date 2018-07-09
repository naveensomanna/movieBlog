import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export default class TvShows extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            data: [],
            pageCount: 10
        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    componentDidMount() {
        let requestUrl = " https://api.themoviedb.org/3/tv/popular?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
        axios.get(requestUrl).then(response => {
            this.setState({
                movie: response.data.results
            });
        })
    }

    handlePageClick(data) {
        var pageValue = data.selected + 1;
        let requestUrl1 = " https://api.themoviedb.org/3/tv/popular?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=" + pageValue;
        axios.get(requestUrl1).then(response => {
            this.setState({
                movie: response.data.results
            });
        })
    }

    render() {

        let baseImgURL = "https://image.tmdb.org/t/p/w500";
        let movieList = this.state.movie.map(movie => {
            let imgurl = baseImgURL + movie.poster_path;
            return (

                <div className=" well_genres">
                    <NavLink to=""> <img className="genre_image" src={imgurl} alt="" width="240px"
                                         height="230px"/></NavLink>
                    <div className="genre_title">
                        <p>{movie.original_name}</p>


                    </div>

                </div>

            );
        });
        return (
            <div className="genre_blog">
                <div className="title_movies container"><h2>Tv</h2></div>

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

                    /></div>
            </div>
        );
    }
}
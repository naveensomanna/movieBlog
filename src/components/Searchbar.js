import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import {baseImgURL,SearchApi} from "./Api";

export default class SearchBar extends React.Component {

    constructor(Props) {
        super(Props);
        this.state = {
            search: [],
            pageCount: 10,
        }

    }

    componentDidMount() {
        let requestUrl = SearchApi + this.props.match.params.id;
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({search: response.data.results})
            });
    }

    handlePageClick=(data) => {
        let pagevalue = data.selected + 1;
        let requestUrl = `https://api.themoviedb.org/3/search/movie?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=${pagevalue}&query=` + this.props.match.params.id;
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({search: response.data.results})
            });


    }

    render() {
        let movies = [];
        movies = this.state.search;

        let search_result = movies.map(movie => {
            let imgurl = baseImgURL + movie.poster_path;
            return (
                <div id="well_searchbox">
                    <img src={imgurl}  alt=" "/>
                </div>
            );
        })
        return (
            <div id="search_wrapper_main">
                <h3 className="genre_title container">Search Movie Results</h3>
                <div className=" search_details">
                    <div className="search_wrapper">
                        {search_result}
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
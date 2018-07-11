import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import '../../css/App.css';
import ReactPaginate from 'react-paginate';
import {ComedyApi,baseImgURL} from "../Api";

export default class Comdey extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comedy: [],
            data: [],
            pageCount: 10
        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    componentDidMount() {
        let requestUrl = ComedyApi;
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({comedy: response.data.results})
            });
    }

    handlePageClick(data) {
        console.log(data);
        var pageValue = data.selected + 1;
        let requestUrl1 = ComedyApi + pageValue;
        axios
            .get(requestUrl1)
            .then(response => {
                this.setState({comedy: response.data.results})
            });
    }

    render() {
        let comedy_movies = [];
        comedy_movies = this.state.comedy;
        let movieList = comedy_movies.map(data => {
            let imgurl = baseImgURL + data.poster_path;
            let mainid_image2 = data.id;
            return (
                <div className="well_genres">
                    <NavLink to={`/Movies/${mainid_image2}`}>

                        <img className="genre_image" src={imgurl} width="200px"
                             height="300px" alt=" "/></NavLink>
                    <div className="genre_title">
                        <p>{data.title}</p>
                    </div>
                    <div className="vote_genres">{data.release_date}</div>
                </div>
            );
        });


        return (
            <div className="genre_blog">
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

                    /></div>
            </div>
        );
    }
}

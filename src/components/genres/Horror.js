import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import '../../css/App.css';
import { HorrorApi,baseImgURL } from "../Api";

export default class Horror extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            horror: [],
            data: [],
            pageCount: 10
        }
    }

    handlePageClick = (data) => {
        var pageValue = data.selected + 1;
        let requestUrl = HorrorApi + pageValue;
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({horror: response.data.results})
            });
    }


    componentDidMount() {
        let requestUrl = HorrorApi;
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({horror: response.data.results})
            });
    }

    render() {
        let horror_movies = [];
        horror_movies = this.state.horror;
        let movieList = horror_movies.map(data => {
            let imgurl = baseImgURL + data.poster_path;
            let mainid_image2 = data.id;
            return (
                <div className=" well_genres">
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



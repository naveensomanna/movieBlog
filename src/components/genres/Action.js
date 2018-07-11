import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import '../../css/App.css';
import { ActionApi ,baseImgURL} from "../Api";

export default class Action extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            action: [],
            movie2: [],
            pageCount: 10
        }
    }

    componentDidMount() {
        let requestUrl = ActionApi;
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({action: response.data.results})
            });


    }

    handlePageClick= (data) => {
        let pagevalue = data.selected + 1;
        let requestUrl = ActionApi + pagevalue;
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({action: response.data.results})
            });


    }

    render() {
        let action_result = [];
        action_result = this.state.action;
        let movieList = action_result.map(data => {
            let imgurl = baseImgURL + data.poster_path;
            let mainid_image2 = data.id;
            return (
                <div className="well_genres">
                    <NavLink to={`/Movies/${mainid_image2}`}><img className="genre_image" src={imgurl} width="200px"
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

                    /></div>

            </div>
        );
    }
}

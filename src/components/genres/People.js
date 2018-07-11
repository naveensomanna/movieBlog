import React from 'react';
import axios from 'axios';
import {PersonApi,baseImgURL} from "../Api";

export default class People extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
        }
    }

    componentDidMount() {
        let requestUrl = PersonApi;
        axios.get(requestUrl).then(response => {
            this.setState({
                people: response.data.results
            })


        });

    }

    render() {
        let movi = [];
        movi = this.state.people;
        var people_list = movi.map(movie => {
            let imgurl = baseImgURL + movie.profile_path;
            return (
                <div className="well_genres">

                        <img className="genre_image" src={imgurl} width="200px" height="300px" alt=" "/>

                    <div className="genre_title">
                        <p >{movie.name}</p>
                    </div>
                </div>

            )
        })
        return (
            <div className="genre_blog">
                <div className="person_wrap">
                    <div className="media_people">
                        <div className="item_card">
                            {people_list}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
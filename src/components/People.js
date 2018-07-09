import React from 'react';
import axios from 'axios';

export default class Latest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
        }
    }

    componentDidMount() {
        let requestUrl = "https://api.themoviedb.org/3/person/popular?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
        axios.get(requestUrl).then(response => {
            this.setState({
                people: response.data.results
            })


        });

    }

    render() {
        let baseImgURL = "https://image.tmdb.org/t/p/w500";
        let movi = [];
        movi = this.state.people;
        var moviess = movi.map(movie => {
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
                            {moviess}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
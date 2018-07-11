import React from 'react';
import axios from 'axios';

var path = "https://image.tmdb.org/t/p/w500";
export default class Recommendation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recommend: []
        }
    }

    componentDidMount() {
        let request = `https://api.themoviedb.org/3/movie/${this.props.id}/recommendations?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1`;
        axios.get(request).then(response => {
            this.setState({
                recommend: response.data.results
            })
        });
    }

    render() {

        let img_slice = this.state.recommend.slice(1, 9);
        let recommend_poster = img_slice.map(movie => {
                let bgimg = path + movie.poster_path;
                return (
                    <div id="img_main_blog">
                        <img alt=" " src={bgimg} />
                        <p>{movie.title}<span>{movie.vote_average}<span className="glyphicon glyphicon-star" style={{marginLeft:'3px'}}></span></span></p>
                    </div>
                )
            }
        )
        return (
            <div className="movie-recommend">
                <div className="main_recommend">
                    <div>
                        <h2>Recommendation</h2>
                    </div>
                    <div className="movie_recommend">
                        {recommend_poster}
                    </div>
                </div>
            </div>
        );
    }
}
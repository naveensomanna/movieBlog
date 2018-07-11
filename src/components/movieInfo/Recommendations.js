import React from 'react';
import axios from 'axios';
import { baseImgURL , movieBaseUrl ,token} from "../Api";

export default class Recommendation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recommend: []
        }
    }

    componentDidMount() {
        let request = movieBaseUrl+ this.props.id+ "/recommendations"+token;
        axios.get(request).then(response => {
            this.setState({
                recommend: response.data.results
            })
        });
    }

    render() {

        let img_slice = this.state.recommend.slice(1, 9);
        let recommend_poster = img_slice.map(movie => {
                let bgimg = baseImgURL + movie.poster_path;
                return (
                    <div id="img_main_blog" key={movie.id}>
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
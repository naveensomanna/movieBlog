import React from 'react';
import axios from 'axios';
import { Col ,Well,Row,Grid} from 'react-bootstrap';
export default class TvShows extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movie: [],
        }
    }
    componentDidMount() {
        let requestUrl = " https://api.themoviedb.org/3/tv/popular?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
        axios.get(requestUrl).then(response => {
            this.setState({
                movie: response.data.results
            });
        })
    }
    render() {
        let baseImgURL = "https://image.tmdb.org/t/p/w500";
        let movieList = this.state.movie.map(movie => {
            // console.log("mapped movie" + movie)
            let imgurl = baseImgURL + movie.poster_path;
            // console.log("imgurl" + imgurl)
            return (   
                <div id="tvshow">

                <div className="well"> 
      

                        <img src={imgurl} alt="" width="270px" height="400px" />
                        <p>{movie.id}</p>
                        <p>{movie.original_name}</p>
                        

                    </div>
                </div>
            );
        });
        return (
<div className="tvshows">
<div>
                    {movieList}
            </div>
            </div>
        );
    }
}
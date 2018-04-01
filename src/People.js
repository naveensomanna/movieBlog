import React from 'react';
import axios from 'axios';
import { Row, Col, Grid } from 'react-bootstrap';
let datas = [];
export default class Latest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
        }
    }
    componentDidMount() {
        let requestUrl = "https://api.themoviedb.org/3/person/popular?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
        axios.get(requestUrl).then(response => {
            this.setState({
                movie: response.data.results
            })
            console.log("got the results1");

        });
        // console.log("url in latest" + this.state.movie);
        
    }
    render(){
        let baseImgURL = "https://image.tmdb.org/t/p/w500";
let movi=[];
movi=this.state.movie;
         var moviess=movi.map(movie =>{
            let imgurl = baseImgURL + movie.profile_path;
            return( 
           
            
                    <div className="results_people">
                    <div className="people_img">
            <img src={imgurl} width="235px" height="235px"/>
            </div>
            <div className="people_content">
<p className="people_name">{movie.name}</p>
<p className="sub"></p>
            </div>
            </div>
        
        )
        })
        return(
<div className="person_wrap">
            <div className="media_people">
            
                <h2>Popular People</h2>
                <div className="item_card">
        {moviess}
</div>
</div>
</div>    
    );
    }
}
import React from 'react';
import axios from 'axios';

export default class Drama extends React.Component{

    constructor(props){
        super(props);
        this.state={
            movie:[],
        }
    }
    /*componentWillMount(){
        let requestUrl =" https://api.themoviedb.org/3/tv/popular?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
axios.get(requestUrl).then(response =>{
    this.setState({
        movie:response.data.results
    });
})
    }
    render(){
           let baseImgURL = "https://image.tmdb.org/t/p/w500";
            let movieList = this.state.movie.map(movie => {
                console.log("mapped movie" + movie)
                let imgurl = baseImgURL + movie.poster_path;
                console.log("imgurl" + imgurl)
                return (<img className="img1carousel" src={imgurl} width="370px" height="300px" />);
    });
    return(
        <div>
{movieList}
</div>
    );
}*/
}
import React from 'react'
import axios from 'axios';
import {Row,Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
export default class NowPlaying extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: []
        }
    }
    componentWillMount() {
        let requestUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({movie: response.data.results})
            });
        console.log("url" + this.state.movie);
    }
    render()
    {
        let baseImgURL = "https://image.tmdb.org/t/p/w500";
        let movies = [];
        movies = this
            .state
            .movie
            .slice(3, 7);
            let mainid_image2;
        let movieList = movies.map(movie => {
            console.log("mapped movie" + movie)
            let imgurl = baseImgURL + movie.poster_path;
             mainid_image2=movie.id;
            console.log("imgurl" + imgurl)
            return (
                <div className="block_item2"> 
                <div className="boxshadow_img">
                 <img className="img2SecondBlog" src={imgurl} width="329px" height="250px"/>           

           </div>
          <div className="movie_title">
        <NavLink to={`/Movies/${mainid_image2}`}> <p> {movie.title}</p></NavLink>
          <p>{movie.release_date}</p>
              </div>
            </div>

            );
        });
        let movies1 = [];
        movies1 = this.state .movie
            .slice(1, 2);
        console.log("movies1" + movies1);
        let movieList1 = movies1.map(movie => {
            let imgurl = baseImgURL + movie.poster_path;
            return (
                <div className="block_item1">
            <div style={{overflow:"hidden"}} className="boxshadow_img" >
            <img id="img1FirstBlog" src={imgurl} width="495px" height="500px"/>
            </div>
            <div className="movie_title">
           <p> {movie.title}</p>
           <p > {movie.release_date}</p>
            </div>
            </div>
        
            );
        });
        
      let  mainid_image1= movies1.map(movie =>{
return movie.id;
       });
      
        var Style={
            marginLeft:"190px"
        }
        return (
            <div className="np_block_wrapper">
                <h4>In Theatre</h4>

                            <div className="theater_blog">

                <div >

               <NavLink to={`/Movies/${mainid_image1[0]}`}  > {movieList1}</NavLink>
                </div>
                    <div className="wrap_img" >
                     {movieList}
                </div>
</div>
</div>

               );
    }
}

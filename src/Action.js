import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import {Pager,Item} from 'react-bootstrap';
import './App.css';

export default class Action extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            count:1,
            pagecount:1
        }
        this.handleClick=this.handleClick.bind(this);
        this.handlePrevious=this.handlePrevious.bind(this);
    }
    componentWillMount() {
        
        console.log("url" + this.state.movie);
    }
    handleClick(e){
        e.preventDefault();
        let co=++this.state.pagecount;
        if(true){
        this.setState({
            count:co
        
            });
        }
            }
        handlePrevious(e){
            e.preventDefault();
        let co=--this.state.pagecount;
            this.setState({
                count:co
            })
        }
    render()
    {
        let requestUrl = "https://api.themoviedb.org/3/genre/28/movies?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page="+this.state.count;
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({movie: response.data.results})
            });

        let baseImgURL = "https://image.tmdb.org/t/p/w500";
        let movies = [];
        movies = this.state.movie;
        let movieList = movies.map(movie => {
            console.log("mapped movie" + movie)
            let imgurl = baseImgURL + movie.poster_path;
            let mainid_image2= movie.id;
            console.log("imgurl" + imgurl)
            return (
                <div className="well">
            <NavLink to={`/Movies/${mainid_image2}`}><img className="img2SecondBlog" src={imgurl} width="270px" height="400px"/></NavLink>
            <div className="details_movie">
                <p>{movie.title}</p>
                <p>{movie.overview}</p>
                
                </div>
                <div className="more_card">
                <NavLink to={`/Movies/${mainid_image2}`}><p>More</p></NavLink>
                </div>
            </div>
            );
        });
    
        return(
            <div>
            <h2 style={{fontSize:"2.1em",color:"black",margin:"0 0 8px 180px",fontWeight:"600"}}>Action Movies</h2>
            <div className="main_wrapper">
                
                {movieList}
                </div>
                <Pager>
  <Pager.Item href="#" onClick={this.handlePrevious}>Previous</Pager.Item>{' '}
  <Pager.Item href="" onClick={this.handleClick}>Next</Pager.Item>
</Pager>
                </div>
        );
    }
}

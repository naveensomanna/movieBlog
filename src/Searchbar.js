import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

export default class SearchBar extends React.Component{

    constructor(Props) {
        super(Props)
        this.state = {
          val: ' ',
          movie: [],
          query:"",
          data:[],
            pageCount: 10,
            currentPage:1
        }
        this.handlePageClick = this.handlePageClick.bind(this);

      }
      
        componentDidMount(){
          let requestUrl = "https://api.themoviedb.org/3/search/movie?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1&query="+this.props.match.params.id;
          axios
            .get(requestUrl)
            .then(response => {
              this.setState({ movie: response.data.results })
            });
      }
      handlePageClick(data) {
        console.log("selected");
let pagevalue=data.selected+1;
let requestUrl = "https://api.themoviedb.org/3/search/movie?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page="+pagevalue+"&query="+this.props.match.params.id;
axios
  .get(requestUrl)
  .then(response => {
    this.setState({ movie: response.data.results })
  });


    }
    render(){
        
        console.log("render");
    let baseImgURL = "https://image.tmdb.org/t/p/w500";
    let movies = [];
    movies = this.state.movie;
    let search_result = movies.map(movie => {
      let imgurl = baseImgURL + movie.poster_path;
      console.log(imgurl);
      return (
        <div  id="well_searchbox">
          <img src={imgurl} width="186px" height="270px" />
          <div className="movie_details">
          <p>{movie.title}</p>
          <p>{movie.overview}</p>
        </div>
        </div>
      );
    })
        return(
          <div id="search_wrapper_main">

           
            <h2>Search Movie Results</h2>
   <div className=" search_details" >
   <div className="search_wrapper">
      {search_result}
      </div>
      </div>
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
                
                />            
      </div>
      

       


    
          );
      }
}
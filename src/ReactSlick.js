import React from "react";
import Slider from "react-slick";
import axios from 'axios';
var movie__fadeblog=[];
var nearr=[];
var num='';
export default  class ReactSlickDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie1:[],
            movie2:[],
            movie3:[],
            movie4:[]
        
    
        }
    }
    componentWillMount(){
        console.log("child will");
        
        }
   
            componentWillReceiveProps(nextProps){
                console.log("child did");
            
                let requestUrl1 = "https://api.themoviedb.org/3/movie/"+ nextProps.data[0]+ "/videos?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1";
                axios.get(requestUrl1).then(response => {
                    this.setState({
                        movie1: response.data.results
                    }
                    );
                }) ;  
                let requestUrl2 = "https://api.themoviedb.org/3/movie/" +nextProps.data[1]+ "/videos?api_key=0060474990618f8eace5a7835a1fead6&language=en-US";
axios.get(requestUrl2).then(response => {
this.setState({
    movie2: response.data.results
}
);
});       


let requestUrl3 = "https://api.themoviedb.org/3/movie/" +nextProps.data[2]+ "/videos?api_key=0060474990618f8eace5a7835a1fead6&language=en-US";
axios.get(requestUrl3).then(response => {
this.setState({
    movie3: response.data.results
}
);
});   
let requestUrl4 = "https://api.themoviedb.org/3/movie/" +nextProps.data[3]+ "/videos?api_key=0060474990618f8eace5a7835a1fead6&language=en-US";
axios.get(requestUrl4).then(response => {
this.setState({
    movie4: response.data.results
}
);
});        
            }
    
            
    render(){  
       
    
        

 
            let URL_YOUTUBE = 'https://www.youtube.com/embed/';
            let link=[];
            let videos=[];
            videos=this.state.movie1.slice(0,5);
       link = videos.map(trailer => {
                return trailer.key;
            });
            console.log("link");
            console.log(link);

            let links='https://www.youtube.com/embed/'+link[0];
            let videos1 = [];
            videos1=  this.state.movie2.slice(0,5);
                  let link1=[];
                   link1 = videos1.map(trailer => {
                      return trailer.key;
                  });
                  let linkss='https://www.youtube.com/embed/'+link1[0];


                  let videos2 = [];
            videos2=  this.state.movie3.slice(0,5);
                  let link2=[];
                   link2 = videos2.map(trailer => {
                      return trailer.key;
                  });
                  let linksss='https://www.youtube.com/embed/'+link2[0];

                  let videos3 = [];
                  videos3=  this.state.movie4.slice(0,5);
                        let link3=[];
                         link3 = videos3.map(trailer => {
                            return trailer.key;
                        });
                        let linkssss='https://www.youtube.com/embed/'+link3[0];
      

      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
    
    
      };
      return (
          <div id="video_slick" >
        <div  style={{backgroundColor:'lightblue'}}>
          <Slider {...settings} >
            <div>
            <iframe src={links} allowFullScreen width="330px" height="200px"/>
            </div>
            <div>
            <iframe src={linkss} allowFullScreen width="330px" height="200px"/>
            </div>
            <div>
            <iframe src={linksss} allowFullScreen width="330px" height="200px"/>
            </div>
            <div>
            <iframe src={linkssss} allowFullScreen width="330px" height="200px"/>
            </div>
          </Slider>
        </div>
        </div>
      );
    }
  }
  
import React from 'react'
import axios from 'axios';

export default class Cast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            movie1:[]
    
        }
    }
    componentDidMount() {
        let requestUrl = `https://api.themoviedb.org/3/movie/${this.props.id[0]}/casts?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1`;
        axios
            .get(requestUrl)
            .then(response => {
                this.setState({ movie: response.data.cast })
            });
           
                let requestUrl1 = `https://api.themoviedb.org/3/movie/${this.props.id[1]}/casts?api_key=0060474990618f8eace5a7835a1fead6&language=en-US&page=1`;
                axios
                    .get(requestUrl1)
                    .then(response => {
                        this.setState({ movie1: response.data.cast })
                    });
               
    }
    
    render() {
        let name=this.state.movie.map(n=>{
            return n.name;
        })
        let name1=this.state.movie1.map(n=>{
            return n.name;
        })
return(
<div>
{name1}
</div>
);
    }
}





    
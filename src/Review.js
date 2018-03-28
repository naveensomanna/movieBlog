import React from 'react';
import axios from 'axios';
export default class Review extends React.Component{

    constructor(props){
        super(props);
        this.state={
review:[]
        }
    }
componentDidMount(){
    let requestUrl = "https://api.themoviedb.org/3/review/" + this.props.match.params.id + "?api_key=0060474990618f8eace5a7835a1fead6&language=en-US";
    axios.get(requestUrl).then(response => {
        this.setState({
            review: response.data
        }
        )
    }
    );
}
render(){
    return(

<div>

</div>
    );
}


}
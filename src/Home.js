import React from 'react';
import axios from 'axios';
import NowPlaying from './NowPlaying.js';
import UpcomingMovies from './Upcoming.jsx';
import Latest from './latest.js';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: []
        }
    }

    
    render() {


       

        return (
            <React.Fragment>
                <UpcomingMovies/>
                <div className="bdy_bckColor">
                <NowPlaying/>
                <Latest/>
</div>
            </React.Fragment>

        );

    }
}
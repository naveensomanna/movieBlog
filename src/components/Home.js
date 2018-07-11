import React from 'react';
import NowPlaying from './NowPlaying.js';
import UpcomingMovies from './Upcoming.jsx';
import Latest from './latest.js';

export default class Home extends React.Component {


    render() {
        return (
            <div>
                <UpcomingMovies/>
                <div className="bdy_bckColor" >
                    <NowPlaying/>
                    <Latest/>
                </div>
            </div>

        );

    }
}
import React, { Component } from "react";
import ReactPlayer from 'react-player';

class Home extends Component {
    render() {
        return (
            <div className="container wrapper">
                <h1>Song of the day</h1>
                <ReactPlayer width="1140px" height="720px" url="https://www.youtube.com/watch?v=oIMJr-xXzmA" controls></ReactPlayer>
            </div>
        )
    }
}

export default Home;
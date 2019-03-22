import React, { Component } from "react";
import ReactPlayer from 'react-player';

class Home extends Component {
    render() {
        return (
            <div className="container wrapper">
                <h1 className='display-1 mb-5'>Song of the day</h1>
                <ReactPlayer
                    className="center"
                    width="720px"
                    height="480px"
                    url="https://www.youtube.com/watch?v=oIMJr-xXzmA"
                    controls>
                </ReactPlayer>
            </div>
        )
    }
}

export default Home;
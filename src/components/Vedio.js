import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import {Jumbotron} from 'react-bootstrap'
 
export default class Vedio extends Component {
  render () {
    return (
        <div>
          <Jumbotron>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
            <Link to ="/" className="item">Back to home</Link>
            </Jumbotron>
          <Footer/>
        </div>
    );
    
  }
}


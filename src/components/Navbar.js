import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header2 from './Header2'
import Header3 from './Header3'

class Navbar extends Component {
    renderHeader(){
        return (
                <div className='ui secondary pointing menu'>
                    <Link to='/' className='item'>Home</Link>
                    <Link to='/about'  className='item'>About Us</Link>
                    <Link to='/contact' className='item'>Contact Us</Link>
                    <Link className='item' to={`/gallery`}>Gallary</Link>
                    <Link className='item' to={`/vedio`}>Video</Link>
                </div>    
            )   
        }
   
    render () {
    return (
        <div>
            {this.renderHeader()} 
            <Header2/>
            <Header3/>
        </div>
    )
  }
}

export default Navbar

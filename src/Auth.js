import React from 'react'
import { Link } from 'react-router-dom'
import './components/css/dropdown.css'


class Auth extends React.Component {
  
  onSubmit(){
    
    localStorage.removeItem("UserId")
    localStorage.removeItem("validToken");
  }
  
  renderAuthButton () {
    
    if(!localStorage.getItem("validToken")){
      return (
        <div>
          <div class="dropdown">
            <button className ="ui button red">Login</button>
            <div class="dropdown-content">
            <Link  to={`/admin/login`}> Admin Login</Link>
            <Link  to={`/doctor/login`}> Doctor Login</Link>
            <Link  to={`/patient/login`}> Patient Login</Link>
            </div>
          </div>
          <Link className='ui button primary' to={`/patient/register`}> Register</Link>
          <div className ="ui secondary button">
            <a  href = "https://webrtc-video-room.herokuapp.com/">Start vedio chat</a>
          </div>
        </div>
      );
    }else {
      return(
        <div className='ui list'>
          <div><button className ='ui button cyan'><Link to ='/' onClick = {this.onSubmit}>logout</Link></button></div>
        </div>
      );
    }
      
  }
  
  render () {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default Auth

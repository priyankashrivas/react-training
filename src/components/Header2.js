import React from 'react'
import { Link } from 'react-router-dom'
//import history from '../history'

class Header2 extends React.Component {
  
  onSubmit(){
    
    localStorage.removeItem("UserId")
    localStorage.removeItem("validToken");
  }
  
    renderAuthButton () {
        
        if(!localStorage.getItem("validToken")){
            return (
                <div>
                    <div className='ui secondary pointing menu'>
                        <div className='right menu'><button className ='ui button cyan'><Link to ='/' onClick = {this.onSubmit}>logout</Link></button></div>
                    </div>
                    <div className='ui secondary pointing menu'>
                        <Link to='/admin/register' className='item'>Add Doctor</Link>
                        <Link to='/admin/showdoctor'  className='item'> Show Doctor</Link>
                        <Link to='/admin/showuser' className='item'> Show User</Link>
                        <Link to='/admin/showfeedback' className='item'> Show Feedback</Link>       
                    </div>    
                </div>
            );
        }else {
            return(
                <div>
                    
                </div>
            );
        }
    }
  
    render () {
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default Header2

import React from 'react'
import { postCreate } from '../../actions'
import { connect } from 'react-redux'
import PostForm from './PostForm'
//import history from '../../history'

class PostCreate extends React.Component {

    onSubmit = formValues =>{
        this.props.postCreate(formValues);
    };

    render() {
        if(localStorage.getItem("validToken")) {
            return (
                <div>
                <center> <h2>Create post</h2></center>
                <PostForm onSubmit ={this.onSubmit}/>
                </div>
            );
        } else {
            return( 
                <div>
                <center><h1>Feedback</h1></center>
                    <PostForm />
                </div>
            );
           
        } 
     }  
}

export default connect(null,{postCreate})(PostCreate);

import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions';

class GoogleAuth extends React.Component {


    //component render after this library load
    componentDidMount() {
        // wiring up google api library
        window.gapi.load('client:auth2', () => {
            window.gapi.client
            .init({
                clientId: '742881308741-q9ui0eu5ju2ca9f2nreigv22mvdb8qmn.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {
                //we get current authentication status
                this.auth = window.gapi.auth2.getAuthInstance();

                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
     //action creator call
    onAuthChange = isSignedIn => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
       
    };
    
    //on demand sign in or sign out
    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    //displaying sign in or sign out buttons
    renderAuthButton() {

        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick ={this.onSignOutClick} className = 'ui red google button'>
                    <i className ="google icon" />
                    Sign out
                </button>
            );
        } else {
            return (
                <button onClick ={this.onSignInClick} className ="ui red google button">
                    <i className =' google icon'/>
                    Sign In with google
                </button>
            );
        }


    }
    render() {

        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {isSignedIn : state.auth.isSignedIn };


};

//connecting with action creator
export default connect(mapStateToProps ,{signIn ,signOut})(GoogleAuth);
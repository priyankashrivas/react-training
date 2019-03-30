import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import Header from './Header'
import history from '../history'


//navbar imported

import HomePage from './HomePage'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Gallery from './Gallery'
import Vedio from './Vedio'

//admin login signup component imported

import AdminSignIn from './admin/SignIn'

//patient login signup component imported

import SignIn from './patient/SignIn'
import SignUp from './patient/SignUp'

//patient header authentication

import ChatApp from './patient/ChatApp'
import UserFeedback from './patient/UserFeedback'

//admin header authentication

import AddDoctor from './admin/AddDoctor'
import ShowDoctor from './admin/ShowDoctor'
import ShowUser from './admin/ShowUser'
import ShowFeedback from './admin/ShowFeedback'

//doctor login signup component imported

import LogIn from './doctor/SignIn'

import PostCreate from './userpost/PostCreate';
import PostDelete from './userpost/PostDelete';
import PostEdit from './userpost/PostEdit';
import PostList from './userpost/PostList';
import PostView from './userpost/PostView';

class App extends React.Component {
  router () {
    return (
      <div className='ui container'>
        <Router history={history}>
          <div>
            <Header/>
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/about' exact component={AboutUs} />
              <Route path='/contact' exact component={ContactUs} />
              <Route path='/gallery' exact component={Gallery} />
              <Route path='/vedio' exact component={Vedio} />
              
              <Route path='/admin/login' exact component={AdminSignIn} />
              <Route path='/admin/register' exact component={AddDoctor} />
              <Route path='/admin/showdoctor' exact component={ShowDoctor} />
              <Route path='/admin/showuser' exact component={ShowUser} />
              <Route path='/admin/showfeedback' exact component={ShowFeedback} />

              
              <Route path='/patient/login' exact component={SignIn} />
              <Route path='/patient/register' exact component={SignUp} />

              <Route path='/patient/requestchat' exact component={ChatApp} />
              <Route path='/patient/feedback' exact component={UserFeedback} />

              <Route path='/doctor/login' exact component={LogIn} />
              
              <Route path='/post/create' exact component={PostCreate} />
              <Route path='/post/delete/:id' exact component={PostDelete} />
              <Route path='/post/edit/:id' exact component={PostEdit} />
              <Route path='/post/list' exact component={PostList} />
              <Route path='/post/view/:id' exact component={PostView} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }

  render () {
    return( 
      <div>
        {this.router()}
      </div>
    );
  }
}

export default App

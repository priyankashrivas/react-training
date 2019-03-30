import React, { Component } from 'react';
import {BrowserRouter ,Switch ,Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import DashBoard from './components/dashboard/DashBoard'
import ProjectDetail from './components/project/ProjectDetail'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/project/CreateProject'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
           <Navbar/> 
           <Switch>
              <Route exact path ='/' component ={DashBoard}/>
              <Route path ='/project/:id' component ={ProjectDetail}/>
              <Route path ='/signin' component ={SignIn}/>
              <Route path ='/signup' component ={SignUp}/>
              <Route path ='/create' component ={CreateProject}/>
           </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;

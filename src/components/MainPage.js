import React from 'react'
import Header from './Header'
import {Jumbotron ,Image} from 'react-bootstrap'

class MainPage  extends React.Component {
   
    render(){
        return(
            <div>
                <div>
                <Jumbotron>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMLPqO1p-La60AuNHd9aWtfIU0EzudXM7wwTr9mlO3MhbuikaW"/>  
                </Jumbotron>
                </div>
            {/* <button onClick ={<div><Header/></div>} className ='ui button primary'>UserLogin</button> */}
            <Header/>
            </div>

        );
    }
}
export default MainPage;
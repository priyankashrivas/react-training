import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'

class AboutUs extends React.Component {
    render(){
        return(
            <div>
                <center><h1>About Us</h1></center><br/>

                <p>The E consultation system is an end user support and online consultation
                     project. Here we propose a system that connects patients to available 
                     doctors for online consultation and also allows doctors to email 
                     subscriptions in printable format. Our proposed system aims to 
                     build an environment where various patients needing doctor help at 
                     their home can consult doctors, send their images(for skin diseases/beauty related issues),
                      chat with doctors, tell then their issues and discuss remedies. 
                      It also consists of a doctors login panel where doctor may login to the system 
                      and then see patient requests for consultations. The system then schedules 
                      those requests and serves them to doctor one after another. 
                      This allows doctors to chat with patients and discuss their problems. 
                      At the end of consultation the doctor may send them an online subscription 
                      in a printable word format so that they may directly print it and get medicines 
                      based on that prescription. The system will prove helpful to urgent cases that 
                      do not reach hospital, for emergency cases that do not have doctors in area, 
                      during late night emergencies and also for preliminary examination of patients.
                    <br/>
                    <br/>
                    <b>Advantages</b>
                    <ul>
                        <li>User can search for doctor’s help at any point of time.</li>
                        <li>User can talk about their illness and get the required medicine’s prescription.</li>
                        <li>Doctors can handle emergency situation by providing primary help, till the patient can be taken to the hospital.</li>
                    </ul>
                    <br/>
                    <b>Disadvantages</b>
                    <br/>
                    <ul>
                        <li>One or the other doctor has to be online to help the patient.</li>
                     </ul>
                
                </p>
                <Link to ="/" className="item">Back to home</Link>
                <div>
                <a href ="https://youtu.be/FqNTnBy_YgM">See project purpose here</a>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default AboutUs;
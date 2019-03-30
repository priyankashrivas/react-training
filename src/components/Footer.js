import React from 'react'
import StickyFooter from 'react-sticky-footer'
import {Jumbotron } from 'react-bootstrap'

class Footer extends React.Component {
    render(){
        return(
            <div>
                <Jumbotron>
                    <StickyFooter
                        bottomThreshold={2}
                        normalStyles={{
                        backgroundColor: "black",
                        padding: "2rem"
                        }}
                        stickyStyles={{
                        backgroundColor: "rgba(255,255,255,.8)",
                        padding: "2rem"
                        }}
                    >
                    <h4>Priyanka shriwas</h4>
                    Master of Computer Application, IPS Academy ,Indore, MadhyaPradesh, India
                    <h5>Corresponding Author:</h5>
                    Priyanka Shriwas
                        Master of Computer Apllication
                        IPS Academy ,Indore ,Madhyapradesh, India
                        <br/>Tel : 73140-14859
                        <br/>Mob no : 9516575429
                        <br/>Email Id : priyanka.shriwas@systematixindia.com 
                        <br/>Copyright: © 2019 priyankashriwas.
                        <br/>
                            <br/>This is an open-access article distributed under the terms of the Creative Commons Attribution License,
                            which permits unrestricted use, distribution, and reproduction in any medium,
                            provided the original author and source are credited.    
                    </StickyFooter>                    
                </Jumbotron>
            </div>
        );
    }
}
export default Footer;
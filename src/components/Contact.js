import React, { Component } from 'react';

export default class Contact extends Component {
    render(){
        return (
            <div>
                 <div className="ui horizontal segments" 
                    style={{background: 'rgb(200, 220, 212)'}}>
                    <div className="ui segment" style={{ width: '60%' }}>
                        <h1>Contact Us</h1>
                    </div>
                    <div className="ui center aligned segment"
                        style={{ width: '40%' }}>
                        <h3>Headquarters</h3>
                        <p style={{textAlign: 'left', paddingLeft: '40%'}}>
                            112 Kick Rd <br/>
                            San Jose, CA 
                            88888 <br/>
                            Tel: +1(408) 112 2234 <br/>
                            Fax: +1(408) 112 2235
                        </p>
                    </div>
                 </div>
            </div>
        );
    }
}
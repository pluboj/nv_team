import React, { Component } from 'react';

export default class Contact extends Component {

    state = {
        fields: {
            name: '',
            email: '',
        },
        people: [],
        debug: false,
    }

    onFormSubmit = evt => {
        const people = [ ...this.state.people, this.state.fields ];
        this.setState({ 
            people, 
            fields: {
                name: '',
                email: '',
                subject: '',
                message: '',
            }, 
            debug: true 
        });
        evt.preventDefault();
    }

    onInputChange = evt => {
        const fields = Object.assign({}, this.state.fields);
        fields[evt.target.name] = evt.target.value;
        this.setState({ fields });
    }

    render(){
        return (
            <div>
                 <div className="ui horizontal segments" 
                    style={{background: 'rgb(200, 220, 212)'}}>
                    <div className="ui segment" style={{ width: '60%' }}>
                        <h1>Contact Us</h1>
                        <form className="ui form" onSubmit={this.onFormSubmit}>
                            <Field 
                                type="text" 
                                placeholder="Name"
                                name="name"
                                isRequired={true}
                                value={this.state.fields.name}
                                onChange={this.onInputChange}
                            />
                            
                            <Field 
                                type="text" 
                                placeholder="Email"
                                name="email"
                                isRequired={true}
                                value={this.state.fields.email}
                                onChange={this.onInputChange}
                            />

                            <Field 
                                type="text" 
                                placeholder="Subject"
                                name="subject"
                                isRequired={true}
                                value={this.state.fields.subject}
                                onChange={this.onInputChange}
                            />

                            <div class="field required">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    value={this.state.fields.message}
                                    onChange={this.onInputChange}
                                ></textarea>
                            </div>

                            <br/>

                            <button 
                                className="ui button" 
                                type="submit"
                                style={{background: "rgb(39, 115, 86)", color: "rgb(200, 220, 212)"}}
                            >Submit</button>
                        </form>

                        <br/>
                        <div>
                            {
                                this.state.debug 
                                ?
                                this.state.people.map(({name, email, subject, message}, i) => (
                                    <pre key={i}>
                                        &#123;
                                        name: {name}, 
                                        email: {email},
                                        subject: {subject},
                                        message: {
                                            message.length > 10 
                                            ? 
                                            message.substring(0,10) + '...'
                                            : message}
                                        &#125;
                                    </pre>
                                ))
                                :
                                ''
                            }   
                        </div>
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

class Field extends Component {
    render() {
        const {
            type,
            placeholder,
            name,
            value,
            onChange,
            isRequired,
        } = this.props;

        let className = 'field';
        if ( isRequired ) {
            className += ' required';
        }

        return(
            <div className={className}>
                <label>{placeholder}</label>
                <input 
                    type={type} 
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </div>
        );
    }
}
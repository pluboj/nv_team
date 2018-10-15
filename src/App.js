import React, { Component } from 'react';
import './App.css';
import MainMenu from './components/Menu';
import Home from './components/Home';
import Players from './components/Players';
import { Statistics } from './components/Statistics';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Sticky } from 'semantic-ui-react';

class App extends Component {
  state = {
    activeItem: 'HOME',
  }
  handleItemClick = name => this.setState({
    activeItem: name
  })  
  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { activeItem, contextRef } = this.state;
    return (
      <Router>
        <div className="app-box">
          <div className="ui centered grid menu-grid">
            <div className="sixteen wide mobile twelve wide tablet ten wide computer column">
              <MainMenu
                activeItem={activeItem}
                handleItemClick={this.handleItemClick}>
              </MainMenu>
            </div> 
          </div> {/* ui centered grid menu-grid */}

          <div className="ui internally celled grid" ref={this.handleContextRef}>
            <div className="row">
              <div className="three wide column">
              <Sticky context={contextRef}>
                <div 
                  className="ui wide skyscraper test ad"
                  style={{width: '100%', background: 'rgb(39, 115, 86)'}}
                  data-text=""
                ><img className="ui image" src="images/side-logo.png" alt="North Valley"/></div>
              </Sticky>
              </div>
              <div className="ten wide column main-grid">
                <Route exact path="/" component={Home} />
                <Route path="/stats/" component={Statistics} />
                <Route path="/team" component={Players} />
                <Footer
                  activeItem={activeItem}
                  handleItemClick={this.handleItemClick}>
                </Footer>
              </div>
              <div className="three wide column">
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

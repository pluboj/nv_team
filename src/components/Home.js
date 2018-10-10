import React, { Component } from 'react';
import { Segment, Item } from 'semantic-ui-react';
import ListStandings from '../data/standing_list';
import scheduleList from '../data/schedule_list';
import { sortBy, slice } from 'lodash';
import { Link } from "react-router-dom";
import './Home.css';

export default class Home extends Component {
    render() {
        return(
            <div className="home-main">
                <Segment className="main-image-segment">
                    <img className="ui image" src="images/the-ball-stadion.jpeg" alt="the-ball-stadion"/>
                </Segment>
                <div className="ui horizontal segments" style={{background: 'rgb(200, 220, 212)'}}>
                    <div className="ui segment" style={{ width: '60%' }}>
                        <MatchesList></MatchesList>
                    </div>
                    <div className="ui center aligned segment" 
                        style={{ width: '40%' }}>
                        <Standings></Standings>
                    </div>
                </div>
            </div>
        );
    }
}

class Standings extends Component {
    state = {
        standingsList: [],
    }
    componentDidMount() {
        this.setState({ standingsList: ListStandings });
    }
    render() {
        const standings = sortBy(this.state.standingsList, (team) => team.getPoints() ).reverse();
        return(
            <div>
                <table className="ui fixed table table-standings" 
                    style={{background: 'rgb(200, 220, 212)'}}>
                    <tbody>
                        {standings.map(function(item, index){
                            return (
                                <tr key={item.getId()} className={item.getId() === 1 ? 'home-team' : ''}>
                                    <td>{index + 1}.</td>
                                    <td style={{ width: '65%' }}>{item.getName()}</td>
                                    <td>{item.getGames()}</td>
                                    <td><strong>{item.getPoints()}</strong></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="ui large label" 
                    style={{background: 'rgb(39, 115, 86)', 
                    color: 'rgb(200, 220, 212)',
                    float: 'left'}}>
                    <Item
                        as={Link}
                        to="/stats" 
                    >Show details</Item>
                </div> 
            </div>
        );
    }
}

class MatchesList extends Component {
    state = {
        schedList: [],
        isMore: true,
    };
    componentDidMount() {
        this.setState({ 
            schedList: scheduleList, 
            sizeOfList: 3
        });
    }
    addMoreMatches = () => {
        const newSizeOfList = this.state.sizeOfList + 3;
        let loadMore = true;
        if ( newSizeOfList >= this.state.schedList.length ) {
            loadMore = false;
        }
        this.setState({ 
            sizeOfList: newSizeOfList,
            isMore: loadMore,
        });
    }
    render () {
        const listOfMatches = slice(this.state.schedList, 0, this.state.sizeOfList);
        
        return (
            <div className="ui segment" style={{background: '#E0F8F1'}}>
                <h2>Schedule</h2>
                {listOfMatches.map(item => (
                    <Match 
                        key={'match-'+item.id}
                        date={item.date}
                        time={item.time}
                        type={item.type}
                        imgUrl={item.imgUrl}
                        team={item.team}
                    />
                ))}
                {this.state.isMore ? (
                    <button 
                        className="ui button"
                        onClick={this.addMoreMatches}
                    >
                        More
                    </button>
                ) : ''}
                
            </div>
        );
    }
}

class Match extends Component {
    render() {
        const { 
            date,
            time,
            type,
            imgUrl,
            team 
        } = this.props;
        return(
            <div className="ui fluid raised green card">
                <div className="content">
                    <div className="header">
                        {date} <span style={{float: 'right'}}>{time}</span>
                    </div>
                    <div className="meta">
                        {type}
                    </div>
                    <p>
                        <a className="ui tiny image">
                            <img src={imgUrl} alt="team"/>
                        </a>   
                        <span style={{paddingLeft: '25%'}}>{team}</span>
                    </p>
                </div>
            </div>
        );
    }
}
    
import React, { Component } from 'react';
import ListStandings from '../data/standing_list';
import { Table, Popup, Item } from 'semantic-ui-react';
import { sortBy, shuffle } from 'lodash';
import { Route, Link } from "react-router-dom";
import fallScoresList from '../data/fall18_list';

export class Statistics extends Component {
    render() {
        return (
            <div>
                <div className="ui horizontal segments" style={{background: 'rgb(200, 220, 212)'}}>
                    <div className="ui segment" style={{ width: '60%' }}>
                        <Route exact path="/stats" component={TableStatistics} />
                        <Route exact path="/stats/fall18" component={ScoresFall18} /> 
                        <Route exact path="/stats/spring18" component={ScoresSpring18} />                       
                    </div>
                    <div className="ui center aligned segment" 
                        style={{ width: '40%' }}>
                        <h2>Scores</h2>
                        <Item
                            as={Link}
                            to="/stats" 
                        >STANDINGS 2018/2019</Item>
                        <br/><br/>
                        <Item
                            as={Link}
                            to="/stats/fall18" 
                        >FALL 2018</Item>
                        <br/>
                        <Item
                            as={Link}
                            to="/stats/spring18" 
                        >SPRING 2018</Item>
                    </div>
                </div>
            </div>
        );
    }
}

class TableStatistics extends Component {
    state = {
        statsList: [],
    }

    componentDidMount() {
        this.setState({ statsList: ListStandings });
    }
    render() {
        const standings = sortBy(this.state.statsList, (team) => team.getPoints() ).reverse();
        return (
            <div>
                <h1>STANDINGS 2018/2019</h1>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Popup trigger={<Table.HeaderCell>P</Table.HeaderCell>} content='Position' />
                            <Table.HeaderCell>TEAM</Table.HeaderCell>
                            <Popup trigger={<Table.HeaderCell>GP</Table.HeaderCell>} content='Games Played' />
                            <Popup trigger={<Table.HeaderCell>W</Table.HeaderCell>} content='Wins' />
                            <Popup trigger={<Table.HeaderCell>T</Table.HeaderCell>} content='Ties' />
                            <Popup trigger={<Table.HeaderCell>L</Table.HeaderCell>} content='Losses' />
                            <Popup trigger={<Table.HeaderCell>PT</Table.HeaderCell>} content='Points' />
                            <Popup trigger={<Table.HeaderCell>S</Table.HeaderCell>} content='Score' />
                            <Popup trigger={<Table.HeaderCell>GD</Table.HeaderCell>} content='Goal Difference' />
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {standings.map((item,index) => 
                            <Table.Row key={'row-'+ item.getId()}>
                                <Table.Cell>{index + 1}.</Table.Cell>
                                <Table.Cell>{item.getName()}</Table.Cell>
                                <Table.Cell>{item.getGames()}</Table.Cell>
                                <Table.Cell>{item.getWin()}</Table.Cell>
                                <Table.Cell>{item.getTie()}</Table.Cell>
                                <Table.Cell>{item.getLost()}</Table.Cell>
                                <Table.Cell>{item.getPoints()}</Table.Cell>
                                <Table.Cell>{item.getScoreGive()}:{item.getScoreGet()}</Table.Cell>
                                <Table.Cell>{item.getGoalDiff()}</Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
                <br/>
                <hr/>
                <h2>Legend</h2>
                <p>P - Position</p>
                <p>GP - Games Played</p>
                <p>W - Wins (worth 3 points)</p>
                <p>T - Ties (worth 1 point)</p>
                <p>L - Losses (worth 0 points)</p>
                <p>PT - Points</p>
                <p>S - Score (Goals For : Goals Against)</p>
                <p>GD - Goals Differential</p>
            </div>
        );
    }
}

export class ScoresFall18 extends Component {
    render() {
        const sortedList = shuffle(fallScoresList);
        return(
            <div>
                <h1>FALL 2018</h1>
                <Table>
                    <Table.Body style={{fontSize: '1.2em'}}>
                        {sortedList.map((item) => (
                            <Table.Row key={'row-'+item.id}>
                                {item.home === 'NV SJ Sharks' 
                                    ?
                                    <Table.Cell style={{width: '10%'}}>
                                        <img className="ui mini circular image" src="/images/HM.png" alt="T1"/>   
                                    </Table.Cell>
                                    :
                                    <Table.Cell style={{width: '10%'}}>
                                        <img className="ui mini circular image" src={item.logoUrl} alt="T2"/>
                                    </Table.Cell>
                                }
                                {item.home === 'NV SJ Sharks' 
                                    ?
                                    <Table.Cell style={{width: '10%'}}>
                                        <img className="ui mini circular image" src={item.logoUrl} alt="T2"/>
                                    </Table.Cell>
                                    :
                                    <Table.Cell style={{width: '10%'}}>
                                        <img className="ui mini circular image" src="/images/HM.png" alt="T1"/>   
                                    </Table.Cell>
                                }
                                
                                <Table.Cell style={{width: '50%'}}>
                                    {item.home === 'NV SJ Sharks' ? <strong>{item.home}</strong> : item.home}
                                    - {item.visitor === 'NV SJ Sharks' ? 
                                    <strong>{item.visitor}</strong> : 
                                    item.visitor}
                                </Table.Cell>
                                <Table.Cell style={{width: '30%'}}>{item.win}:{item.lose}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

const ScoresSpring18 = () => (
    <div>
        <h1>SPRING 2018</h1>
        <Table>
            <Table.Body style={{fontSize: '1.2em'}}>
                {fallScoresList.map((item) => (
                    <Table.Row key={'row-'+item.id}>
                        {item.home === 'NV SJ Sharks' 
                            ?
                            <Table.Cell style={{width: '10%'}}>
                                <img className="ui mini circular image" src="/images/HM.png" alt="T1"/>   
                            </Table.Cell>
                            :
                            <Table.Cell style={{width: '10%'}}>
                                <img className="ui mini circular image" src={item.logoUrl} alt="T2"/>
                            </Table.Cell>
                        }
                        {item.home === 'NV SJ Sharks' 
                            ?
                            <Table.Cell style={{width: '10%'}}>
                                <img className="ui mini circular image" src={item.logoUrl} alt="T2"/>
                            </Table.Cell>
                            :
                            <Table.Cell style={{width: '10%'}}>
                                <img className="ui mini circular image" src="/images/HM.png" alt="T1"/>   
                            </Table.Cell>
                        }
                        <Table.Cell style={{width: '50%'}}>
                            {item.home === 'NV SJ Sharks' ? <strong>{item.home}</strong> : item.home}
                            - {item.visitor === 'NV SJ Sharks' ? 
                            <strong>{item.visitor}</strong> : 
                            item.visitor}
                        </Table.Cell>
                        <Table.Cell style={{width: '30%'}}>{item.win}:{item.lose}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    </div>
);
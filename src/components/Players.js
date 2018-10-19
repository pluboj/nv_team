import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { sortBy, map, find } from 'lodash';
import playersList from '../data/players_list';

export default class Players extends Component {
    state = {
        column: null,
        direction: null,
        data: [],
        player: null,
    }

    componentDidMount() {
        this.setState({
            data: playersList
        });
    }
    handleSort = clickedColumn => () => {
        const { column, direction, data } = this.state;

        if ( column !== clickedColumn ) {
            this.setState({
                column: clickedColumn,
                direction: 'ascending',
                data: sortBy(data, [clickedColumn]),
            })
            return
        }

        this.setState({
            direction: direction === 'ascending' ? 'descending' : 'ascending',
            data: data.reverse(),
        });
    }
    showProfile = e => {
        let pNum = Number(e.target.id);
        const player = find(this.state.data, ['playerNumber', pNum])
        this.setState({
            player: player,
        });
    }
    render() {
        const {
            column,
            direction,
            data,
            player
        } = this.state;
        return(
            <div>
                <div className="ui horizontal segments" style={{background: 'rgb(200, 220, 212)'}}>
                    <div className="ui segment" style={{ width: '60%' }}>
                        <h2>TEAM 2018/ 2019</h2>
                        <Table sortable celled fixed style={{fontSize: '1.3em'}}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell
                                        sorted={column === 'playerNumber' ? direction : null}
                                        onClick={this.handleSort('playerNumber')}
                                    >
                                        <u>#</u>
                                    </Table.HeaderCell>
                                    <Table.HeaderCell
                                        sorted={column === 'name' ? direction : null}
                                        onClick={this.handleSort('name')}
                                    >
                                        <u>PLAYER</u>
                                    </Table.HeaderCell>
                                    <Table.HeaderCell
                                        sorted={column === 'age' ? direction : null}
                                        onClick={this.handleSort('age')}
                                    >
                                        <u>AGE</u>
                                    </Table.HeaderCell>
                                    <Table.HeaderCell
                                        sorted={column === 'ht' ? direction : null}
                                        onClick={this.handleSort('ht')}
                                    >
                                        <u>HT</u>
                                    </Table.HeaderCell>
                                    <Table.HeaderCell
                                        sorted={column === 'wt' ? direction : null}
                                        onClick={this.handleSort('wt')}
                                    >
                                        <u>WT</u>
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {map(data, ({ playerNumber, name, age, ht, wt }) => (
                                    <Table.Row key={playerNumber}>
                                        <Table.Cell>{playerNumber}</Table.Cell>
                                        <Table.Cell
                                            id={playerNumber}
                                            onClick={this.showProfile}
                                            style={{color: '#4183c4', 
                                                textDecoration: 'underline',
                                                cursor: 'pointer'}}
                                        >{name}</Table.Cell>
                                        <Table.Cell>{age}</Table.Cell>
                                        <Table.Cell>{ht}</Table.Cell>
                                        <Table.Cell>{wt}</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                    <div className="ui center aligned segment" 
                        style={{ width: '40%' }}>
                        <h2>PLAYER</h2>
                        {this.state.player 
                            ? 
                            <Player
                                name={player.name}
                                pos={player.pos}
                                pnum={player.playerNumber}
                                age={player.age}
                                ht={player.ht}
                                wt={player.wt}
                            ></Player>
                            : ''
                        }
                    </div>
                </div>  
            </div>
        );
    }

}

class Player extends Component {
    getPosition = pos => {
        let position = '';
        switch(pos) {
            case 'G': 
                position = 'Goalkeeper';
                break;
            case 'D': 
                position = 'Defender';
                break;
            case 'F': 
                position = 'Forward';
                break;
            case 'M': 
                position = 'Midfielder';
                break;
            default:
                position = 'Undefined';
                break;
        }
        return position;
    }
    render() {
        return(
            <div className="ui fluid card">
                <div className="image">
                    <img src="images/player.png" alt="playerImage"/>
                </div>
                <div 
                    className="content" 
                    style={{fontSize: '1.2em',
                        textAlign: 'left'}}>
                    <h1>{this.props.name}</h1>
                    <p style={{fontSize: '1.4em'}}>{this.getPosition(this.props.pos)} <span class="ui teal circular large label">{this.props.pnum}</span></p>
                    <p><strong>AGE: </strong>{this.props.age}</p>
                    <p><strong>HT: </strong> {this.props.ht}</p>
                    <p><strong>WT: </strong> {this.props.wt}</p>
                    <hr/>
                    <h3>PROFESSIONAL EXPERIENCE</h3>
                    <p>2017 (NVYSL): Player made 12 appearances for NVYSL. </p>
                    <h3>ACQUIRED</h3>
                    <p>Signed on February 20, 2018.</p>
                </div>
            </div>
        );
    }
}

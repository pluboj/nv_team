import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { sortBy, map } from 'lodash';
import playersList from '../data/players_list';

export default class Players extends Component {
    state = {
        column: null,
        direction: null,
        data: [],
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
    render() {
        const {
            column,
            direction,
            data
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
                                        <Table.Cell>{name}</Table.Cell>
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
                    </div>
                </div>
            </div>
        );
    }

}

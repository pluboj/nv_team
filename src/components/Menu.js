import React, { Component } from 'react';
import './Menu.css';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import MenuList from '../data/menu_list';

export default class MainMenu extends Component {

    render() {
        const { activeItem, handleItemClick } = this.props;

        return(
            <div className="main-menu-container">
                <div className="ui grid">
                    <div className="four column row">
                        <div className="sixteen wide mobile four wide tablet four wide computer right floated column">
                            <a className="social-icon" href="https://www.instagram.com/?hl=en">
                                <Icon disabled name='instagram' size='big' />
                            </a>
                            <a className="social-icon" href="https://www.pinterest.com">
                                <Icon disabled name='pinterest' size='big' />
                            </a>
                            <a className="social-icon" href="https://twitter.com/?lang=en">
                                <Icon disabled name='twitter square' size='big' />
                            </a>
                            <a className="social-icon" href="https://www.youtube.com/">
                                <Icon disabled name='youtube square' size='big' />
                            </a>    
                        </div>
                    </div>
                </div>
                <Menu pointing secondary fluid widths={6} style={{borderBottom: 'none'}}>
                    <Menu.Item header><span id="team-logo">NV SJ SHARKS</span></Menu.Item>
                    {MenuList.map(item => (
                        <Menu.Item 
                            key={item.id}
                            as={Link} 
                            to={item.link}
                            name={item.name}
                            active={activeItem === item.name} 
                            onClick={() => handleItemClick(item.name)}
                        />
                    ))}
                </Menu>
            </div>
        );
    }
}
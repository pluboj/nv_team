import React, { Component } from 'react';
import { Image, Menu } from 'semantic-ui-react';
import partnersList from '../data/partners_list';
import { Link } from "react-router-dom";
import MenuList from '../data/menu_list';
import './Footer.css';

export default class Footer extends Component {
    render() { 
        const { activeItem, handleItemClick } = this.props; 

        return(
            <div className="ui segment footer-wrapper">
                <div className="ui ten column centered grid">
                    <Image.Group size='tiny' style={{ width: '100%' }}>
                        { partnersList.map((image) => (
                            <Image 
                                key={image.id}
                                src={image.imageUrl}
                                as='a'
                                href={image.url}
                                target='_blank' 
                            />
                        ))}
                    </Image.Group>
                    <div className="row">
                        {MenuList.map(item => (
                            <div className="footer-menu" key={item.id}>
                                <Menu.Item 
                                    as={Link} 
                                    to={item.link}
                                    name={item.name} 
                                    active={activeItem === item.name} 
                                    onClick={() => handleItemClick(item.name)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../stylesheets/App.css';


import Header from './Header';
import MediaCard from './MediaCard';

class MediaList extends Component {
    render () {
        return (
            <div className="App">
                <Header logotipo={logo} />
                <h2 className="Title">{this.props.title}</h2>
                <ul>
                    <li className="List-Element"><MediaCard name="Coco"/></li>
                    <li className="List-Element"><MediaCard corazon={false}/></li>
                    <li className="List-Element"><MediaCard /></li>
                </ul>
            </div>);
    }
}

export default MediaList;
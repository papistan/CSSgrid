import React, { Component } from 'react';
import './mountain.css';

class Mountain extends Component {

    render(){
        let { name, url, elevation, continent, flag } = this.props
        return (
            <div className="mountain" >
                <img src={url} />
                <div className="mtn-info">
                    <p>{flag}</p>
                    <h1>{name}</h1>
                    <p>{elevation}</p>
                    <p>{continent}</p>
                </div>
            </div>
        )
    }
}

export default Mountain;
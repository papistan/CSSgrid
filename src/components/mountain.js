import React, { Component } from 'react';
import './mountain.css';

class Mountain extends Component {

    render(){
        let { name, url, elevation, continent} = this.props
        return (
            <div className="mountain" >
                <img src={url} />
                <div className="mtn-info">
                    <h1>{name}</h1>
                    <p>{elevation} feet</p>
                    <p>{continent}</p>
                </div>
            </div>
        )
    }
}

export default Mountain;
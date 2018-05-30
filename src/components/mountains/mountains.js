import React, { Component } from 'react';
import Mountain from './mountain';
import { DATA } from '../../utils/data';
import './mountains.css';

class Mountains extends Component {
    constructor(props) {
        super(props);
        this.state = {
          mountains: [],
        };
    
    }

    componentWillMount(){
       let mountains =  DATA.map(mountain => {
            return (
                <Mountain 
                    name={mountain.name} 
                    elevation={mountain.elevation}
                    continent={mountain.continent}
                    url={mountain.url}
                />
            )
        })
        console.log(mountains)
        this.setState({ mountains })
    }


    render(){
        let { mountains } = this.state
        return (
            <div className="mountain-row" >
                {mountains}
            </div>
        )
    }
}


export default Mountains;
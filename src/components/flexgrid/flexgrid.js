import React from 'react'
import './flexgrid.css';

const Flexgrid = () => {
    return (
       <div className="grid-container">
        <h3>4 column grid example (wrapper 97%)</h3>
        <div className="wrapper">
            <div className="row">
              <div className="col-1-2">
              flex: 0 0 24%
              </div>
              <div className="col-1-2">
              flex: 0 0 24%
              </div>
              <div className="col-1-2">
              flex: 0 0 24%
              </div>
              <div className="col-1-2">
              flex: 0 0 24%
              </div>
            </div>
            <div className="row">
                <div className="col-2">
                flex: 0 0 49%
                </div>
                <div className="col-1-2">
                flex: 0 0 24%
                </div>
                <div className="col-1-2">
                flex: 0 0 24%
                </div>
            </div>
            <div className="row">
                <div className="col-1-4">
                flex: 0 0 24%
                </div>
                <div className="col-3">
                flex: 0 0 73%
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                flex: 0 0 98%
                </div>
            </div>

            <div className="row compressed-row">
                <div className="col-1-2">
                flex: 0 0 24%
                </div>
                <div className="col-2-4 ">
                flex: 0 0 24%
                </div>
                <div className="col-1-2">
                flex: 0 0 24%
                </div>
           
          </div>
        </div>
        </div>
    )
}

export default Flexgrid;
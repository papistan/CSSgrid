import React from 'react'
import './flex.css';

const Flex = () => {
    return (
        <div>
            <p className="label">display: block</p>
            <div className="raw">
                <div class="item">F</div>
                <div class="item">L</div>
                <div class="item">E</div>
                <div class="item">X</div>
            </div>
            <p className="label">display: flex</p>
            <div className="flex">
                <div class="item">F</div>
                <div class="item">L</div>
                <div class="item">E</div>
                <div class="item">X</div>
            </div>
            <p className="label">flex-direction: column</p>
            <div className="flex-direction">
                <div class="item">F</div>
                <div class="item">L</div>
                <div class="item">E</div>
                <div class="item">X</div>
            </div>
            <p className="label-bold">justify-content: </p>
            <p className="label">justify-content: center</p>
            <div className="center">
                <div class="item">F</div>
                <div class="item">L</div>
                <div class="item">E</div>
                <div class="item">X</div>
            </div>
            <p className="label">justify-content: flex-end</p>
            <div className="flex-end">
                <div class="item">F</div>
                <div class="item">L</div>
                <div class="item">E</div>
                <div class="item">X</div>
            </div>
            <p className="label">justify-content: space-between</p>
            <div className="between">
                <div class="item">F</div>
                <div class="item">L</div>
                <div class="item">E</div>
                <div class="item">X</div>
            </div>
            <p className="label">justify-content: space-around</p>
            <div className="around">
                <div class="item">F</div>
                <div class="item">L</div>
                <div class="item">E</div>
                <div class="item">X</div>
            </div>
            <p className="label">justify-content: space-evenly</p>
            <div className="evenly">
                <div class="item">F</div>
                <div class="item">L</div>
                <div class="item">E</div>
                <div class="item">X</div>
            </div>
            <p className="label-bold">align-items:</p>
            <p className="label">align-items: center</p>
            <div className="align-center">
                <div class="item">F</div>
                <div class="item">L</div>
                <div class="item">E</div>
                <div class="item">X</div>
            </div>
            <p className="label">align-items: flex-start</p>
            <div className="align-start">
                <div class="item">F</div>
                <div class="item">L</div>
                <div class="item">E</div>
                <div class="item">X</div>
            </div>
            <p className="label">align-items: flex-end</p>
            <div className="align-end">
                <div class="item">F</div>
                <div class="item">L</div>
                <div class="item">E</div>
                <div class="item">X</div>
            </div>
            <p className="label">align-items: stretch</p>
            <div className="stretch">
                <div class="item">F</div>
                <div class="item">L</div>
                <div class="item">E</div>
                <div class="item">X</div>
            </div>
            <p className="label-bold">flex-basis:</p>
            <p className="label">flex-basis: __%</p>
            <div className="basis">
                <div class="twenty-five">25%</div>
                <div class="ten">10%</div>
                <div class="thirty">30%</div>
                <div class="five">5%</div>
            </div>
        </div>
    )
}


export default Flex;
import React from 'react'
import { Link } from 'react-router-dom'
import Blocks from '../blocks/blocks'
import './menu.css';

const Menu = () => {
    return (
        <div className="menu-page">
        <div>
            <Blocks />
        </div>
        <div className="menu">
            <div className="flexy">
                <Link className="link" to="/flex"> Flexbox Primer </Link>
            </div>
            <div className="grid">
                <Link className="link-2" to="/flexgrid"> Flexgrid Example </Link>
            </div>
            <div className="grid">
                <Link className="link-2" to="/grid"> Grid Example </Link>
            </div>
            <div className="example">
                <Link className="link-3" to="/gridexample"> Example </Link>
            </div>
        </div>
        </div>
    )
}

export default Menu;
import React from 'react'
import '../styles/Nav.scss'
import {sections} from '../content.json'
import {NavItem} from "./NavItem";

export const Nav: React.FC = () => {
    return (
        <nav className="Nav">
            <ul>
                {sections.map(section => <NavItem title={section} key={`Nav_${section}`} /> )}
            </ul>
        </nav>
    )
}
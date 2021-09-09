import React from 'react'
import '../styles/NavItem.scss'
import {NavItemProps} from '../interfaces/props'

export const NavItem: React.FC<NavItemProps> = (props) => {
    return (
        <li className='NavItem'>
            <a href={`#${props.title}`}>{props.title}</a>
        </li>
    )
}
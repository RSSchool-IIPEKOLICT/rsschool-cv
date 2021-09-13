import React from 'react'
import '../styles/Nav.scss'
import {sections} from '../content.json'

export const Nav: React.FC = () =>
    <nav className="Nav">
        <ul>
            {sections.map(section =>
                <li key={section}>
                    <a href={`#${section}`}>{section}</a>
                </li>
            )}
        </ul>
    </nav>

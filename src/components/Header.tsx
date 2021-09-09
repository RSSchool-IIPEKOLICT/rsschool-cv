import React from 'react'
import '../styles/Header.scss'
// import photo from '../img/photo.png'
import {name} from '../content.json'
import {Contacts} from "./Contacts";

export const Header: React.FC = () => {
    return (
        <header className='Header'>
            {/*<img src={photo} alt="photo" className='Header__img'/>*/}
            <div className='Header__img Header__joke'/>
            <h1>{name}</h1>
            <Contacts prefix='header' />
        </header>
    )
}
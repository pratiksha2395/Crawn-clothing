import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.componenet'
import HomePageStyle from './homepage.style'

const HomePage =()=>{
    return (
    <HomePageStyle>
        <div className="directory-menu">
             <Directory />
        </div>
    </HomePageStyle>
    )
}

export default HomePage
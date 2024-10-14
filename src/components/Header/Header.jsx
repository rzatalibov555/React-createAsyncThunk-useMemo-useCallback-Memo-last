import React, { useState } from 'react'
import './Header.css'

const Header = ({text}) => {

    

    console.log("Header")

    return (
        <div className='header'>
            <p>{text}</p>
        </div>
    )
}

export default React.memo(Header)

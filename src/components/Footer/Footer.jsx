import React, { useState, memo } from 'react'
import "./Footer.css"

const Footer = ({count}) => {


    
    console.log("Footer")

    return (
        <div className='footer'>
            <p>{count}</p>
        </div>
    )
}

export default memo(Footer)

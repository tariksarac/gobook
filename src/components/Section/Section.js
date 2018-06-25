import React from 'react'
import './Section.css'

const Section = ({style, children}) => {
    return(
        <div className={'Section'} style={{...style}}>{children}</div>
    )
}

export default Section
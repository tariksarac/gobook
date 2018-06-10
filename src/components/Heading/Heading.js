import React from 'react'
import './Heading.css'

const Heading = ({subHeading,heading,line, color}) => {
    return(
        <div className={'Heading'} style={{backgroundColor:color}}>
            { heading && <div className={'main-heading'}>{heading}</div>}
            { line && <div className={'line'}/>}
            { subHeading && <div className={"sub-heading"}>{subHeading}</div>}
        </div>
    )
}
export default Heading
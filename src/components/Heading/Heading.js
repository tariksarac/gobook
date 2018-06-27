import React from 'react'
import './Heading.css'

const Heading = ({subTitle,heading,line, color, margin, about, style}) => {
    return(
        <div className={'Heading'} style={{...style}}>
            { heading && <div className={'main-heading'}>{heading}</div>}
            { line && <div className={'line'}/>}
            { subTitle && <div className={"sub-heading"}>{subTitle}</div>}
            { about && <div className={"sub-heading-about"}>{about}</div>}
        </div>
    )
}
export default Heading
import React from 'react'
import './Highlights.css'
import {sarajevo} from "../../constants/constants";

const HighlightItem = ({data, reverse}) => {
    let featuredStyle= {
        background: `linear-gradient(
      rgba(0, 0, 0, 0.45), 
      rgba(0, 0, 0, 0.45)
    ), url(${sarajevo})`,
        backgroundPosition:'center',
        backgroundSize: 'cover',
    }

    let reverseClass = reverse ? 'reverse' : ''
    return(
        <div className={`HighlightItem-container ${reverseClass}`} >

            <div className={'HighlightItem-text'}>
                <div className={'HighlightItem'}>{data.town}</div>
                { data.highLights && data.highLights .map((item, index) => <p key={index}>{item}</p>)}
            </div>
            <div className={'Highlights-image'}><img src={data.image} alt={''}/></div>
            {/*<div style={{width:'50%', height: '100%'}}>*/}
                {/*<div className={'Highlights-image'} style={featuredStyle}><span>twst</span></div>*/}
            {/*</div>*/}
        </div>

    )
}

export default HighlightItem
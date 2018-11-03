import React from 'react'
import './Highlights.css'
import * as Markdown from "react-markdown";
import GoBookPicture from "../Common/GoBookPicture/GoBookPicture";
import Line from "../Common/Line/Line";

const HighlightItem = ({data, reverse}) => {

    let reverseClass = reverse ? 'reverse' : ''
    return(
        <div className={`HighlightItem-container ${reverseClass}`} >

            {/*<div className={'HighlightItem-text'}>*/}
                {/*<div className={'HighlightItem'}>{data.town}</div>*/}
                {/*{ data.highLights && data.highLights.map((item, index) => <p key={index}>{item}</p>)}*/}
            {/*</div>*/}
            <div className={'HighlightItem-text'}>
                {/*<div className={'HighlightItem'}>{data.highlightText}</div>*/}
                <Markdown source={data.mainTitle} className={'main-title'} />
                <Line color={'#2edc38'} style={{width: '100px', height: '10px', margin:'0'}}/>
                <Markdown source={data.highlightText} className={'go-book-text'} />
            </div>
            {/*<div className={'Highlights-image'}><img src={data.highlightPicture} alt={data.town}/></div>*/}
            <GoBookPicture style={{flexBasis:'45%', flexShrink:'1' }} picture={data.highlightPicture} />
            {/*<div style={{width:'50%', height: '100%'}}>*/}
                {/*<div className={'Highlights-image'} style={featuredStyle}><span>twst</span></div>*/}
            {/*</div>*/}
        </div>

    )
}

export default HighlightItem
import React from 'react'
import Section from "../Section/Section";
import './Highlights.css'
import HighlightItem from "./HighlightItem";
import Heading from "../Heading/Heading";

const Highlights = ({highlights}) => {
    return(
        <Section style={{backgroundColor: 'unset', padding: '50px 0'}}>
            <div className={'Highlights'}>
                {/*<div className={'title'}>Tour Highlights</div>*/}
                <Heading mainTitle={'Tour Highlights'} hasLine/>
                {highlights.map((item,index) => <HighlightItem key={index} data={item} reverse={index%2===0}/>)}
            </div>
        </Section>
    )
}

export default Highlights
import React from 'react'
import Section from "../Section/Section";
import ExpansionItem from "../Common/ExpansionItem/ExpansionItem";
import './Itinerary.css'
import Heading from "../Heading/Heading";

const Itinerary = ({data, itinerary, style}) => {
    return(
        <Section style={{ flexDirection: 'column', alignItems: 'flex-start', ...style }}>
            {/*<div className={'Itinerary-title'}>Itinerary</div>*/}
            <Heading mainTitle={'Itinerary'} hasLine/>
            { data.map((item, index) => <ExpansionItem key={index} data={item} itinerary={itinerary}/>) }
        </Section>
    )
}

export default Itinerary
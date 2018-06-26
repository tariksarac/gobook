import React from 'react'
import Section from "../Section/Section";
import ExpansionItem from "../Common/ExpansionItem/ExpansionItem";
import './Itinerary.css'

const Itinerary = ({data, itinerary}) => {
    return(
        <Section style={{ background:'#f5f5f5', flexDirection: 'column', alignItems: 'center' }}>
            <div className={'Itinerary-title'}>Itinerary</div>
            { data.map((item, index) => <ExpansionItem key={index} data={item} itinerary={itinerary}/>)}
        </Section>
    )
}

export default Itinerary
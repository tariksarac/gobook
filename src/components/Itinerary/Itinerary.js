import React from 'react'
import Section from "../Section/Section";
import ExpansionItem from "../Common/ExpansionItem/ExpansionItem";
import './Itinerary.css'

const Itinerary = ({data}) => {
    return(
        <Section style={{ background:'#f5f5f5', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div className={'Itinerary-title'}>Itinerary</div>
            { data.map((item, index) => <ExpansionItem key={index} data={item}/>)}
        </Section>
    )
}

export default Itinerary
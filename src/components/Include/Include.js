import React from 'react'
import Section from "../Section/Section";
import ExpansionItem from "../Common/ExpansionItem/ExpansionItem";

const Include = ({data, include, title}) => {
    return(
        <Section style={{ flexDirection: 'column', alignItems: 'center' }}>
            <div className={'Itinerary-title'}>{title}</div>
            <ExpansionItem data={data} include={include}/>
        </Section>
    )
}

export default Include
import React from 'react'
import Section from "../Section/Section";
import './Highlights.css'
import HighlightItem from "./HighlightItem";
import { sarajevo} from "../../constants/constants";

const Highlights = ({highlights}) => {
    return(
        <Section>
            <div className={'Highlights'}>
                <div className={'title'}>highlights</div>
                {highlights.map((item,index) => <HighlightItem key={index} data={item}/>)}
            </div>
            <div className={'Highlights-image'}><img src={sarajevo} alt={''}/></div>
        </Section>
    )
}

export default Highlights
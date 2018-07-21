import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Place from '@material-ui/icons/Place';
import Check from '@material-ui/icons/Check';
import Error from '@material-ui/icons/Error';
import './ExpansionItem.css';
import * as Markdown from 'react-markdown';

const ExpansionItem = ({ data, classes, include, itinerary }) => {
    debugger
    return (
        <ExpansionPanel className={'ext-panel'}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={'exp-sum'}>
                {itinerary && <Place />}
                {include && <Check />}
                {include === undefined && itinerary === undefined && <Error />}
                { data && <Markdown source={data.title} className={'go-book-text'} /> }
                {/*{itinerary && <div className={'title'}>{`${data.name}   ${data.place}`}</div>}*/}
                {/*{!itinerary && <div className={'title'}>{data.includeText}</div>}*/}
            </ExpansionPanelSummary>
            { data && <ExpansionPanelDetails style={{ flexDirection: 'column' }} className={'exp-details'}>
                { data.introDescription && (
                    <Markdown source={data.introDescription} className={'go-book-text'} />
                )}
            </ExpansionPanelDetails> }
        </ExpansionPanel>
    );
};
export default ExpansionItem;

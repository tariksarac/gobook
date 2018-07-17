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

const ExpansionItem = ({ data, classes, include, itinerary }) => {
    return (
        <ExpansionPanel className={'ext-panel'}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={'exp-sum'}>
                {itinerary && <Place />}
                {include && <Check />}
                {include === undefined && itinerary === undefined && <Error />}
                {itinerary && <div className={'title'}>{`${data.name}   ${data.place}`}</div>}
                {!itinerary && <div className={'title'}>{data.includeText}</div>}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{flexDirection: 'column'}}>
                {itinerary &&
                    data.introDescription && (
                        <Typography component="p" align={'left'} style={{borderBottom: !data.descriptionDetails && '1px solid'}}>
                            {data.introDescription}
                        </Typography>
                    )}
                {itinerary &&
                    data.descriptionDetails && (
                      <div style={{borderBottom: data.descriptionDetails && '1px solid'}}>{data.descriptionDetails.map((item, index) => <p key={index}><strong>{item.emphasize}</strong>{item.text}</p>)}</div>
                    )}
                {!itinerary &&
                    data.includeDescription && (
                        <Typography component="p" align={'left'}>
                            {data.includeDescription}
                        </Typography>
                    )}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};
export default ExpansionItem;

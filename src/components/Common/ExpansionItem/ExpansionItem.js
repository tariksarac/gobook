import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Place from '@material-ui/icons/Place';
import Check from '@material-ui/icons/Check';
import Error from '@material-ui/icons/Error';
import './ExpansionItem.css';
import * as Markdown from 'react-markdown';

const ExpansionItem = ({ data, classes, include, itinerary }) => {
  let title = data.mainTitle;
  if (include) {
    title = '##### Tour includes:';
  }
  if (!include && !data.mainTitle) {
    title = '##### Tour does not include:';
  }
  return (
    <ExpansionPanel className={'ext-panel'} defaultExpanded={true}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={'exp-sum'}>
        {itinerary && <Place />}
        {include && <Check />}
        {include === undefined && itinerary === undefined && <Error />}
        {data && <Markdown source={title} className={'go-book-text'} />}
      </ExpansionPanelSummary>
      {data && (
        <ExpansionPanelDetails style={{ flexDirection: 'column' }} className={'exp-details'}>
          {data.description && <Markdown source={data.description} className={'go-book-text'} />}
        </ExpansionPanelDetails>
      )}
    </ExpansionPanel>
  );
};
export default ExpansionItem;

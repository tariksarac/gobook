import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Place from '@material-ui/icons/Place';
import './ExpansionItem.css'

const ExpansionItem = ({classes}) => {
    return(
        <ExpansionPanel className={'ext-panel'}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={'exp-sum'}>
                <Place/>
                <div className={'title'}>Day 1: Friday: Cape Town</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}
export default ExpansionItem
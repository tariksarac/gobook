import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core';

export const tourOptions = [
  'Select Tour',
  'THE BEST OF BOSNIA & HERZEGOVINA TOUR',
  'BEST OF BOSNIA',
  'BOSNIA & HERZEGOVINA INTRO TOUR',
  'ONE DAY TOUR IN MOSTAR AND POČITELJ',
  'DAY TOUR IN VISOKO',
  'DAY TOUR IN TRAVNIK AND JAJCE',
  'HOSSZÚ HÉTVÉGE BOSZNIÁBAN',
];

const styles = (theme) => ({
  root: {
    display: 'flex',
    '&:focus': {
      background: 'transparent',
    },
  },
  label: {
    margin: theme.spacing.unit,
    textTransform: 'uppercase',
    width: '100%',
    display: 'flex',
    textAlign: 'left',
    fontSize: '14px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.14',
    letterSpacing: 'normal',
    color: '#444444',
    marginBottom: '0',
  },
  select: {
    margin: theme.spacing.unit,
    display: 'flex',
    boxSizing: 'border-box',
    padding: '13px 20px',
    height: '50px',
    backgroundColor: '#ffffff',
    '&:before': {
      border: 'solid 1px #7b7b7b',
      height: '50px',
      borderRadius: '8px',
      '&:hover': {
        display: 'none',
      },
    },
    '&:after': {
      border: 'solid 1px #33a3fc',
      height: '50px',
      borderRadius: '8px',
    },
    '&:hover': {
      border: '0',
    },
  },
});

class BookFormSelect extends Component {
  static defaultProps = {
    onSelectOption: () => {},
  };

  static propTypes = {
    onSelectOption: PropTypes.func,
  };
  state = {
    // selected: this.props.tourItem ? this.props.tourItem.title : 'Please select tour',
    selected: this.props.selected ? this.props.selected : 'Please select tour',
    open: false,
  };
  handleChange = (event) => {
    // this.setState({ selected: event.target.value });
    this.props.onSelectOption(event.target.value);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  componentDidUpdate(prevState) {
    if (prevState.selected !== this.props.selected) {
    }
  }

  render() {
    const { classes, customStyle, id, name, tourItem, selectedTour } = this.props;
    const { open } = this.state;
    return (
      <div style={{ ...customStyle }}>
        <InputLabel htmlFor={id} className={classes.label}>
          {name}
        </InputLabel>
        <Select
          name={'tour'}
          id={'tour'}
          open={open}
          onClose={this.handleClose}
          onOpen={this.handleOpen}
          value={selectedTour}
          onChange={this.handleChange}
          className={classes.select}
          inputProps={{
            name: 'age',
            id: 'demo-controlled-open-select',
            disabled: !!tourItem,
          }}
        >
          {tourOptions.map((item, index) => (
            <MenuItem key={index} value={item} selected={item === selectedTour}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </div>
    );
  }
}

BookFormSelect.propTypes = {};

// export default BookFormSelect;
export default withStyles(styles)(BookFormSelect);

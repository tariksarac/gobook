import React from 'react';
import PropTypes from 'prop-types';
import './BookFormInput.css';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    border: '0',
  },
  input: {
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
  label: {
    margin: theme.spacing.unit,
    textTransform: 'uppercase',
    width: '100%',
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
});

const BookFormInput = ({ name, classes, id, type, placeholder, customStyle, onChange, value }) => {
  return (
    <div className={'BookFormInput'} style={{ ...customStyle }}>
      <InputLabel htmlFor={id} className={classes.label}>
        {name}
      </InputLabel>
      <Input
        required
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        id={id}
        // defaultValue={defaultValue}
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        value={value}
      />
    </div>
  );
};

BookFormInput.propTypes = {
  inputLabel: PropTypes.string,
};
BookFormInput.defaultProps = {
  defaultValue: '',
};

// export default BookFormInput;
export default withStyles(styles)(BookFormInput);

import React from 'react';
import PropTypes from 'prop-types';
import './ContactFormTextbox.css';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  textField: {
    marginTop: '0',
  },
  underline: {
    display: 'none',
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
  input: {
    boxSizing: 'border-box',
    margin: theme.spacing.unit,
    // border: 'solid 1px #7b7b7b',
    minHeight: '200px',
    borderRadius: '8px',
    padding: '13px 20px',
    '&:before': {
      border: 'solid 1px #7b7b7b',
      minHeight: '200px',
      borderRadius: '8px',
      '&:hover': {
        display: 'none',
      },
    },
    '&:after': {
      border: 'solid 1px #33a3fc',
      minHeight: '200px',
      borderRadius: '8px',
    },
  },
});

const ContactFormTextbox = ({
  name,
  classes,
  defaultValue,
  id,
  type,
  placeholder,
  customStyle,
  onChange,
  value,
}) => {
  return (
    <div className={'BookFormInput'} style={{ ...customStyle }}>
      <InputLabel htmlFor={id} className={classes.label}>
        {name}
      </InputLabel>
      <TextField
        id="standard-multiline-flexible"
        placeholder={'Your message'}
        multiline
        rowsMax="10"
        value={value}
        onChange={onChange}
        className={classes.textField}
        margin="normal"
        InputProps={{ className: classes.input }}
      />
    </div>
  );
};

ContactFormTextbox.propTypes = {
  inputLabel: PropTypes.string,
};
ContactFormTextbox.defaultProps = {
  defaultValue: '',
};

// export default BookFormInput;
export default withStyles(styles)(ContactFormTextbox);

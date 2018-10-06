import React from 'react';
import PropTypes from 'prop-types';
import './BookFormInput.css';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root:{
        display: 'flex'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        border: '0'
    },
    input: {
        margin: theme.spacing.unit,
        display: 'flex',
        boxSizing: 'border-box',
        padding:'13px 20px',
        width: '493px',
        height: '50px',
        backgroundColor: '#ffffff',
        '&:before' : {
            border: 'solid 1px #7b7b7b',
            width: '493px',
            height: '50px',
            borderRadius: '8px',
        },
        '&:after' : {
            border: 'solid 1px #33a3fc',
            width: '493px',
            height: '50px',
            borderRadius: '8px',
        },
        '&:hover' : {
            border:'0'
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
        color: '#444444'
    },
});


const BookFormInput = ({name, classes, defaultValue, id, type, placeholder}) => {
    const handleOnchange = (event) => console.log('fsdfsd')
    return (
        <div className={'BookFormInput'}>
            <InputLabel htmlFor={id} className={classes.label}>{name}</InputLabel>
            <Input
                onChange={(event)=>console.log('fsdfsd', event)}
                placeholder={placeholder}
                type={type}
                id={id}
                fullWidth
                defaultValue={defaultValue}
                className={classes.input}
                inputProps={{
                    'aria-label': 'Description',
                }}
            />
        </div>
    );
};

BookFormInput.propTypes = {
    inputLabel: PropTypes.string
};
BookFormInput.defaultProps = {
    defaultValue: ''
};

// export default BookFormInput;
export default withStyles(styles)(BookFormInput);

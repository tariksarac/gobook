import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BookButton.css';

class BookButton extends Component {
    static defaultProps = {
        buttonText: 'Book',
        color: '#33a3fc',
        onClickAction: () => {}
    };

    static propTypes = {
        buttonText: PropTypes.string,
        color: PropTypes.string,
        onClickAction: PropTypes.func,
    };

    state = {
        hovered: false,
    };

    render() {

        let { buttonText, onClickAction,style, disabled, ...rest } = this.props;
        let buttonStyle = {
            backgroundColor: disabled ? 'gray' : !this.state.hovered && rest.color,
            color: !this.state.hovered ? '#ffffff' : rest.color,
            border: this.state.hovered ? '1px solid' : 'none',
            borderColor: this.state.hovered && rest.color,
        };
        return (
            <button
                {...rest}
                disabled={disabled}
                className={'BookButton'}
                style={{...style, ...buttonStyle}}
                onClick={(event)=>onClickAction(event)}
                onMouseOver={() => this.setState(({ hovered }) => ({ hovered: !hovered }))}
                onMouseLeave={() => this.setState(({ hovered }) => ({ hovered: !hovered }))}>
                {buttonText}
            </button>
        );
    }
}

export default BookButton;

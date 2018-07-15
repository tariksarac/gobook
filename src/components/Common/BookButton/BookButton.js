import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BookButton.css';
import Button from "@material-ui/core/es/Button/Button";

class BookButton extends Component {
    static defaultProps = {
        buttonText: '',
    };

    static propTypes = {
        buttonText: PropTypes.string,
    };

    state = {
        hovered: false,
    };

    render() {

        let { buttonText, onClickAction,style, ...rest } = this.props;
        let buttonStyle = {
            backgroundColor: !this.state.hovered && '#33a3fc',
            color: !this.state.hovered ? '#ffffff' : '#33a3fc',
            border: this.state.hovered ? '1px solid' : '0',
            borderColor: this.state.hovered && '#33a3fc',
        };
        return (
            <button
                className={'BookButton'}
                style={{...style, ...buttonStyle}}
                onClick={onClickAction}
                onMouseOver={() => this.setState(({ hovered }) => ({ hovered: !hovered }))}
                onMouseLeave={() => this.setState(({ hovered }) => ({ hovered: !hovered }))}>
                {buttonText}
            </button>
        );
    }
}

export default BookButton;

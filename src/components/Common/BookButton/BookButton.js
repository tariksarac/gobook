import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BookButton.css';

class BookButton extends Component {
    static defaultProps = {
        buttonText: 'Book',
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
            border: this.state.hovered ? '1px solid' : 'none',
            borderColor: this.state.hovered && '#33a3fc',
        };
        return (
            <button
                {...rest}
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

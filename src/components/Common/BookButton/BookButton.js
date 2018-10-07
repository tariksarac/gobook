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

        let { buttonText, onClickAction,style, ...rest } = this.props;
        let buttonStyle = {
            backgroundColor: !this.state.hovered && rest.color,
            color: !this.state.hovered ? '#ffffff' : rest.color,
            border: this.state.hovered ? '1px solid' : 'none',
            borderColor: this.state.hovered && rest.color,
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

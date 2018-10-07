import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookFormInput from '../BookFormInput/BookFormInput';
import axios from 'axios';


class CreateTourForm extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {};

    static propTypes = {};

    state = {
        custom: false,
        fullName: '',
        phone: '',
        numberOfPeople: 0,
        placeToVisit: '',
        startDate:'',
        endDate:'',
        whereAreYouForm:''
    };

    componentDidMount() {
        this.props.onRef(this);
    }
    componentWillUnmount() {
        this.props.onRef(null);
    }
    submitForm = () => {
        let data = { ...this.state, custom: null };
        axios({
            url: 'https://formspree.io/tarik.sarac@gmail.com',
            method: 'POST',
            data: data,
            dataType: 'json',
        })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    render() {
        const { style } = this.props;
        const { fullName, phone, numberOfPeople, placeToVisit, startDate, endDate, whereAreYouForm } = this.state;
        return (
            <form className={'BookTourForm'} style={style} name={'CreateTour'} autoComplete="off">
                <BookFormInput
                    name={'full NAME'}
                    placeholder={'Bosnia and Herzegovina Intro Tour'}
                    customStyle={{ width: '100%' }}
                    fullWidth
                    value={fullName}
                    onChange={event => this.setState({ fullName: event.target.value })}
                />
                <BookFormInput
                    name={'Phone number'}
                    placeholder={'Phone number'}
                    customStyle={{ width: '50%' }}
                    value={phone}
                    onChange={event => this.setState({ phone: event.target.value })}
                />
                <BookFormInput name={'Email'} placeholder={'Email'} customStyle={{ width: '50%' }} />
                <BookFormInput
                    name={'Number of people'}
                    placeholder={'Number of people'}
                    customStyle={{ width: '50%' }}
                    value={numberOfPeople}
                    onChange={event => this.setState({ numberOfPeople: event.target.value })}
                />
                <BookFormInput
                    name={'Place to visit'}
                    placeholder={'Place to visit'}
                    customStyle={{ width: '50%' }}
                    value={placeToVisit}
                    onChange={event => this.setState({ placeToVisit: event.target.value })}
                />
                <BookFormInput
                    name={'Start date'}
                    placeholder={'Start date'}
                    customStyle={{ width: '50%' }}
                    value={startDate}
                    onChange={event => this.setState({ startDate: event.target.value })}
                />
                <BookFormInput
                    name={'End date'}
                    placeholder={'End date'}
                    customStyle={{ width: '50%' }}
                    value={endDate}
                    onChange={event => this.setState({ endDate: event.target.value })}
                />
                <BookFormInput
                    name={'Where are you from'}
                    placeholder={'Where are you from'}
                    fullWidth
                    customStyle={{ width: '100%' }}
                    value={whereAreYouForm}
                    onChange={event => this.setState({ whereAreYouForm: event.target.value })}
                />
            </form>
        );
    }
}

export default CreateTourForm;

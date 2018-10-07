import React from 'react';
import PropTypes from 'prop-types';
import './BookTourForm.css';
import BookFormInput from '../BookFormInput/BookFormInput';
import BookFormSelect from '../BookFormSelect/BookFormSelect';
import axios from "axios";

class BookTourForm extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {};

    static propTypes = {};

    state = {
        tourName: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        date: '',
        numberOfPeople: 0,
        whereAreYouForm:''
    };

    componentDidMount() {
        this.props.onRef(this);
    }
    componentWillUnmount() {
        this.props.onRef(null);
    }
    submitForm = () => {
        let data = { ...this.state };
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
        const { style, tourItem } = this.props;
        const { tourName, firstName, lastName, phone, email, date, numberOfPeople, whereAreYouForm } = this.state;
        return (
            <div className={'BookTourForm'} style={style}>
                <BookFormSelect
                    id={tourName}
                    name={'ToUR NAME'}
                    placeholder={'Bosnia and Herzegovina Intro Tour'}
                    customStyle={{ width: '100%' }}
                    fullWidth
                    tourItem={tourItem}
                    onSelectOption={option => this.setState({ tourName: option })}
                />
                <BookFormInput
                    name={'First name'}
                    placeholder={'First name'}
                    // customStyle={{ width: '50%' }}
                    value={firstName}
                    type={'text'}
                    onChange={event => this.setState({ firstName: event.target.value })}
                />
                <BookFormInput
                    name={'Last name'}
                    placeholder={'Last name'}
                    // customStyle={{ width: '50%' }}
                    type={'text'}
                    value={lastName}
                    onChange={event => this.setState({ lastName: event.target.value })}
                />
                <BookFormInput
                    name={'Phone number'}
                    placeholder={'Phone number'}
                    // customStyle={{ width: '50%' }}
                    type={'tel'}
                    value={phone}
                    onChange={event => this.setState({ phone: event.target.value })}
                />
                <BookFormInput
                    name={'Email'}
                    placeholder={'Email'}
                    // customStyle={{ width: '50%' }}
                    type={'email'}
                    value={email}
                    onChange={event => this.setState({ email: event.target.value })}
                />
                <BookFormInput
                    name={'Number of people'}
                    placeholder={'Number of people'}
                    // customStyle={{ width: '50%' }}
                    type={'number'}
                    value={date}
                    onChange={event => this.setState({ date: event.target.value })}
                />
                <BookFormInput
                    name={'Date'}
                    placeholder={'Date'}
                    // customStyle={{ width: '50%' }}
                    type={'date'}
                    value={numberOfPeople}
                    onChange={event => this.setState({ numberOfPeople: event.target.value })}
                />
                <BookFormInput
                    name={'Where are you from'}
                    placeholder={'Where are you from'}
                    fullWidth
                    customStyle={{ width: '100%' }}
                    type={'text'}
                    value={whereAreYouForm}
                    onChange={event => this.setState({ whereAreYouForm: event.target.value })}
                />
            </div>
        );
    }
}

BookTourForm.propTypes = {};
BookTourForm.defaultProps = {};

export default BookTourForm;

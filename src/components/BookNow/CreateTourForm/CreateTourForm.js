import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookFormInput from '../BookFormInput/BookFormInput';
import axios from 'axios';
import { withFormik } from 'formik';
import * as Yup from 'yup';

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
    startDate: '',
    endDate: '',
    whereAreYouFrom: '',
    email: '',
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
      url: 'https://iau89pgyxf.execute-api.eu-west-1.amazonaws.com/dev/email/createTour',
      method: 'POST',
      data: data,
      dataType: 'json',
    })
      .then(function (response) {
        this.setState({
          fullName: '',
          phone: '',
          numberOfPeople: 0,
          placeToVisit: '',
          startDate: '',
          endDate: '',
          whereAreYouFrom: '',
          email: '',
          openModal: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { style } = this.props;
    const {
      fullName,
      phone,
      numberOfPeople,
      placeToVisit,
      startDate,
      endDate,
      whereAreYouFrom,
      email,
    } = this.state;
    return (
      <form className={'BookTourForm'} style={style} name={'CreateTour'} autoComplete="off">
        <BookFormInput
          name={'full NAME'}
          placeholder={'Full Name'}
          customStyle={{ width: '100%' }}
          fullWidth
          value={fullName}
          onChange={(event) => this.setState({ fullName: event.target.value })}
        />
        <BookFormInput
          type={'tel'}
          name={'Phone number'}
          placeholder={'Phone number'}
          value={phone}
          onChange={(event) => this.setState({ phone: event.target.value })}
        />
        <BookFormInput
          type={'email'}
          name={'Email'}
          placeholder={'Email'}
          value={email}
          onChange={(event) => this.setState({ email: event.target.value })}
        />
        <BookFormInput
          type={'number'}
          name={'Number of people'}
          placeholder={'Number of people'}
          value={numberOfPeople}
          onChange={(event) => this.setState({ numberOfPeople: event.target.value })}
        />
        <BookFormInput
          name={'Place to visit'}
          placeholder={'Place to visit'}
          value={placeToVisit}
          onChange={(event) => this.setState({ placeToVisit: event.target.value })}
        />
        <BookFormInput
          type={'date'}
          name={'Start date'}
          placeholder={'Start date'}
          value={startDate}
          onChange={(event) => this.setState({ startDate: event.target.value })}
        />
        <BookFormInput
          type={'date'}
          name={'End date'}
          placeholder={'End date'}
          value={endDate}
          onChange={(event) => this.setState({ endDate: event.target.value })}
        />
        <BookFormInput
          name={'Where are you from'}
          placeholder={'Where are you from'}
          fullWidth
          value={whereAreYouFrom}
          onChange={(event) => this.setState({ whereAreYouFrom: event.target.value })}
          customStyle={{ width: '100%' }}
        />
      </form>
    );
  }
}

export default CreateTourForm;

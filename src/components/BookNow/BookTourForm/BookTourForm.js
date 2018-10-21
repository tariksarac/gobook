import React from 'react';
import PropTypes from 'prop-types';
import './BookTourForm.css';
import BookFormInput from '../BookFormInput/BookFormInput';
import BookFormSelect, {options} from '../BookFormSelect/BookFormSelect';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import ConfirmationDialog from "../../Forms/ConfirmationDialog/ConfirmationDialog";

class BookTourForm extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        selectedTour: 'Select Tour'
    };

    static propTypes = {
        selectedTour: PropTypes.string
    };

    state = {
        tourName: this.props.selectedTour || 'Select Tour',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        date: '',
        numberOfPeople: 0,
        whereAreYouFrom: '',
        open: false,
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
            url: 'https://iau89pgyxf.execute-api.eu-west-1.amazonaws.com/dev/email/bookTour',
            method: 'POST',
            data: data,
            dataType: 'json',
        })
            .then(response => {
                console.log(response);
                this.setState(({ open }) => ({
                    tourName: 'Select tour',
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    date: '',
                    numberOfPeople: 0,
                    whereAreYouFrom: '',
                    open: !open,
                }));
            })
            .catch((error) => {
                console.log(error);
            });
    };
    handleClose = () => {
        this.setState(({ open }) => ({ open: !open }));
    };

    render() {
        const { style, tourItem } = this.props;
        const {
            tourName,
            firstName,
            lastName,
            phone,
            email,
            date,
            numberOfPeople,
            whereAreYouFrom,
        } = this.state;
        return (
            <div className={'BookTourForm'} style={style}>
                <BookFormSelect
                    id={tourName}
                    name={'ToUR NAME'}
                    placeholder={'Bosnia and Herzegovina Intro Tour'}
                    customStyle={{ width: '100%', marginBottom: '25px' }}
                    fullWidth
                    tourItem={tourItem}
                    onSelectOption={option => this.setState({ tourName: option })}
                    selectedTour={this.state.tourName}

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
                    value={numberOfPeople}
                    onChange={event => this.setState({ numberOfPeople: event.target.value })}
                />
                <BookFormInput
                    name={'Date'}
                    placeholder={'Date'}
                    // customStyle={{ width: '50%' }}
                    type={'date'}
                    value={date}
                    onChange={event => this.setState({ date: event.target.value })}
                />
                <BookFormInput
                    name={'Where are you from'}
                    placeholder={'Where are you from'}
                    fullWidth
                    customStyle={{ width: '100%' }}
                    type={'text'}
                    value={whereAreYouFrom}
                    onChange={event => this.setState({ whereAreYouFrom: event.target.value })}
                />

                {/*<Dialog*/}
                    {/*open={this.state.open}*/}
                    {/*onClose={this.handleClose}*/}
                    {/*aria-labelledby="alert-dialog-title"*/}
                    {/*aria-describedby="alert-dialog-description">*/}
                    {/*<DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>*/}
                    {/*<DialogContent>*/}
                        {/*<DialogContentText id="alert-dialog-description">*/}
                            {/*Let Google help apps determine location. This means sending anonymous location*/}
                            {/*data to Google, even when no apps are running.*/}
                        {/*</DialogContentText>*/}
                    {/*</DialogContent>*/}
                    {/*<DialogActions>*/}
                        {/*<Button onClick={this.handleClose} color="primary">*/}
                            {/*Disagree*/}
                        {/*</Button>*/}
                        {/*<Button onClick={this.handleClose} color="primary" autoFocus>*/}
                            {/*Agree*/}
                        {/*</Button>*/}
                    {/*</DialogActions>*/}
                {/*</Dialog>*/}
                <ConfirmationDialog open={this.state.open} handleClose={this.handleClose}/>
            </div>
        );
    }
}

BookTourForm.propTypes = {};
BookTourForm.defaultProps = {};

export default BookTourForm;

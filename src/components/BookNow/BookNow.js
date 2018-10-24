import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './BookNow.css';
import '../../components/Forms/BookFormStyle.css';
import BookTourForm from '../../components/Forms/BookTourForm';
import CreateTourForm from '../../components/Forms/CreateTourForm';
import BookButton from '../Common/BookButton/BookButton';
import GoBookPicture from '../Common/GoBookPicture/GoBookPicture';
import Heading from '../Heading/Heading';
import { ReCaptcha } from 'react-recaptcha-google';
import axios from 'axios';
import ConfirmationDialog from '../Forms/ConfirmationDialog/ConfirmationDialog';

class BookNow extends Component {
    constructor(props) {
        super(props);

        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    }

    state = {
        custom: false,
        notRobot: false,
    };

    static defaultProps = {};

    static propTypes = {};

    componentDidMount() {
        if (this.captchaDemo) {
            console.log('started, just a second...');
            this.captchaDemo.reset();
            this.captchaDemo.execute();
        }
    }

    onLoadRecaptcha = () => {
        if (this.captchaDemo) {
            this.captchaDemo.reset();
            this.captchaDemo.execute();
        }
    };

    verifyCallback = recaptchaToken => {
        // Here you will get the final recaptchaToken!!!
        console.log(recaptchaToken, '<= your recaptcha token');
        this.setState({ notRobot: true });
    };

    submitForm = data => {
        let uri = !this.state.custom ? 'bookTour' : 'createTour';
        axios({
            url: `https://iau89pgyxf.execute-api.eu-west-1.amazonaws.com/dev/email/${uri}`,
            method: 'POST',
            data: data,
            dataType: 'json',
        })
            .then(response => {
                console.log(response);
                this.setState(({ open }) => ({
                    open: !open,
                }));
            })
            .catch(error => {
                console.log(error);
            });
    };
    handleClose = () => {
        this.setState(({ open }) => ({ open: !open }));
    };

    render() {
        let { custom, notRobot } = this.state; // handle swipe between custom and regular tour
        let tourItem = this.props.location.state && this.props.location.state; //
        let tour = {
            transform: custom && 'translateX(-100%)',
            transition: 'all 300ms ease-out',
        };

        let customTour = {
            transform: custom && 'translateX(-100%)',
            transition: 'transform 300ms ease-out',
        };

        return (
            <div className={'book-now-container'}>
                <ReCaptcha
                    ref={el => {
                        this.captchaDemo = el;
                    }}
                    size="invisible"
                    render="explicit"
                    sitekey="6LdBB3YUAAAAALCGIKE_QOlBRfPl082-xvEyh5ui"
                    onloadCallback={this.onLoadRecaptcha}
                    verifyCallback={this.verifyCallback}
                />
                <Heading mainTitle={'book now'} hasLine style={{ paddingTop: '50px' }} />

                <div className={'book-now'}>
                    <div className={'book-modal book-now-container'}>
                        {/*Forms*/}
                        <div className={'book-modal-wide'} style={{ width: tourItem && '100%' }}>
                            <BookTourForm
                                style={tour}
                                tourItem={tourItem}
                                notRobot={notRobot}
                                selectedTour={tourItem && tourItem.title}
                                submitForm={this.submitForm}
                            />
                            {!tourItem && (
                                <CreateTourForm
                                    style={customTour}
                                    submitForm={this.submitForm}
                                    notRobot={notRobot}
                                />
                            )}
                        </div>

                        {!tourItem && (
                            <div className={'book-now-form-button'}>
                                <div className={'or'}>or</div>
                                <BookButton
                                    onClickAction={() => this.setState(({ custom }) => ({ custom: !custom }))}
                                    buttonText={!custom ? 'Create tour' : 'Return'}
                                    color={'#2edc38'}
                                    // style={{ width: 'calc(100% - 66px)', margin: '20px 8px' }}
                                />
                            </div>
                        )}
                    </div>

                    <GoBookPicture
                        id={'book-now-image'}
                        picture={tourItem && tourItem.picture}
                        containerStyle={{ width: '40%' }}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
                <ConfirmationDialog open={this.state.open} handleClose={this.handleClose} />
            </div>
        );
    }
}

export default BookNow;

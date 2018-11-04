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
import ReceptchaComponent from "../Common/ReceptchaComponent/ReceptchaComponent";

class BookNow extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        custom: false,
        notRobot: false,
    };

    static defaultProps = {};

    static propTypes = {};

    verify = () => this.setState(({notRobot}) => ({notRobot: !notRobot}))

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
                <ReceptchaComponent verify={this.verify}/>
                <Heading mainTitle={'book now'} hasLine style={{ paddingTop: '50px' }} />

                <div className={'book-now'}>
                    <div className={'book-modal book-now-container'} style={{flexBasis:'543px', flexShrink:'1' }}>
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
                                    style={{ width: 'calc(100% - 16px)', margin: '0 8px' }}
                                    // style={{ flexBasis: '100%' }}
                                />
                            </div>
                        )}
                    </div>

                    <GoBookPicture
                        id={'book-now-image'}
                        // picture={'https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/17880063_1329757693736556_8999220361509411303_o.jpg?_nc_cat=111&_nc_ht=scontent-waw1-1.xx&oh=bbcd8fa49055afb2acee57b852f09e71&oe=5C85F354\n'}
                        picture={tourItem && tourItem.picture ? tourItem.picture : 'https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/17880063_1329757693736556_8999220361509411303_o.jpg?_nc_cat=111&_nc_ht=scontent-waw1-1.xx&oh=bbcd8fa49055afb2acee57b852f09e71&oe=5C85F354'}
                        style={{flexBasis:'486px', flexShrink:'1' }}
                    />
                </div>
                <ConfirmationDialog open={this.state.open} handleClose={this.handleClose} />
            </div>
        );
    }
}

export default BookNow;



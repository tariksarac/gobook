import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import CreateTour from '../Tours/CreateTour';
// import CreateCustomTour from '../Tours/CreateCustomTour';
import './BookNow.css';
import '../../components/Common/BookModal/BookModal.css';
import BookTourForm from './BookTourForm/BookTourForm';
import CreateTourForm from './CreateTourForm/CreateTourForm';
import BookButton from '../Common/BookButton/BookButton';
import GoBookPicture from '../Common/GoBookPicture/GoBookPicture';
import Heading from '../Heading/Heading';

class BookNow extends Component {
    constructor(props) {
        super(props);
        // this.myRef = React.createRef();
    }

    componentDidMount() {}
    static defaultProps = {};

    static propTypes = {};

    state = {
        custom: false,
    };

    onSubmitForm = () => {
        this.state.custom && this.createOwnTour.submitForm(); // do stuff
        !this.state.custom && this.selectTour.submitForm(); // do stuff
    };

    render() {
        // let { handleClose, openModal, tourItem } = this.props;
        let { custom } = this.state; // handle swipe between custom and regular tour
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
                <Heading mainTitle={'book now'} hasLine style={{paddingTop: '50px'}}/>

                <div className={'book-now'}>
                    <div className={'book-modal book-now-container'}>
                        {/*Forms*/}
                        <div className={'book-modal-wide'} style={{ width: tourItem && '100%' }}>
                            <BookTourForm
                                style={tour}
                                tourItem={tourItem}
                                onRef={ref => (this.selectTour = ref)}
                                selectedTour={tourItem && tourItem.title}
                            />
                            {!tourItem && (
                                <CreateTourForm
                                    style={customTour}
                                    onRef={ref => (this.createOwnTour = ref)}
                                />
                            )}
                        </div>

                        <BookButton buttonText={'BOOK THIS TOUR'} onClickAction={this.onSubmitForm} />

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
            </div>
        );
    }
}

export default BookNow;

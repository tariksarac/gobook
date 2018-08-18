import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CreateTour from "../Tours/CreateTour";
import CreateCustomTour from "../Tours/CreateCustomTour";
import './BookNow.css'

class BookNow extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        custom: false,
    };

    render() {
        let { handleClose, openModal, tourItem } = this.props;
        let { custom } = this.state;

        let tour = {
            transform: custom && 'translateX(-100%)',
            transition: 'all 300ms ease-out',
        };

        let customTour = {
            transform: custom && 'translateX(-100%)',
            transition: 'transform 300ms ease-out',
        };

        const backgroundStyle = {
            background: 'url("//images.ctfassets.net/0o22ljw5du6a/2B2befRnTSqKYYaQM0wyAM/35ce0134483f5b0135373107219c3405/BANER.jpg")',
            width:'40%',
            height:'461px'
        }
        return (
            <div className={'book-now'}>
                <div className={'book-now-image'}>
                </div>
                <div className={'book-modal book-now-container'}>
                    <div className={'book-modal-wide'} style={{ width: tourItem && '100%' }}>
                        <CreateTour style={tour} tourItem={tourItem} />
                        {!tourItem && <CreateCustomTour style={customTour} />}
                    </div>
                    {!tourItem && (
                        <div>
                            <div className={'or'}>or</div>
                            <div
                                className={'action-link'}
                                onClick={() => this.setState(({ custom }) => ({ custom: !custom }))}>
                                {!custom ? ' TRy Create your tour' : 'Return'}
                            </div>
                            {/*<BookButton buttonText={!custom ? 'Create tour' : 'Return'}/>*/}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default BookNow;

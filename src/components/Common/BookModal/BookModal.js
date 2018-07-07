import React from 'react';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import './BookModal.css';

const overlay = {
    backgroundColor: 'rgba(16, 19, 21, 0.7)',
    zIndex: '1001',
};

export const customStyles = {
    content: {
        position: 'absolute',
        padding: 0,
        border: 0,
        width: '60%',
        overflow: 'hidden',
        backgroundColor: 'unset',
        left: '50%',
        top: '50%',
        right: 'auto',
        bottom: 'auto',
        // padding: '35px 50px 40px 50px',
        // boxSizing:'border-box',
        // border: '1px solid #ee3029',
        borderRadius: '10px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        // display: 'flex',
        // flexDirection: 'column',
        textAlign: 'center',
    },
    overlay: overlay,
};

class BookModal extends React.Component {
    state = {
        custom: false,
    };

    render() {
        let { handleClose, openModal } = this.props;
        let { custom } = this.state;

        let transitionStyle = {
            // left: custom && '-50%',
            // transform: custom && 'scale(0.9) translateX(50%)',
            // transition: 'all 3000ms ease-out'
        };

        let tour = {
            transform: custom && 'translateX(-100%)',
            transition: 'all 300ms ease-out',
        };

        let customTour = {
            transform: custom && 'translateX(-100%)',
            transition: 'transform 300ms ease-out',
        };
        return (
            <div className={'book-modal-container'}>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={openModal}
                    onClose={handleClose}>
                    <div style={customStyles} className={'book-modal'}>
                        <div className={'book-modal-wide'}>
                            <CreateTour style={tour} />
                            <CreateCustomTour style={customTour} />
                        </div>
                        <div
                            className={'action-link'}
                            onClick={() => this.setState(({ custom }) => ({ custom: !custom }))}>
                            {!custom ? 'Try create tour' : 'Return'}
                        </div>
                    </div>
                </Modal>

            </div>

        );
    }
}

BookModal.propTypes = {};
BookModal.defaultProps = {};

export default BookModal;

const CreateTour = ({ style }) => {
    return (
        <div className={'create-tour'} style={{ ...style }}>
            <Typography id="modal-title" align={'center'} variant={'headline'} className={'headline-modal'}>
                Choose a tour
            </Typography>
            <form name="BookModal" method="POST" data-netlify="true" action={'/'}>
                <select placeholder={'Select tour'}>
                    <option>Sarajevo-Mostar</option>
                    <option>Sarajevo-Jajce-Mostar</option>
                    <option>Sarajevo-Jajce</option>
                </select>
                <input id={'firstName'} placeholder={'First Name'} type={'text'} name={'First Name'} />
                <input id={'surname'} placeholder={'Last Name'} type={'text'} name={'Last Name'} />
                <input id={'number'} placeholder={'Number of people'} type={'number'} name={'Number'} />
                <input id={'date'} placeholder={'Date'} type={'date'} name={'Date'} />
                <input id={'country'} placeholder={'Country'} type={'text'} name={'Country'} />
                <input type="submit" value="Book" style={{ width: '100%' }} />
            </form>
        </div>
    );
};

const CreateCustomTour = ({ style }) => {
    return (
        <div className={'create-custom-tour'} style={{ ...style }}>
            <Typography id="modal-title" align={'center'} variant={'headline'} className={'headline-modal'}>
                Create your own tour
            </Typography>
            <form>
                <input id={'firstName'} placeholder={'First Name'} type={'text'} name={'First Name'} />
                <input id={'surname'} placeholder={'Last Name'} type={'text'} name={'Last Name'} />
                <input id={'number'} placeholder={'Number of people'} type={'number'} name={'Number'} />
                <input id={'date'} placeholder={'Start Date'} type={'date'} name={'Date'} />
                <input id={'date'} placeholder={'End Date'} type={'date'} name={'Date'} />
                <input id={'place'} placeholder={'Place to visit'} type={'text'} name={'Place'} />
                <input id={'country'} placeholder={'Country'} type={'text'} name={'Country'} />
                <input type="submit" value="Book" style={{ width: '100%' }} />
            </form>
        </div>
    );
};

import React from 'react';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import './BookModal.css';
import BookButton from "../BookButton/BookButton";
import CreateCustomTour from "../../Tours/CreateCustomTour";
import CreateTour from "../../Tours/CreateTour";


// const overlay = {
//     backgroundColor: 'rgba(16, 19, 21, 0.7)',
//     zIndex: '1001',
// };

// export const customStyles = {
//     content: {
//         position: 'absolute',
//         padding: 0,
//         border: 0,
//         width: '60%',
//         overflow: 'hidden',
//         backgroundColor: 'unset',
//         left: '50%',
//         top: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         // padding: '35px 50px 40px 50px',
//         // boxSizing:'border-box',
//         // border: '1px solid #ee3029',
//         borderRadius: '10px',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//         // display: 'flex',
//         // flexDirection: 'column',
//         textAlign: 'center',
//     },
//     overlay: overlay,
// };

class BookModal extends React.Component {
    state = {
        custom: false,
    };

    render() {
        let { handleClose, openModal, tourItem } = this.props;
        let { custom } = this.state;

        // let transitionStyle = {
        //     // left: custom && '-50%',
        //     // transform: custom && 'scale(0.9) translateX(50%)',
        //     // transition: 'all 3000ms ease-out'
        // };

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
                    <div className={'book-modal'}>
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
                </Modal>
            </div>
        );
    }
}

BookModal.propTypes = {};
BookModal.defaultProps = {};

export default BookModal;





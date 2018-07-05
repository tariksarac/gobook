import React from 'react';
import Modal from '@material-ui/core/es/Modal/Modal';
import Typography from '@material-ui/core/es/Typography/Typography';
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

const BookModal = ({ handleClose, openModal }) => {
    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={openModal}
            onClose={handleClose}>
            <div style={customStyles} className={'book-modal'}>
                <Typography  id="modal-title" align={'center'} variant={'headline'} className={'headline-modal'}>
                   Choose a tour
                </Typography>
                <form>
                    <select defaultValue={2}>
                        <option>Sarajevo-Mostar</option>
                        <option>Sarajevo-Jajce-Mostar</option>
                        <option>Sarajevo-Jajce</option>
                    </select>
                    <input id={'firstName'} placeholder={'First Name'} type={'text'} name={'First Name'} />
                    <input id={'surname'} placeholder={'Last Name'} type={'text'} name={'Last Name'} />
                    <input id={'number'} placeholder={'Number of people'} type={'number'} name={'Number'} />
                    <input id={'date'} placeholder={'Date'} type={'date'} name={'Date'} />
                    <input id={'country'} placeholder={'Country'} type={'text'} name={'Country'} />
                    <input type="submit" value="Book" style={{width:'100%'}}/>
                </form>
            </div>
        </Modal>
    );
};

BookModal.propTypes = {};
BookModal.defaultProps = {};

export default BookModal;

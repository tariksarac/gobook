import React from 'react';
import Modal from '@material-ui/core/Modal';
import './BookModal.css';
import CreateCustomTour from '../../Tours/CreateCustomTour';
import CreateTour from '../../Tours/CreateTour';

class BookModal extends React.Component {
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
    return (
      <div className={'book-modal-container'}>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={openModal}
          onClose={handleClose}
        >
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
                  onClick={() => this.setState(({ custom }) => ({ custom: !custom }))}
                >
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

import React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";

const ConfirmationDialog = ({open, handleClose, confirmationTitle, confirmationContent}) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description" >
            <DialogTitle id="alert-dialog-title" style={{textAlign: 'center', paddingTop:'100px'}}>{confirmationTitle}</DialogTitle>
            <DialogContent style={{width: '250px', height: '50px', textAlign: 'center'}}>
                <DialogContentText id="alert-dialog-description">
                    {confirmationContent}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

ConfirmationDialog.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    confirmationTitle: PropTypes.string,
    confirmationContent: PropTypes.string
};
ConfirmationDialog.defaultProps = {
    open: false,
    handleClose: () => {},
    confirmationTitle: 'Thank you!',
    confirmationContent: 'We will contact you soon.'
};

export default ConfirmationDialog;

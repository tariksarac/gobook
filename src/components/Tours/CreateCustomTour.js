import React from 'react'
// import TextField from '@material-ui/core/TextField';
// import { withStyles } from '@material-ui/core/styles';
import BookButton from "../Common/BookButton/BookButton";
import Typography from '@material-ui/core/Typography';



// const styles = theme => ({
//     textField: {
//         fontSize: '16px',
//         width: '100%'
//     },
//     colorPrimary: {
//         color: 'red' // Replace with your own color
//     },
//     uppercase: {
//         textTransform: 'uppercase'
//     },
//     inputField: {
//         '&:after': {
//             backgroundColor: 'blue'
//         }
//     }
// });

const CreateCustomTour = ({ style }) => {
    return (
        <div className={'create-custom-tour'} style={{ ...style }}>
            <Typography id="modal-title" align={'center'} variant={'headline'} className={'headline-modal'}>
                Create your own tour
            </Typography>
            <form action="https://formspree.io/tarik.sarac@gmail.com" method="POST" name={'CreateCustomTour'}>
                <input id={'firstName'} placeholder={'First Name'} type={'text'} name={'First Name'} />
                {/*<TextField*/}
                    {/*id="firstName"*/}
                    {/*label="First Name"*/}
                    {/*type="text"*/}
                    {/*className={''}*/}
                    {/*InputLabelProps={{*/}
                        {/*shrink: true,*/}
                    {/*}}*/}
                {/*/>*/}
                <input id={'surname'} placeholder={'Last Name'} type={'text'} name={'Last Name'} />
                <input id={'number'} placeholder={'Number of people'} type={'number'} name={'Number'} />
                <input id={'date'} placeholder={'Start Date'} type={'date'} name={'Date'} />
                <input id={'date'} placeholder={'End Date'} type={'date'} name={'Date'} />
                {/*<TextField*/}
                    {/*id="start-date"*/}
                    {/*label="Start Date"*/}
                    {/*type="date"*/}
                    {/*defaultValue="2017-05-24"*/}
                    {/*className={'date-field'}*/}
                    {/*InputLabelProps={{*/}
                        {/*inputField: {*/}
                            {/*'&:after': {*/}
                                {/*backgroundColor: 'red'*/}
                            {/*}*/}
                        {/*},*/}
                        {/*label: {*/}
                            {/*display: 'none'*/}
                        {/*}*/}
                    {/*}}*/}
                    {/*margin="normal"*/}
                    {/*InputProps={{disableUnderline: true}}*/}
                    {/*FormLabelProps={{*/}
                        {/*disabled:true*/}
                    {/*}}*/}
                {/*/> <TextField*/}
                {/*id="end-date"*/}
                {/*label="End Date"*/}
                {/*type="date"*/}
                {/*defaultValue="2017-05-24"*/}
                {/*className={''}*/}
                {/*InputLabelProps={{*/}
                    {/*shrink: true,*/}
                {/*}}*/}
            {/*/>*/}
                <input id={'place'} placeholder={'Place to visit'} type={'text'} name={'Place'} />
                <input id={'country'} placeholder={'Where are you from'} type={'text'} name={'Country'} />
                <BookButton type={"submit"} value="Book" buttonText={"Book"} style={{ width: '100%', height:'35px' }} />
            </form>
        </div>
    );
};

export default CreateCustomTour

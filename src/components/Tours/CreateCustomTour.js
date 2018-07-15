import React from 'react'
import BookButton from "../Common/BookButton/BookButton";
import Typography from '@material-ui/core/Typography';

const CreateCustomTour = ({ style }) => {
    const onFocus = (event) => {
        console.log(event.target)
    }
    return (
        <div className={'create-custom-tour'} style={{ ...style }}>
            <Typography id="modal-title" align={'center'} variant={'headline'} className={'headline-modal'}>
                Create your own tour
            </Typography>
            <form action="https://formspree.io/tarik.sarac@gmail.com" method="POST" name={'CreateCustomTour'}>
                <input id={'firstName'} placeholder={'First Name'} type={'text'} name={'First Name'} />
                <input id={'surname'} placeholder={'Last Name'} type={'text'} name={'Last Name'} />
                <input id={'number'} placeholder={'Number of people'} type={'number'} name={'Number'} />
                <input id={'place'} placeholder={'Place to visit'} type={'text'} name={'Place'} />
                {/*<input id={'date'} placeholder={'Start Date'} type={'date'} name={'Date'} />*/}
                {/*<input id={'date'} placeholder={'End Date'} type={'date'} name={'Date'} />*/}
                <input placeholder="Start Date" className="textbox-n" type="text" onFocus={(e) => e.target.type='date'}
                       onBlur={(e) => e.target.type='text'} id="start-date"/>
                <input placeholder="End Date" className="textbox-n" type="text" onFocus={(e) => e.target.type='date'}
                       onBlur={(e) => e.target.type='text'} id="end-date"/>


                <input id={'country'} placeholder={'Where are you from'} type={'text'} name={'Country'} />
                <BookButton type={"submit"} value="Book" buttonText={"Book"} style={{ width: '100%', height:'35px' }} />
            </form>
        </div>
    );
};

export default CreateCustomTour

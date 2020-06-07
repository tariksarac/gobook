import React from 'react';
import BookButton from '../Common/BookButton/BookButton';
import Typography from '@material-ui/core/Typography/Typography';
import BookFormInput from '../BookNow/BookFormInput/BookFormInput';

const CreateTour = ({ style, tourItem }) => {
  let selectedTour = tourItem ? tourItem.title : null;
  const options = [
    'Select your option',
    'THE BEST OF BOSNIA & HERZEGOVINA TOUR',
    'BEST OF BOSNIA',
    'BOSNIA & HERZEGOVINA INTRO TOUR',
    'DAILY TOUR IN MOSTAR AND POČITELJ',
    'DAY TOUR IN VISOKO',
    'DAY TOUR IN TRAVNIK AND JAJCE',
    'HOSSZÚ HÉTVÉGE BOSZNIÁBAN',
  ];

  return (
    <div className={'create-tour'} style={{ ...style }}>
      {/*<Typography id="modal-title" align={'center'} variant={'headline'} className={'headline-modal'}>*/}
      {/*{tourItem ? tourItem.title : 'Choose a tour'}*/}
      {/*</Typography>*/}
      {/*<form action="https://formspree.io/info@gobook.ba" method="POST" name={'CreateTour'}>*/}
      {/*<input type="hidden" name="_subject" value="New submission !" />*/}
      {/*<input type="hidden" name="_cc" value="tarik.sarac@gmail.com" />*/}
      {/*<select disabled={!!tourItem} name={'tour'} id={'tour'}>*/}
      {/*{options.map((item, index) => <option key={index} value={item} selected={item === selectedTour}>{item}</option>)}*/}
      {/*</select>*/}
      {/*<input id={'firstName'} placeholder={'First Name'} type={'text'} name={'First Name'} />*/}
      {/*<input id={'surname'} placeholder={'Last Name'} type={'text'} name={'Last Name'} />*/}
      {/*<input id={'phoneNumber'} placeholder={'Phone Number'} type={'tel'} name={'Phone Number'} />*/}
      {/*<input id={'email'} placeholder={'Email'} type={'email'} name={'_replyto'} />*/}
      {/*<input id={'number'} placeholder={'Number of people'} type={'number'} name={'Number'} />*/}
      {/*/!*<input placeholder="Date" type="text" onFocus="this.type='date';*!/*/}
      {/*/!*this.setAttribute('onfocus','');this.blur();this.focus();"/>*!/*/}

      {/*<input id={'date'} type={'date'} name={'Date'} placeholder={'Date'}  />*/}
      {/*/!*<input placeholder="Select Date" className="textbox-n" type="text" onFocus={(e) => selectDate.current.setAttribute.type='date'}*!/*/}
      {/*/!*onBlur={(e) => selectDate.setAttribute.type='text'} id="select-date" ref={selectDate}/>*!/*/}
      {/*<input id={'country'} placeholder={'Where are you from'} type={'text'} name={'Country'} />*/}

      <BookFormInput
        name={'ToUR NAME'}
        placeholder={'Bosnia and Herzegovina Intro Tour'}
        fullWidth
      />
      <BookFormInput
        name={'First name'}
        placeholder={'First name'}
        customStyle={{ width: '50%' }}
      />
      <BookFormInput name={'Last name'} placeholder={'Last name'} customStyle={{ width: '50%' }} />
      <BookFormInput name={'Phone number'} placeholder={'Phone number'} />
      <BookFormInput name={'Email'} placeholder={'Email'} />
      <BookFormInput name={'Number of people'} placeholder={'Number of people'} fullWidth />
      <BookFormInput name={'Date'} placeholder={'Date'} />
      <BookFormInput name={'Where are you from'} placeholder={'Where are you from'} />
      <BookButton
        type={'submit'}
        value="Book"
        buttonText={'Book'}
        style={{ width: '100%', height: '35px' }}
      />
      {/*</form>*/}
    </div>
  );
};

export default CreateTour;

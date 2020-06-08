import React from 'react';
import BookButton from '../Common/BookButton/BookButton';
import BookFormInput from '../BookNow/BookFormInput/BookFormInput';

const CreateTour = ({ style }) => {
  return (
    <div className={'create-tour'} style={{ ...style }}>
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
    </div>
  );
};

export default CreateTour;

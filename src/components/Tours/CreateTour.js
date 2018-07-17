import React from 'react'
import BookButton from "../Common/BookButton/BookButton";
import Typography from "@material-ui/core/Typography/Typography";

const CreateTour = ({ style, tourItem }) => {
    let selectedTour = tourItem ? tourItem.title : null;

    return (
        <div className={'create-tour'} style={{ ...style }}>
            <Typography id="modal-title" align={'center'} variant={'headline'} className={'headline-modal'}>
                {tourItem ? selectedTour : 'Choose a tour'}
            </Typography>
            <form action="https://formspree.io/tarik.sarac@gmail.com" method="POST" name={'CreateTour'}>
                <input type="hidden" name="_subject" value="New submission !" />
                <select disabled={!!tourItem} name={'tour'} id={'tour'}>
                    <option value={'Not selected'}>Select your option</option>
                    <option
                        selected={selectedTour==='THE BEST OF BOSNIA & HERZEGOVINA TOUR'}
                        value={'THE BEST OF BOSNIA & HERZEGOVINA TOUR'}>
                        THE BEST OF BOSNIA & HERZEGOVINA TOUR
                    </option>
                    <option value={'BEST OF BOSNIA'} >
                        BEST OF BOSNIA
                    </option>
                    <option
                        value={'BOSNIA & HERZEGOVINA INTRO TOUR'}
                    >
                        BOSNIA & HERZEGOVINA INTRO TOUR
                    </option>
                </select>
                <input id={'firstName'} placeholder={'First Name'} type={'text'} name={'First Name'} />
                <input id={'surname'} placeholder={'Last Name'} type={'text'} name={'Last Name'} />
                <input id={'email'} placeholder={'Email'} type={'email'} name={'_replyto'} />
                <input id={'number'} placeholder={'Number of people'} type={'number'} name={'Number'} />
                {/*<input placeholder="Date" type="text" onFocus="this.type='date';*/}
                {/*this.setAttribute('onfocus','');this.blur();this.focus();"/>*/}

               <input id={'date'} type={'date'} name={'Date'} placeholder={'Date'}  />
                {/*<input placeholder="Select Date" className="textbox-n" type="text" onFocus={(e) => selectDate.current.setAttribute.type='date'}*/}
                {/*onBlur={(e) => selectDate.setAttribute.type='text'} id="select-date" ref={selectDate}/>*/}
                <input id={'country'} placeholder={'Where are you from'} type={'text'} name={'Country'} />
                <BookButton type={"submit"} value="Book" buttonText={"Book"} style={{ width: '100%', height:'35px' }} />
            </form>
        </div>
    );
};

export default CreateTour
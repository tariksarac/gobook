import React from 'react'
import BookButton from "../Common/BookButton/BookButton";
import Typography from '@material-ui/core/Typography';

class CreateCustomTour extends React.Component {
    // state = {
    //     inputType: 'text'
    // }
    // _onFocus = (event) => {
    //    this.setState({ inputType: 'date'})
    // }
    // _onBlur = (event) => {
    //    this.setState({ inputType: 'text'})
    // }

    render(){
        const {style} = this.props
        return (
            <div className={'create-custom-tour'} style={{ ...style }}>
                <Typography id="modal-title" align={'center'} variant={'headline'} className={'headline-modal'}>
                    Create your own tour
                </Typography>
                <form action="https://formspree.io/gobook@gobook.ba" method="POST" >
                    <input type="hidden" name="_subject" value="New submission from custom tour!" />
                    <input type="hidden" name="_cc" value="tarik.sarac@gmail.com" />
                    <input id={'fullName'} placeholder={'Full Name'} type={'text'} name={'Full Name'} />
                    <input id={'email'} placeholder={'Email'} type={'email'} name={'_replyto'} />
                    <input id={'number'} placeholder={'Number of people'} type={'number'} name={'Number'} />
                    <input id={'place'} placeholder={'Place to visit'} type={'text'} name={'Place'} />
                    <input id={'date'} placeholder={'Start Date'} type={'date'} name={'Date'} />
                    <input id={'date'} placeholder={'End Date'} type={'date'} name={'Date'} />
                    {/*<input placeholder="Start Date" className="textbox-n" type={this.state.inputType} onFocus={() => this._onFocus()}*/}
                           {/*onBlur={()=>this._onBlur()} id="start-date"/>*/}
                    {/*<input placeholder="End Date" className="textbox-n" type="text" onFocus={(e) => e.target.type='date'}*/}
                           {/*onBlur={(e) => e.target.type='text'} id="end-date"/>*/}


                    <input id={'country'} placeholder={'Where are you from'} type={'text'} name={'Country'} />
                    <BookButton type={"submit"} value="Book" buttonText={"Book"} style={{ width: '100%', height:'35px' }} />
                </form>
            </div>
        );
    }


};

export default CreateCustomTour

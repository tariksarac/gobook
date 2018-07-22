import React, { Component } from 'react';
import BookButton from '../Common/BookButton/BookButton';
import { withRouter } from 'react-router-dom';
import FeaturedPicture from '../FeaturedPicture/FeaturedPicture';
import Heading from '../Heading/Heading';
import ProductsContainer from '../Product/ProductsContainer';
import {
    about,
    stariMostNaslovna,
    mainHeading,
    mainSubheading,
    lastSubHeading,
    offer, whyBosniaIntro, jajceVodopadStarigrad,
} from '../../constants/constants';
import { tours } from '../../constants/constants';
import BookModal from '../Common/BookModal/BookModal';

const whiteBackground = {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    fontSize: '34px',
};

export const customStyle = {
    alignItems: 'center',
    fontSize: '34px',
};

class LandingPage extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        modalOpen: false,
    };

    bookAction = () => {
        this.setState(({ modalOpen }) => ({ modalOpen: !modalOpen }));
    };

    render() {
        return (
            <div className={'App-main'}>
                <FeaturedPicture
                    title={mainHeading}
                    subTitle={mainSubheading}
                    picture={'https://images.ctfassets.net/0o22ljw5du6a/6ag1DNKk00kGSymkQuwmsa/2759a7e9ef9f2fdc391c642c89310e9b/bosnia-2058087_1280.jpg'}
                />
                <Heading heading={'Take a break and relax'} line subTitle={about} style={customStyle} />
                <Heading heading={'What to expect'} line subTitle={whyBosniaIntro } style={whiteBackground} />
                <Heading heading={'Go Book'} line subTitle={offer} />
                <ProductsContainer products={tours} />
                <Heading subTitle={lastSubHeading} line style={customStyle} />
                <BookButton onClickAction={this.bookAction} buttonText={'Book'}/>
                <BookModal handleClose={this.bookAction} openModal={this.state.modalOpen} />
            </div>
        );
    }
}

export default withRouter(LandingPage);

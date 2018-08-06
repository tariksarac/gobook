import React, { Component } from 'react';
import BookButton from '../Common/BookButton/BookButton';
import { withRouter } from 'react-router-dom';
import FeaturedPicture from '../FeaturedPicture/FeaturedPicture';
import Heading from '../Heading/Heading';
import ProductsContainer from '../Product/ProductsContainer';
import {
    about,
    mainHeading,
    mainSubheading,
    lastSubHeading,
    offer, whyBosniaIntro,
} from '../../constants/constants';
import { tours } from '../../constants/constants';
import BookModal from '../Common/BookModal/BookModal';
import * as contentful from 'contentful'


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

    client = contentful.createClient({
        space: '0o22ljw5du6a',
        accessToken: '88d7f6c70a9105568ed603450cf5e40de480c622b02fe861a3381c6b5f7970a5'
    })

    componentDidMount() {
        this.fetchLandingPageData().then(this.setLandingPage);
    }

    fetchLandingPageData = query => this.client.getEntries({'content_type': 'landingPage', include: 2})

    setLandingPage = response => {
        this.setState({
            landingPageData: response.items
        })
    }

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
                <Heading heading={'What to expect'} line subTitle={whyBosniaIntro } style={whiteBackground} absolute/>
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

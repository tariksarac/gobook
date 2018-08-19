import React, { Component } from 'react';
import BookButton from '../Common/BookButton/BookButton';
import FeaturedPicture from '../FeaturedPicture/FeaturedPicture';
import Heading from '../Heading/Heading';
import ProductsContainer from '../Product/ProductsContainer';
import BookModal from '../Common/BookModal/BookModal';
import * as contentful from 'contentful';
import { mapLandingPage, mapPageCards } from '../../utils/mapContentfulData';

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
        headings: [],
        featuredImage: {},
        cardsData:[]
    };

    client = contentful.createClient({
        space: '0o22ljw5du6a',
        accessToken: '88d7f6c70a9105568ed603450cf5e40de480c622b02fe861a3381c6b5f7970a5',
    });

    componentDidMount() {
        this.fetchLandingPageData().then(this.setLandingPage);
        this.fetchLandingPageCards().then(this.setPageCards);
    }

    fetchLandingPageData = query => this.client.getEntries({ content_type: 'landingPage', include: 2 });
    fetchLandingPageCards = query =>
        this.client.getEntries({
            content_type: 'tour',
            include: 2,
            select:
                'sys.id,fields.id,fields.title,fields.oneDayTour,fields.tourCardPicture,fields.shortDescription,fields.price,fields.duration',
        });

    setLandingPage = response => {
        let mappedData = mapLandingPage(response);
        this.setState({
            headings: mappedData.headings,
            featuredImage: mappedData.featuredImageData,
        });
    };

    setPageCards = response => {
        let mappedData = mapPageCards(response);
        this.setState({
            cardsData: mappedData,
        });
    };

    bookAction = () => {
        this.props.history.push('/book-now')
        // this.setState(({ modalOpen }) => ({ modalOpen: !modalOpen }));
    };

    render() {
        let {featuredImage, headings, cardsData, modalOpen} = this.state
        return (
            <div className={'App-main'}>
                <FeaturedPicture {...featuredImage} />
                <Heading {...headings[0]} style={customStyle} />
                <Heading {...headings[1]} style={whiteBackground} absolute />
                <Heading {...headings[2]} />
                <ProductsContainer products={cardsData.filter(item => !item.oneDayTour)} />
                <Heading {...headings[3]} style={customStyle} />
                <ProductsContainer products={cardsData.filter(item => item.oneDayTour)} />
                <Heading {...headings[4]} style={customStyle} />
                <BookButton onClickAction={this.bookAction} buttonText={'Book'} />
                {/*<BookModal handleClose={this.bookAction} openModal={modalOpen} />*/}
            </div>
        );
    }

    fetchLandingPageCards() {}
}

export default LandingPage;

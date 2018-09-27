import React, { Component } from 'react';
import BookButton from '../Common/BookButton/BookButton';
import FeaturedPicture from '../FeaturedPicture/FeaturedPicture';
import Heading from '../Heading/Heading';
import ProductsContainer from '../Product/ProductsContainer';
import * as contentful from 'contentful';
import { mapLandingPage, mapPageCards } from '../../utils/mapContentfulData';
import HeroImage from "../HeroImage/HeroImage";
import ColoredHeading from "../Common/ColoredHeading/ColoredHeading";
import HeadingSection from "../Common/HeadingSection/HeadingSection";
import HeadingContainer from "../Common/HeadingSection/HeadingContainer";

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
    };

    render() {
        let {featuredImage, headings, cardsData} = this.state
        return (
            <div className={'App-main'}>
                <HeroImage picture={require('../../images/clouds-conifer-daylight-371589.jpg')}>
                    <ColoredHeading heading={'The best of Bosnia and Herzegovina Tours'} color={'#33a3fc'}/>
                    <ColoredHeading subheading={'Experience the incredible Bosnia and Herzegovina'} color={'#2edc38'}/>
                </HeroImage>
                {/*<FeaturedPicture {...featuredImage} notShadow/>*/}
                <HeadingContainer>
                    <Heading {...headings[0]}  style={{maxWidth:'490px' }}/>
                    <Heading {...headings[1]}  style={{maxWidth:'490px' }}/>
                </HeadingContainer>
                {/*<Heading {...headings[1]} style={whiteBackground} absolute />*/}
                <ProductsContainer products={cardsData.filter(item => !item.oneDayTour)} />
                {/*/!*<Heading {...headings[2]} />*!/*/}
                {/*<Heading {...headings[3]} style={customStyle} />*/}
                {/*<ProductsContainer products={cardsData.filter(item => item.oneDayTour)} />*/}
                {/*<Heading {...headings[4]} style={customStyle} />*/}
                {/*<BookButton onClickAction={this.bookAction} buttonText={'Book'} />*/}
                {/*<Heading*/}
                    {/*style={{...whiteBackground, marginBottom:'20px'}}*/}
                    {/*mainTitle={'Hungary special promo'}*/}
                    {/*subTitle={'Ha a kiindulási pont Magyarország ellenőrizze ezt az ajánlatot'}*/}
                    {/*hasLine*/}
                {/*>*/}
                    {/*<BookButton onClickAction={() => this.props.history.push('/hungary-special')} buttonText={'Ellenőrizd'} />*/}
                {/*</Heading>*/}
                {/*<FeaturedPicture  picture={'https://images.ctfassets.net/0o22ljw5du6a/3xCDg4osKAK8AuYMcyC2U4/4346f8f676cdc60505b59083d648eb01/3.jpg'} notShadow />*/}
            </div>
        );
    }

    fetchLandingPageCards() {}
}

export default LandingPage;

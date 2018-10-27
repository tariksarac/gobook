import React, { Component } from 'react';
import BookButton from '../Common/BookButton/BookButton';
import Heading from '../Heading/Heading';
import ProductsContainer from '../Product/ProductsContainer';
import * as contentful from 'contentful';
import { mapLandingPage, mapPageCards } from '../../utils/mapContentfulData';
import HeroImage from "../HeroImage/HeroImage";
import ColoredHeading from "../Common/ColoredHeading/ColoredHeading";
import HeadingContainer from "../Common/HeadingSection/HeadingContainer";
import GoBookPicture from "../Common/GoBookPicture/GoBookPicture";

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
        let { headings, cardsData} = this.state
        return (
            <div className={'App-main'}>
                    {/*Hero*/}
                    <HeroImage picture={'https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/18595178_1373124796066512_5607472245182435602_o.jpg?_nc_cat=103&_nc_ht=scontent-waw1-1.xx&oh=83fee3c26da6baafc0000bc06b6b3d7f&oe=5C426A67'} >
                        <ColoredHeading heading={'The best of Bosnia and Herzegovina Tours'} color={'#33a3fc'}/>
                        <ColoredHeading subheading={'Experience the incredible Bosnia and Herzegovina'} color={'#2edc38'}/>
                    </HeroImage>
                    {/*Relax heading, Go Book Heading*/}
                    <HeadingContainer >
                        <Heading {...headings[0]}  style={{flexBasis:'45%', flexShrink:'1' }}/>
                        <Heading {...headings[1]}  style={{flexBasis:'45%', flexShrink:'1'  }}/>
                    </HeadingContainer>
                    {/*Tours*/}
                    <ProductsContainer products={cardsData.filter(item => !item.oneDayTour)} />
                    {/*WHAT TO EXPECT*/}
                    <HeadingContainer >
                        <GoBookPicture style={{flexBasis:'45%', flexShrink:'1' }} picture={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/38534401_1850358535009800_8792306351406579712_o.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=9046110a9aa5206b4a54959ab8be8ea0&oe=5C7F44BB'}/>
                        <Heading {...headings[2]}  style={{flexBasis:'45%', flexShrink:'1' }}/>
                    </HeadingContainer>
                    {/*CHECK OUR DAY*/}
                    <Heading {...headings[3]} id={'check-tour'}/>
                    <ProductsContainer products={cardsData.filter(item => item.oneDayTour)} />
                    {/*agency’s goal*/}
                    <HeadingContainer >
                        <Heading {...headings[4]}  style={{flexBasis:'45%', flexShrink:'1' }} mainTitle={'GO BOOK'}>
                            <BookButton buttonText={'BOOK NOW!'} onClickAction={this.bookAction}/>
                        </Heading>
                        <GoBookPicture style={{flexBasis:'45%', flexShrink:'1' }} picture={require('../../images/GoBook.png')}/>
                    </HeadingContainer>
                    {/*HUNGARY SPECIAL*/}
                    <HeadingContainer id={"hungary-special"}>
                        <GoBookPicture style={{flexBasis:'45%', flexShrink:'1' }} picture={'https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/13502966_10153446752356920_963416707660048003_o.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=c7ad1407d6a94d4c41be5429375bc945&oe=5C82D318'}/>
                        <Heading
                        style={{flexBasis:'45%', flexShrink:'1' }}
                        mainTitle={'Hungary special promo'}
                        subTitle={'Ha a kiindulási pont Magyarország ellenőrizze ezt az ajánlatot'}
                        hasLine
                        >
                            <BookButton onClickAction={() => this.props.history.push('/hungary-special')} buttonText={'Ellenőrizd'}/>
                        </Heading>
                    </HeadingContainer>

            </div>
        );
    }

    fetchLandingPageCards() {}
}

export default LandingPage;



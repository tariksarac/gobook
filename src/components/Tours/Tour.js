import React from 'react';
import './Tour.css';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import Heading from '../Heading/Heading';
import Highlights from '../Highlights/Highlights';
import Itinerary from '../Itinerary/Itinerary';
import BookButton from '../Common/BookButton/BookButton';
import * as contentful from 'contentful';
import { mapTourData } from '../../utils/mapContentfulData';
import { Helmet } from 'react-helmet';
import HeadingContainer from '../Common/HeadingSection/HeadingContainer';
import Line from '../Common/Line/Line';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import GoBookPicture from '../Common/GoBookPicture/GoBookPicture';

class Tour extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showImageControl: false,
      modalOpen: false,
      tourData: {
        headings: [],
        highlights: [],
        gallery: [],
        itinerary: [],
        included: '',
        notIncluded: '',
        tourDetail: '',
        id: '',
        title: '',
      },
    };

    this.client = contentful.createClient({
      space: '0o22ljw5du6a',
      accessToken: '88d7f6c70a9105568ed603450cf5e40de480c622b02fe861a3381c6b5f7970a5',
    });
  }

  componentDidMount() {
    this.fetchSingleTour().then(this.setTourData);
  }

  fetchSingleTour = (query) =>
    this.client.getEntries({
      content_type: 'tour',
      'sys.id': `${this.props.match.params.name}`,
      include: 2,
    });

  setTourData = (response) => {
    let mappedData = mapTourData(response);
    this.setState({
      tourData: mappedData,
    });
  };

  bookAction = () => {
    this.props.history.push('/book-now', {
      id: this.state.tourData.id,
      title: this.state.tourData.title,
      picture: this.state.tourData.tourCardPicture,
    });
  };

  render() {
    let {
      headings,
      highlights,
      gallery,
      itinerary,
      included,
      notIncluded,
      tourDetail,
      tourCardPicture,
      title,
    } = this.state.tourData;
    // let width =
    //   window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // let tourItem = tours.find(item => item.name === this.props.match.params.name) || {};
    return (
      <div className={'Tour'}>
        <Helmet>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content={'http://www.gobook.ba/' + this.props.location.pathname}
          />
          <meta property="og:image" content={'https:' + tourCardPicture} />
          <meta property="og:description" content={title} />
          <meta property="og:site_name" content="Go Book" />
          <meta name="fragment" content="!" />
        </Helmet>
        {/*<HeadingContainer>*/}
        <Heading
          {...headings[0]}
          hasLine
          style={{ marginBottom: '0', gridColumnStart: 2, gridColumnEnd: 9, marginTop: '50px' }}
        />
        <HeadingContainer style={{ flexDirection: 'column', marginBottom: '0' }}>
          <Carousel
            showThumbs={false}
            transitionTime={350}
            autoPlay={true}
            className={'carousel'}
            showStatus={false}
            infiniteLoop={true}
          >
            {gallery &&
              gallery.map((item, index) => (
                <div key={index}>
                  <img src={item.original} alt={''}/>
                </div>
              ))}
          </Carousel>
          <Line full />
        </HeadingContainer>

        {highlights.length > 0 && <Highlights highlights={highlights} />}
        <Line
          full
          color={'#dedede'}
          style={{ gridColumnStart: 1, gridColumnEnd: 10, height: '1px' }}
        />
        {itinerary.length > 0 && <Itinerary data={itinerary} itinerary />}
        <Line
          full
          color={'#dedede'}
          style={{ gridColumnStart: 1, gridColumnEnd: 10, height: '1px' }}
        />
        <HeadingContainer>
          {included && (
            <Heading
              mainTitle={'PRICE INCLUDES'}
              subTitle={included}
              hasLine
              style={{ maxWidth: '490px' }}
            />
          )}
          {notIncluded && (
            <Heading
              mainTitle={'NOT INCLUDED'}
              subTitle={notIncluded}
              hasLine
              style={{ maxWidth: '490px' }}
            />
          )}
        </HeadingContainer>
        <Line
          full
          color={'#dedede'}
          style={{ gridColumnStart: 1, gridColumnEnd: 10, height: '1px' }}
        />
        <HeadingContainer>
          <Heading
            mainTitle={'Book this tour'}
            about={tourDetail}
            hasLine
            style={{ maxWidth: '490px' }}
          >
            <BookButton onClickAction={this.bookAction} buttonText={'Book Now!'} />
          </Heading>
          <GoBookPicture
            style={{ flexBasis: '45%', flexShrink: '1' }}
            picture={require('../../images/GoBook.png')}
          />
        </HeadingContainer>
        {/*{ included && <Include data={{ description: included }} include title={'PRICE INCLUDES:'} /> }*/}
        {/*{ notIncluded && <Include data={{ description: notIncluded }} title={'NOT INCLUDED:'} /> }*/}
        {/*{ tourDetail && <Heading about={tourDetail} /> }*/}
        {/*<BookButton onClickAction={this.bookAction} buttonText={'Book Now!'} />*/}
      </div>
    );
  }
}

export default Tour;

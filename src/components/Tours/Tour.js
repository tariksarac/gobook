import React from 'react';
import './Tour.css';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import Heading from '../Heading/Heading';
import Highlights from '../Highlights/Highlights';
import Itinerary from '../Itinerary/Itinerary';
import Include from '../Include/Include';
import BookButton from '../Common/BookButton/BookButton';
import { withRouter } from 'react-router-dom';
import { customStyle } from '../LandingPage/LandingPage';
// import BookModal from '../Common/BookModal/BookModal';
import { tours } from '../../constants/constants';
import * as contentful from 'contentful';
import { mapTourData } from '../../utils/mapContentfulData';

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

    fetchSingleTour = query =>
        this.client.getEntries({
            content_type: 'tour',
            'sys.id': `${this.props.match.params.name}`,
            include: 2,
        });

    setTourData = response => {
        let mappedData = mapTourData(response);
        this.setState({
            tourData: mappedData,
        });
    };

    bookAction = () => {
        // this.setState(({ modalOpen }) => ({ modalOpen: !modalOpen }));
        this.props.history.push('/book-now', {id: this.state.tourData.id, title: this.state.tourData.title})
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
        } = this.state.tourData;
        let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        // let tourItem = tours.find(item => item.name === this.props.match.params.name) || {};
        return (
            <div className={'Tour'}>
                <Heading {...headings[0]} style={customStyle} />
                <ImageGallery
                    items={gallery}
                    showThumbnails={false}
                    showPlayButton={width < 600 ? true : this.state.showImageControl}
                    showFullscreenButton={width < 600 ? true : this.state.showImageControl}
                    onMouseOver={() =>
                        this.setState(({ showImageControl }) => ({
                            showImageControl: !showImageControl,
                        }))
                    }
                    onMouseLeave={() =>
                        this.setState(({ showImageControl }) => ({
                            showImageControl: !showImageControl,
                        }))
                    }
                />
                { highlights.length > 0 && <Highlights highlights={highlights} /> }
                { itinerary.length > 0 && <Itinerary data={itinerary} itinerary /> }
                { included && <Include data={{ description: included }} include title={'PRICE INCLUDES:'} /> }
                { notIncluded && <Include data={{ description: notIncluded }} title={'NOT INCLUDED:'} /> }
                { tourDetail && <Heading about={tourDetail} /> }
                <BookButton onClickAction={this.bookAction} buttonText={'Book Now!'} />
            </div>
        );
    }
}

export default withRouter(Tour);

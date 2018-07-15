import React from 'react';
import './Tour.css';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import { about } from '../../constants/constants';
import Heading from '../Heading/Heading';
import AppContext from '../../constants/mainContext';
import Highlights from '../Highlights/Highlights';
import Itinerary from '../Itinerary/Itinerary';
import Include from '../Include/Include';
import BookButton from '../Common/BookButton/BookButton';
import { withRouter } from 'react-router-dom';
import { customStyle } from '../LandingPage/LandingPage';
import BookModal from "../Common/BookModal/BookModal";

class Tour extends React.Component {
    state = {
        showImageControl: false,
        modalOpen: false
    };
    bookAction = () => {
        this.setState(({modalOpen}) => ({modalOpen: !modalOpen}))
    }

    render() {
        let width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        return (
            <AppContext.Consumer>
                {value => {
                    let tourItem = value.find(item => item.name === this.props.match.params.name);
                    return (
                        <div className={'Tour'}>
                            <Heading heading={tourItem.title} subTitle={about} style={customStyle} />
                            <ImageGallery
                                items={tourItem.gallery}
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
                            <Highlights
                                highlights={tourItem.highLights}
                            />
                            <Itinerary data={tourItem.placeByDay} itinerary />
                            <Include
                                data={tourItem.includesInTour.filter(item => item.include)}
                                include
                                title={'PRICE INCLUDES:'}
                            />
                            <Include
                                data={tourItem.includesInTour.filter(item => !item.include)}
                                title={'NOT INCLUDED:'}
                            />
                            <BookButton onClickAction={this.bookAction} />
                            <BookModal handleClose={this.bookAction} openModal={this.state.modalOpen} tourItem={tourItem}/>
                        </div>
                    );
                }}
            </AppContext.Consumer>
        );
    }
}

export default withRouter(Tour);
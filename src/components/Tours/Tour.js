import React from 'react';
import './Tour.css';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import { about, heading } from '../../constants/constants';
import Heading from '../Heading/Heading';
import AppContext from '../../constants/mainContext';
import Highlights from "../Highlights/Highlights";
import Itinerary from "../Itinerary/Itinerary";
import Include from "../Include/Include";
import BookButton from "../Common/BookButton/BookButton";
import {withRouter} from "react-router-dom";

const images = [
    {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
    },
    {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/',
    },
    {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/',
    },
];

class Tour extends React.Component {

    bookAction = () => {
        this.props.history.push('/contact')
    }

    render() {
        return (

            <div className={'Tour'}>
                <Heading heading={heading}  subTitle={about}  />
                <AppContext.Consumer>
                    { value => {
                        let tourItem = value.find(item => item.name === this.props.match.params.name)
                        return (<ImageGallery items={tourItem.gallery} showThumbnails={false} />)
                    }}
                    </AppContext.Consumer>
                <Heading heading={heading} line subHeading={about} color={'#f5f5f5'} margin={'20px 0'}/>
                <Highlights highlights={['Discover the Whale Route to Hermanus','Discover the Whale Route to Hermanus','Discover the Whale Route to Hermanus']}/>
                <Itinerary data={[1,2,3]} itinerary />
                <Include  data={[1,2,3]} include title={'PRICE INCLUDES:'}/>
                <Include  data={[1,2,3]} title={'NOT INCLUDED:'}/>
                <BookButton onClickAction={this.bookAction}/>
            </div>

        );
    }
}

export default withRouter(Tour) ;

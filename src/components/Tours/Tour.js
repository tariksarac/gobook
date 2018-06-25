import React ,{ createContext }from 'react';
import './Tour.css';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import { about, heading } from '../../constants/constants';
import Heading from '../Heading/Heading';
import AppContext from '../../constants/mainContext';

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

// const Context = createContext();
// const { Consumer } = Context;

class Tour extends React.Component {
    render() {
        // const { gallery } = this.tour && this.tour
        // let tour = tours.find(item => item.name === this.props.match.params.name);
        return (

            <div className={'Tour'}>
                {/*<Heading heading={heading} line subHeading={about} color={'#f5f5f5'} />*/}
                <Heading heading={heading}  subHeading={about}  />
                <AppContext.Consumer>
                    { value => {
                        let tourItem = value.find(item => item.name === this.props.match.params.name)
                        return (<ImageGallery items={tourItem.gallery} showThumbnails={false} />)
                    }}
                    </AppContext.Consumer>
                {/*<NumberContext.Consumer>{tours => (<div>{1}</div>)}</NumberContext.Consumer>*/}

            </div>

        );
    }
}

export default Tour;

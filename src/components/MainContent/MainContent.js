import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookButton from "../Common/BookButton/BookButton";
import {withRouter} from "react-router-dom";
import FeaturedPicture from "../FeaturedPicture/FeaturedPicture";
import Heading from "../Heading/Heading";
import ProductsContainer from "../Product/ProductsContainer";
import {
    about,
    heading,
    basimamovic,
    stariMostNaslovna,
    firstHeading,
    firstSubHeading,
    lastSubHeading,
    offer
} from "../../constants/constants";
import {tours} from '../../constants/constants'

const whiteBackground = {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    fontSize:'34px'
}

export const customStyle = {
    alignItems: 'center',
    fontSize:'34px'
}

class MainContent extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    bookAction = () => {
        this.props.history.push('/contact')
    }

    render() {
        
        return (
            <div className={"App-main"}>
                <FeaturedPicture  title={firstHeading} subTitle={firstSubHeading} picture={stariMostNaslovna} />
                <Heading heading={'Take a break and relax'} line subTitle={about} style={customStyle}/>
                {/*<FeaturedPicture about={plivaText} picture={pliva}/>*/}
                <Heading heading={'Go Book'} line subTitle={offer} style={whiteBackground} />
                <ProductsContainer products={tours}/>
                <Heading  subTitle={lastSubHeading} line style={customStyle}/>
                <BookButton onClickAction={this.bookAction}/>
            </div>
        );
    }
}

export default withRouter(MainContent) ;

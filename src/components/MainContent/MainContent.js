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
    pliva,
    plivaText,
    temporaryImg,
    firstHeading,
    firstSubHeading,
    lastHeading,
    lastSubHeading,
    offer
} from "../../constants/constants";
import {tours} from '../../constants/constants'

const whiteBackground = {
    backgroundColor: '#ffffff'
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
                <FeaturedPicture  title={firstHeading} subTitle={firstSubHeading} picture={temporaryImg}/>
                <Heading heading={heading} line subTitle={about} />
                {/*<FeaturedPicture about={plivaText} picture={pliva}/>*/}
                <Heading heading={'2018'} line subTitle={offer} style={whiteBackground}/>
                <ProductsContainer products={tours}/>
                <Heading heading={lastHeading} subHeading={lastSubHeading} line/>
                <BookButton onClickAction={this.bookAction}/>
            </div>
        );
    }
}

export default withRouter(MainContent) ;

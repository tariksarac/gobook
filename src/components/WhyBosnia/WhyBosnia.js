import React from 'react';
import PropTypes from 'prop-types';
import { about, firstHeading, firstSubHeading, heading, temporaryImg } from '../../constants/constants';
import FeaturedPicture from '../FeaturedPicture/FeaturedPicture';
import Heading from '../Heading/Heading';
import './WhyBosnia.css';
import TextItem from './TextItem';
import {customStyle} from "../MainContent/MainContent";

const headingAbout =
    'In a very short period Bosnia and Herzegovina has become a well-known tourist and one Europe’s exotic destinations. The cities and towns of Bosnia and Herzegovina have rich history, beautiful nature, tasty local food and warm-hearted and pleasant people. People in Bosnia and Herzegovina know how to enjoy. We invite you to be our guests!\n' +
    '\n' +
    'Below we shall endeavor to give you a taste of some of the beauties of our country and share with you opinions of those who have experienced a breath of this ambiance.\n' +
    '\n' +
    'Many famous magazines and adventurers have rated Bosnia and Herzegovina’s sights very high. We give to you ten reasons we believe should make you decide to visit Bosnia and Herzegovina.\n';

const leftStyle = {
    alignItems: 'flex-start'
}

const WhyBosnia = props => {
    return (
        <div className={'WhyBosnia'}>
            <FeaturedPicture
                left
                title={firstHeading}
                subTitle={firstSubHeading}
                picture={temporaryImg}
            />
            <Heading heading={'WHY BOSNIA?'} line subTitle={headingAbout} style={customStyle}/>
            <TextItem
                title={'Landscapes of Bosnia and Herzegovina'}
                text={
                    'Bosna and Herzegovina still has unspoiled nature, clean rivers, incredible views and beautiful forests abundant with different flora and fauna. In the south of the country, one can find not very extensive but highly valuable seacoast with crystal clear water. Our landscapes offer beautiful views which greatly vary from place to place. '
                }
            />
            <TextItem
                title={'Landscapes of Bosnia and Herzegovina'}
                text={
                    'Bosna and Herzegovina still has unspoiled nature, clean rivers, incredible views and beautiful forests abundant with different flora and fauna. In the south of the country, one can find not very extensive but highly valuable seacoast with crystal clear water. Our landscapes offer beautiful views which greatly vary from place to place. '
                }
            />
            <TextItem
                title={'Landscapes of Bosnia and Herzegovina'}
                text={
                    'Bosna and Herzegovina still has unspoiled nature, clean rivers, incredible views and beautiful forests abundant with different flora and fauna. In the south of the country, one can find not very extensive but highly valuable seacoast with crystal clear water. Our landscapes offer beautiful views which greatly vary from place to place. '
                }
            />
        </div>
    );
};

WhyBosnia.propTypes = {};
WhyBosnia.defaultProps = {};

export default WhyBosnia;

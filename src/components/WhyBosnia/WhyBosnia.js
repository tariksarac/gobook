import React from 'react';
import { whyBosniaData } from '../../constants/constants';
import FeaturedPicture from '../FeaturedPicture/FeaturedPicture';
import Heading from '../Heading/Heading';
import './WhyBosnia.css';
import TextItem from './TextItem';
import { customStyle } from '../LandingPage/LandingPage';
import HeadingContainer from "../Common/HeadingSection/HeadingContainer";
import HeroImage from "../HeroImage/HeroImage";


const WhyBosnia = props => {
    return (
        <div className={'WhyBosnia'}>
            <HeadingContainer >
                <Heading
                    mainTitle={'WHY BOSNIA?'}
                    hasLine
                    subTitle={whyBosniaData.whyBosniaIntro}
                />
            </HeadingContainer>
            <HeroImage picture={whyBosniaData.mainImage}/>
            <HeadingContainer style={{flexDirection: 'column'}}>
                {whyBosniaData.sights.map((item, index) => (
                    <TextItem
                        key={index}
                        style={{ marginTop: index === 0 && '50px' }}
                        title={item.title}
                        text={item.text}
                        image={item.image}
                        color={'#2edc38'}
                    />
                ))}
            </HeadingContainer>

            {/*<FeaturedPicture left picture={whyBosniaData.mainImage} notShadow/>*/}
            {/*{whyBosniaData.sights.map((item, index) => (*/}
                {/*<TextItem*/}
                    {/*key={index}*/}
                    {/*style={{ marginTop: index === 0 && '50px' }}*/}
                    {/*title={item.title}*/}
                    {/*text={item.text}*/}
                    {/*image={item.image}*/}
                {/*/>*/}
            {/*))}*/}
            {/*<div className={'why-bosnia-media'}>*/}
                {/*<p>{whyBosniaData.otherAboutBosnia.intro}</p>*/}
                {/*{whyBosniaData.otherAboutBosnia.links.map((item,index) => <a key={index} href={item.link}>{item.site}</a>)}*/}
            {/*</div>*/}
        </div>
    );
};

WhyBosnia.propTypes = {};
WhyBosnia.defaultProps = {};

export default WhyBosnia;

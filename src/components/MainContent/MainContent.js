import React from 'react'
import FeaturedPicture from "../FeaturedPicture/FeaturedPicture";
import Heading from "../Heading/Heading";
import ProductsContainer from "../Product/ProductsContainer";
import {
    about,
    heading,
    pliva,
    plivaText,
    products,
    temporaryImg,
    firstHeading,
    firstSubHeading,
    lastHeading,
    lastSubHeading,
    offer
} from "../../constants/constants";

const MainContent = () => {

    return (
        <div className={"App-main"}>
            <FeaturedPicture  title={firstHeading} subTitle={firstSubHeading} picture={temporaryImg}/>
            <Heading heading={heading} line subHeading={about}/>
            <FeaturedPicture about={plivaText} picture={pliva}/>
            <Heading heading={'2018'} line subHeading={offer}/>
            <ProductsContainer products={products}/>
            <Heading heading={lastHeading} subHeading={lastSubHeading} line/>
        </div>
    )
}

export default MainContent
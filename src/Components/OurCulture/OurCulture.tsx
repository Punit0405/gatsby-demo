import React from "react";
import {
    OurCultureBottomDiv,
    OurCultureBtn,
    OurCultureDiv,
    OurCultureH1,
    OurCultureP,
    OurCultureTopDiv,
} from "./OurCulture.styled";

const OurCulture = () => {
    return (
        <OurCultureDiv>
            <OurCultureTopDiv>
                <OurCultureH1>Our Culture</OurCultureH1>
                <OurCultureP>
          Enthusiastic teams accomplish amazing things. At intive, we champion
          collaboration, empathy, and inclusion
                </OurCultureP>
            </OurCultureTopDiv>
            <OurCultureBottomDiv>
                <OurCultureBtn>JOIN US</OurCultureBtn>
            </OurCultureBottomDiv>
        </OurCultureDiv>
    );
};

export default OurCulture;

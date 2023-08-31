import React from "react";
import {
    InformationDiv,
    InformationInnerDiv,
    InformationInnerH1,
    InformationInnerLink,
    InformationOuterDiv,
} from "./WorkComponent.styled";

const InformatitonSection = () => {
    return (
        <InformationDiv>
            <InformationOuterDiv>
                <InformationInnerDiv>
                    <InformationInnerH1>
            How can we help you? Let’s talk.
                    </InformationInnerH1>
                    <InformationInnerLink to="/">GET IN TOUCH</InformationInnerLink>
                </InformationInnerDiv>
                <InformationInnerDiv>
                    <InformationInnerH1>
            Want to join the exciting side of digital?
                    </InformationInnerH1>
                    <InformationInnerLink to="/">COME ON BOARD</InformationInnerLink>
                </InformationInnerDiv>
            </InformationOuterDiv>
        </InformationDiv>
    );
};

export default InformatitonSection;

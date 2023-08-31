import React from "react";
import {
    HumanCentricDiv,
    HumanCentricLeftBottomDiv,
    HumanCentricLeftDiv,
    HumanCentricLeftUpperDiv,
    HumanCentricRightBottomDiv,
    HumanCentricRightDiv,
    HumanCentricRightUpperDiv,
    HumanMainContainer,
    RightColorfulDiv,
    WhiteBorderDiv,
} from "./HumanCentric.styled";
import HumanNumbers from "./HumanNumbers";

const HumanCentricComponent = () => {
    return (
        <HumanCentricDiv>
            <HumanMainContainer>
                <HumanCentricLeftDiv>
                    <HumanCentricLeftUpperDiv>
                        <p>Human-centric engineering</p>
                    </HumanCentricLeftUpperDiv>
                    <HumanCentricLeftBottomDiv>
                        <p>
              We connect industry expertise, design, and engineering to create
              digital products that empower users, deliver business value and
              make a societal impact
                        </p>
                    </HumanCentricLeftBottomDiv>
                </HumanCentricLeftDiv>
                <HumanCentricRightDiv>
                    <RightColorfulDiv>
                        <HumanCentricRightUpperDiv>
                            <HumanNumbers
                                numbers="21"
                                description="delivery centers and 6 design studios"
                            />
                            <WhiteBorderDiv />
                            <HumanNumbers
                                numbers="+3,000"
                                description="digital enthusiasts"
                            />
                            <WhiteBorderDiv />
                            <HumanNumbers numbers="75" description="pts NPS" />
                        </HumanCentricRightUpperDiv>
                        <HumanCentricRightBottomDiv>
                            <HumanNumbers
                                numbers="+50%"
                                description="revenue growth in 2021"
                            />
                            <WhiteBorderDiv />
                            <HumanNumbers
                                numbers="23"
                                description="years of experience, founded in garage in Helsinki in 1999"
                            />
                            <WhiteBorderDiv />
                            <HumanNumbers
                                numbers="3"
                                description="continents - present in Europe and the Americas"
                            />
                        </HumanCentricRightBottomDiv>
                    </RightColorfulDiv>
                </HumanCentricRightDiv>
            </HumanMainContainer>
        </HumanCentricDiv>
    );
};

export default HumanCentricComponent;

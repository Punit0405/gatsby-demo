import React from "react";
import { HumanNumberDiv, NumberP } from "./HumanCentric.styled";

interface NumberDivProps {
  numbers: string;
  description: string;
}
const HumanNumbers = ({ numbers, description }: NumberDivProps) => {
    return (
        <HumanNumberDiv>
            <NumberP>{numbers}</NumberP>
            <p>{description}</p>
        </HumanNumberDiv>
    );
};

export default HumanNumbers;

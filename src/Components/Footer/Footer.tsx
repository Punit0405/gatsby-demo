import React from "react";
import {
    FontAwesomeIconI,
    FooterContentDiv,
    FooterContentLowerDiv,
    FooterContentUpperDiv,
    FooterDiv,
    FooterLinks,
} from "./Footer.styled";
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faMedium,
    faTiktok,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <FooterDiv>
            <FooterContentDiv>
                <FooterContentUpperDiv>
                    <span>&copy; intive GmbH 2023</span>
                    <FooterLinks to="/">GOVERNANCE</FooterLinks>
                    <FooterLinks to="/">PRIVACY POLICY</FooterLinks>
                    <FooterLinks to="/">IMPRINT</FooterLinks>
                    <FooterLinks to="/">COOKIE SETTINGS</FooterLinks>
                </FooterContentUpperDiv>
                <FooterContentLowerDiv>
                    <FontAwesomeIconI
                        data-testid="facebook"
                        icon={faFacebookF}
                    ></FontAwesomeIconI>
                    <FontAwesomeIconI
                        data-testid="instagram"
                        icon={faInstagram}
                    ></FontAwesomeIconI>
                    <FontAwesomeIconI
                        data-testid="linkedin"
                        icon={faLinkedinIn}
                    ></FontAwesomeIconI>
                    <FontAwesomeIconI
                        data-testid="medium"
                        icon={faMedium}
                    ></FontAwesomeIconI>
                    <FontAwesomeIconI
                        data-testid="youtube"
                        icon={faYoutube}
                    ></FontAwesomeIconI>
                    <FontAwesomeIconI
                        data-testid="twitter"
                        icon={faTwitter}
                    ></FontAwesomeIconI>
                    <FontAwesomeIconI
                        data-testid="tiktok"
                        icon={faTiktok}
                    ></FontAwesomeIconI>
                </FooterContentLowerDiv>
            </FooterContentDiv>
        </FooterDiv>
    );
};

export default Footer;

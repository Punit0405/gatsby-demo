import React from "react";
import { FontAwesomeIconI, FooterContentDiv, FooterContentLowerDiv, FooterContentUpperDiv, FooterDiv, FooterLinks } from "./Footer.styled";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faMedium, faMediumM, faTiktok, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <FooterDiv>
            <FooterContentDiv>
                <FooterContentUpperDiv>
                    <span>&copy; intive GmbH 2023</span>
                    <FooterLinks to='/'>GOVERNANCE</FooterLinks>
                    <FooterLinks to='/'>PRIVACY POLICY</FooterLinks>
                    <FooterLinks to='/'>IMPRINT</FooterLinks>
                    <FooterLinks to='/'>COOKIE SETTINGS</FooterLinks>
                </FooterContentUpperDiv>
                <FooterContentLowerDiv>
                    <FontAwesomeIconI icon={faFacebookF}></FontAwesomeIconI>
                    <FontAwesomeIconI icon={faInstagram}></FontAwesomeIconI>
                    <FontAwesomeIconI icon={faLinkedinIn}></FontAwesomeIconI>
                    <FontAwesomeIconI icon={faMedium}></FontAwesomeIconI>
                    <FontAwesomeIconI icon={faYoutube}></FontAwesomeIconI>
                    <FontAwesomeIconI icon={faTwitter}></FontAwesomeIconI>
                    <FontAwesomeIconI icon={faTiktok}></FontAwesomeIconI>
                </FooterContentLowerDiv>

            </FooterContentDiv>
        </FooterDiv>
    );
};

export default Footer;

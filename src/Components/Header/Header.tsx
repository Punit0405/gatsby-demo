import React, { useState } from "react";
import { ROUTES } from "../../Configs/Routes";
import { StyledDiv, NavDiv, DropDownDiv } from "./Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faAngleUp,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { Link } from "gatsby";

interface HeaderProps {
  links: any[];
}

const Header = ({ links }: HeaderProps) => {
    const [lang, setLang] = useState<string>("EN");
    const [isOpen, setisOpen] = useState<boolean>(false);
    const onClick: MenuProps["onClick"] = ({ key }) => {
        setisOpen(false);
        setLang(key);
    };
    const items: MenuProps["items"] = [
        {
            label: "EN",
            key: "EN",
        },
        {
            label: "DE",
            key: "DE",
        },
        {
            label: "ES",
            key: "ES",
        },
        {
            label: "PL",
            key: "PL",
        },
    ];
    const dropDownOnChange = (value: any) => {
        window.analytics.track("DropDownChange Was Noticed", {
            userId: 13,
            gender: "male",
            age: 33,
        });
        setisOpen(value);
    };
    return (
        <StyledDiv>
            <Link to={ROUTES.HOME}>
                <svg width="77" height="24" viewBox="0 0 77 24">
                    <path
                        fill="#007AC9"
                        fillRule="evenodd"
                        d="M68.392 6.828c5.073 0 8.454 3.104 8.454 8.384v1.103H64.464c.276 2.116 2.27 3.242 3.976 3.242 1.713 0 2.8-.477 3.954-1.624l3.899 1.631c-2.124 3.084-4.541 4.016-7.722 4.016-4.633 0-8.57-3.465-8.57-8.368 0-4.248 3.375-8.384 8.39-8.384zm-19.509.266l3.348 10.469h.053l3.312-10.47h4.487l-5.592 16.273h-4.477L44.398 7.094h4.485zm-6.288.001v16.27h-4.483V7.095h4.483zm-10.74-4v4h2.82v3.811h-2.812v5.783c0 1.627.349 2.33 2.253 2.33h.557v4.34h-1.35c-4.696 0-5.933-1.935-5.933-5.803v-6.662h-2.812V7.087h2.806V3.096h4.472zM16.344 6.69c3.76 0 6.116 2.231 6.116 6.059v10.601h-4.462v-9.544c0-2.22-1.494-2.937-2.553-2.937-1.511 0-3.008.816-3.008 3.463v9.018H7.927V7.087h4.46v1.626c.742-.964 2.144-2.024 3.956-2.024zM4.49 7.082v12.091c0 2.261-1.595 4.172-4.49 4.172v-2.373c1.188-.166 2.027-.678 2.027-1.753v-1.3H.012V7.082H4.49zm63.95 3.276c-2.094 0-3.662 1.412-3.922 2.688h7.835c-.307-1.37-1.692-2.688-3.913-2.688zM42.6.588v4.34h-4.484V.588H42.6zM4.522.583v4.339H.038V.582h4.484z"
                    ></path>
                </svg>
            </Link>
            <NavDiv>
                {links.map((link: any) => (
                    <Link key={link.id} to={link.link}>
                        {link.title}
                    </Link>
                ))}
            </NavDiv>
            <DropDownDiv>
                <span>{lang}</span>{" "}
                <Dropdown
                    overlayStyle={{ zIndex: 2001 }}
                    onOpenChange={dropDownOnChange}
                    menu={{ items, onClick }}
                    trigger={["click"]}
                >
                    {isOpen ? (
                        <FontAwesomeIcon
                            role="angleUp"
                            data-testid="angleUp"
                            icon={faAngleUp}
                        ></FontAwesomeIcon>
                    ) : (
                        <FontAwesomeIcon
                            aria-hidden={false}
                            role="angleDown"
                            data-testid="angleDown"
                            icon={faAngleDown}
                        ></FontAwesomeIcon>
                    )}
                </Dropdown>
        | <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </DropDownDiv>
        </StyledDiv>
    );
};

// MaisonNeue
export default Header;

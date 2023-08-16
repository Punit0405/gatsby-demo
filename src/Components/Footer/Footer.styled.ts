import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { styled } from "styled-components";

export const FooterDiv = styled.div`
  display: flex;
  position: sticky;
  color: white;
  top: 0;
  justify-content: space-around;
  align-items: center;
  height: 8rem;
  font-family: 'Lato', sans-serif;
  padding: 0% 6.2%;
  z-index: 2000;
  background-color: #007ac9;
`

export const FooterContentDiv = styled.div`
width: 60%;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
height: 70%;
`
export const FooterContentUpperDiv = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
export const FooterLinks = styled(Link)`
text-decoration: none;
color: white;
font-weight: 600;
`
export const FooterContentLowerDiv = styled.div`
width: 60%;
height: 100%;
display: flex;
justify-content: space-between;
`

export const FontAwesomeIconI = styled(FontAwesomeIcon)`
height: 25px;
width: 25px;
`
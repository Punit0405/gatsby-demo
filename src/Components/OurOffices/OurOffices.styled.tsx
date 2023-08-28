import { Link } from "gatsby";
import { styled } from "styled-components";

export const OurOfficesDiv = styled.div`
  height: 60vh;
  font-family: Lato;
  background-image: url("https://images.ctfassets.net/ue4ib83wzj4v/5vnB2iKv1CnsDd91aF2pq/ca35fc29e9efe008f79ebfb8119025e0/Earth.png?w=1920&h=953&q=100&fm=webp&bg=transparent");
  display: flex;
  align-items: center;
`;
export const OurOfficesContentDiv = styled.div`
    margin-left: 5%;
    width: 40%;
    display: flex;
    flex-direction: column;
`;
export const OurOfficesTextDiv = styled.div`
padding: 10%;
padding-bottom: 0%;
text-align: left;
`;
export const OurOfficesContentH1 = styled.h1`
   font-size: 2rem;
`;
export const OurOfficesContentp = styled.p`
   font-size: 1.5rem;
   font-weight: 300;
`;
export const OurOfficesLink = styled(Link)`
    display: flex;
    align-items: center;
    border-radius: 128px;
    padding: 0.75rem 2rem;
    font-size: 1.3rem;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    margin-left:10%;
    width: 30%;
    font-weight: 600;
    background-color: rgb(0, 122, 201);
    color: rgb(255, 255, 255);
    border: 1px solid rgb(0, 48, 80);
    &:hover{
        background-color:  rgb(0, 72, 119)
    }
`;
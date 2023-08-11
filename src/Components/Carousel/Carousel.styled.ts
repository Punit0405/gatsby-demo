import { styled } from 'styled-components';

const CarouselDiv = styled.div`
  font-family: 'Lato', sans-serif;
`
const CarouselImage = styled.img`
`
const CarouselBottomDiv = styled.div`
position: absolute;
bottom: 3rem;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 14.2rem;
color: #fff;
font-size: 1.6rem;
font-family: 'Lato', sans-serif;
font-weight: 100;
background-color:rgb(0, 48, 80);



`
const SeemoreButton = styled.button`
    display: flex;
    align-items: center;
    border-radius: 128px;
    padding: 0.75rem 2rem;
    font-size: 1.3rem;
    width: 13%;
    justify-content: center;
    height: 30%;
    cursor: pointer;
    font-weight: 600;
    background-color: rgb(0, 122, 201);
    color: rgb(255, 255, 255);
    border: 1px solid rgb(0, 48, 80);

`

export {CarouselDiv,CarouselImage,CarouselBottomDiv,SeemoreButton}
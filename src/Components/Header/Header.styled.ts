import { styled } from 'styled-components';


const StyledDiv = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-around;
  align-items: center;
  height: 6rem;
  font-family: 'Lato', sans-serif;
  padding: 0% 6.2%;
  z-index: 2000;
  background-color: #fff;
`

const NavDiv = styled.div`
  display:flex;
  gap: 2rem;
  text-decoration: none;
  width: 60%;
  a{
    text-decoration: none;
    color: #000;
    font-weight: 700;
    font-size:1.1rem;
    border: 3px solid #fff;
    border-radius: 3px;
    &:hover{
    border-bottom: 3px solid #e21776;
    }
    
  }
  
`


const DropDownDiv = styled.div`
display: flex;
width: 7%;
font-weight: 300;
justify-content: space-between;
align-items: center;

`


export {StyledDiv,NavDiv,DropDownDiv}

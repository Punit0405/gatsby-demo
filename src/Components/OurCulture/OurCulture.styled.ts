import { styled } from 'styled-components';

export const OurCultureDiv = styled.div`
  height: 30vh;
  font-family: 'Lato', sans-serif;
  background-color: rgb(222, 242, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const OurCultureTopDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
  pointer-events: none;
`;
export const OurCultureBottomDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const OurCultureH1 = styled.h1`
  font-size: 2rem;
  align-self: center;
  text-align: center;
`;

export const OurCultureP = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
  font-weight: 300;
`;

export const OurCultureBtn = styled.button`
  display: inline-flex;
  min-width: 7.5rem;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 128px;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  white-space: normal;
  word-break: break-word;
  border-width: 0px;
  cursor: pointer;
  background-color: rgb(226, 23, 118);
  color: rgb(255, 255, 255);
`;

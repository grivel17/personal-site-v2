import styled from 'styled-components';
import { FaCheck, FaGithub, FaLinkedin } from 'react-icons/fa';

export const InfoSec = styled.div`
  color: #fff;
  padding-top: 100px;
  padding-bottom: 60px;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
  @media screen and (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    max-width: 100%;
  }
`;


//img wrap 

export const ImgWrapper = styled.div`
  max-width: 540px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
  
  @media screen and (max-width: 768px) {
    /* padding-bottom: 65px;
    max-width: 100%; */
    display: block;
  }
`;

// img

export const Img = styled.img`
   width: 100%;
   
  /* padding-right: 0;
  border: 0;
 
  vertical-align: middle;
  display: inline-block; */
`;

// //img wrap 

// export const ImgWrapper = styled.div`
//   /* max-width: 540px; */
//   display: flex;
//   justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
//   @media screen and (max-width: 768px) {
//     padding-bottom: 65px;
//     max-width: 100%;
//   }
// `;

// // img

// export const Img = styled.img`
//   padding-right: 0;
//   border: 0;
//   width: 100%;
//   /* vertical-align: middle;
//   display: inline-block; */
//   /* max-height: 500px; */
// `;



export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#008000' : '#008000')};
  font-size: 24px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 24px;
  @media screen and (max-width: 768px) {
  font-size: 20px;
  line-height: 20px;
  font-weight: 500;
  }
`;


export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
  @media screen and (max-width: 768px) {
  font-size: 36px;
  line-height: 1.2;
  font-weight: 500;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;



export const SubtitleWithIcon = styled.p`
  max-width: 440px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
  display: ${({doNotShow }) => (doNotShow ? 'none' : 'block')}; 
`;

export const SubtitleWithIcon1 = styled.p`
  max-width: 440px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
  display: ${({doNotShow1 }) => (doNotShow1 ? 'none' : 'block')}; 
`;

export const SubtitleWithIcon2 = styled.p`
  max-width: 440px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
  display: ${({doNotShow2 }) => (doNotShow2 ? 'none' : 'block')}; 
`;

export const SubtitleWithIcon3 = styled.p`
  max-width: 440px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
  display: ${({doNotShow3 }) => (doNotShow3 ? 'none' : 'block')}; 
`;

//ikona do subtitle 

export const SubIconA = styled(FaCheck)`
  margin-right: 15px;
  font-size: 20px;
  position: relative;
  top: 0.35rem;
  color: #008000;
  
`;

//Ikona do github


export const GitHubIcon = styled(FaGithub)`
  font-size: 36px;
  position: relative;
  top: 0.35rem;
  color: black;
  &:hover{
    color: purple;
  }
  
`;

//Ikona go Li

export const LiIcon = styled(FaLinkedin)`
  font-size: 36px;
  position: relative;
  top: 0.35rem;
  color: #0e76a8;
  &:hover{
    color: black;
  }
  display: ${({doNotShow5 }) => (doNotShow5 ? 'none' : 'block')}; 
  
`;

export const SubIconAll = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-right: 15px;
  font-size: 30px;
  position: relative;
  top: 0.35rem;
  color: #008000;
  margin-top:30px;
  margin-bottom: 25px;

`;

export const SubIconAllLink = styled.a`
  display: flex;
  justify-content: flex-start;
  margin-right: 15px;
  font-size: 30px;
  position: relative;
  top: 0.35rem;
  color: #008000;
  margin-top:30px;
  margin-bottom: 25px;

`;
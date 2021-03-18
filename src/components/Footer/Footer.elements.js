import styled from 'styled-components';
import { FaMagento, FaPhoneSquareAlt, FaEnvelope, FaCheck } from 'react-icons/fa';
// import { FaPhoneSquareAlt } from 'react-icons/fa';

import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

export const FooterSubHeading = styled.p`
  
  margin-bottom: 24px;
  font-size: 22px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
  color: #008000;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
    flex-direction: column;
    
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: flex-start;


  @media screen and (max-width: 820px) {
    flex-direction: column;
    margin-left: 15%;
    margin-right: 15%
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  /* width: 180px; */
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0px;
    padding: 10px;
    width: 100%;


  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 20px;
  
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.7rem;
  font-size: 16px;


  &:hover {
    color: #008000;
    transition: 0.3s ease-out;
  }
`;

export const FooterLinkExtern = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.7rem;
  font-size: 16px;


  &:hover {
    color: #008000;
    transition: 0.3s ease-out;
  }

`;

export const FooterRow = styled.div`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.7rem;
  font-size: 16px;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  flex-direction: column;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;

export const ContactIconT = styled(FaPhoneSquareAlt)`
  margin-right: 5px;
  font-size: 22px;
  position: relative;
  top: 0.35rem;
  
`;

export const ContactIconM = styled(FaEnvelope)`
  margin-right: 5px;
  font-size: 22px;
  position: relative;
  top: 0.35rem;
  
`;

export const ContactIconA = styled(FaCheck)`
  margin-right: 15px;
  font-size: 20px;
  position: relative;
  top: 0.35rem;
  
`;


export const WebsiteRights = styled.small`
  color: #008000;
  margin-bottom: 16px;
  margin-top: 30px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 28px;
  
  &:hover {
    color: #008000;
    transition: 0.3s ease-out;
  }
`;

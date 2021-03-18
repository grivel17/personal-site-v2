import React from 'react';
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,

} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  ContactIconT,
  ContactIconM,
  ContactIconA,
  FooterRow,
  FooterLinkExtern
} from './Footer.elements';

function Footer() {
  return (
    <section id='s5'>
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>
            Chcesz zamówić stronę WWW? Albo porozmawiać o współpracy? 
          </FooterSubHeading>
          <FooterSubText>Skontaktuj się ze mną</FooterSubText>
       
        </FooterSubscription>
        
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Lepsza Strona Kodowania</FooterLinkTitle>
              <FooterRow ><ContactIconA />Klient indywidualny</FooterRow>
              <FooterRow ><ContactIconA />Strony dla branż</FooterRow>
              <FooterRow ><ContactIconA />Współpraca projektowa</FooterRow>
            </FooterLinkItems>
            
            
          
          
          </FooterLinksWrapper>
          <FooterLinksWrapper>
         
            <FooterLinkItems>
              <FooterLinkTitle>Kontkat</FooterLinkTitle>
              <FooterLinkExtern href="tel:+48793219812"><ContactIconT /> +48 793 218 219</FooterLinkExtern>
              <FooterLinkExtern href="mailto:kontakt@ins-code.pl" ><ContactIconM />kontakt@ins-code.pl</FooterLinkExtern>
            </FooterLinkItems>

            </FooterLinksWrapper>
        </FooterLinksContainer>
      
      <SocialMedia>
          
          <SocialMediaWrap>
                  
            <SocialIcons>
              <SocialIconLink href='#' rel="noopener" target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              
              <SocialIconLink href='https://www.linkedin.com/in/tomasz-wojciechowski-61600742/' rel="noopener" target='_blank' aria-label='LinkedIn'>
                <FaLinkedin />
              </SocialIconLink>

              <SocialIconLink href='https://github.com/grivel17' rel="noopener" target='_blank' aria-label='LinkedIn'>
                <FaGithub />
              </SocialIconLink>

            </SocialIcons>      

            <WebsiteRights>insCODE © {new Date().getFullYear()}</WebsiteRights>       

          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
    </section>
  );
}

export default Footer;
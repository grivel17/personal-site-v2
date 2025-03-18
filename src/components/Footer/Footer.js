import React from 'react';
import {FaGithub, FaLinkedin,} from 'react-icons/fa';
import {
    ContactIconM,
    ContactIconT,
    FooterContainer,
    FooterLinkExtern,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterSubHeading,
    FooterSubscription,
    FooterSubText,
    SocialIconLink,
    SocialIcons,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights
} from './Footer.elements';

function Footer() {
    return (
        <section id='s5'>
            <FooterContainer>
                <FooterSubscription>
                    <FooterSubHeading>
                        Chcesz zamówić stronę WWW? Albo aplikację?
                    </FooterSubHeading>
                    <FooterSubText>Skontaktuj się ze mną</FooterSubText>
                </FooterSubscription>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Kontkat</FooterLinkTitle>
                            <FooterLinkExtern href="tel:+48793219812"><ContactIconT/> +48 793 218 219</FooterLinkExtern>
                            <FooterLinkExtern
                                href="mailto:kontakt@good-stack.pl"><ContactIconM/>kontakt@good-stack.pl</FooterLinkExtern>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialIcons>
                            <SocialIconLink href='https://www.linkedin.com/in/tomasz-wojciechowski-61600742/'
                                            rel="noopener" target='_blank' aria-label='LinkedIn'>
                                <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href='https://github.com/grivel17' rel="noopener" target='_blank'
                                            aria-label='LinkedIn'>
                                <FaGithub/>
                            </SocialIconLink>
                        </SocialIcons>
                        <WebsiteRights>goodSTACK © {new Date().getFullYear()}</WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterContainer>
        </section>
    );
}

export default Footer;
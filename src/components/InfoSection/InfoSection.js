import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  SubIconA,
  SubtitleWithIcon,
  SubtitleWithIcon1,
  SubtitleWithIcon2,
  SubtitleWithIcon3,
  SubIconAll,
  GitHubIcon,
  LiIcon,
  SubIconAllLink
} from './InfoSection.elements';

import {
  FaWordpress,
  FaServer,
  FaExpeditedssl,
  FaHandsHelping,
  FaCartArrowDown,
  FaCodeBranch,
  FaBlackTie,
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaSass,
  FaElementor,
 


} from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';



function InfoSection({
  primary,
  opis,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,

  doNotShow,
  doNotShow1,
  doNotShow2,
  doNotShow3,
  doNotShow4,
  doNotShow5,

  descLin1,
  descLin2,
  descLin3,
  descLin4,
  descLin5,
  descLin6,
  descLin7, 

  anchor
   
  
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>


              {/* oferta sekcja 1 */} 
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
               
                <SubtitleWithIcon doNotShow = { doNotShow }><SubIconA />{descLin1}</SubtitleWithIcon>
                <SubtitleWithIcon doNotShow = { doNotShow }><SubIconA />{descLin2} </SubtitleWithIcon>
                <SubtitleWithIcon doNotShow = { doNotShow }><SubIconA />{descLin3} </SubtitleWithIcon>
                <SubtitleWithIcon doNotShow = { doNotShow }><SubIconA />{descLin4} </SubtitleWithIcon>
                <SubtitleWithIcon doNotShow = { doNotShow }><SubIconA />{descLin5}</SubtitleWithIcon>
                <SubtitleWithIcon doNotShow = { doNotShow }><SubIconA />{descLin6}</SubtitleWithIcon>
                <SubtitleWithIcon doNotShow = { doNotShow }><SubIconA />{descLin7}</SubtitleWithIcon>

                <SubtitleWithIcon1 doNotShow1 = { doNotShow1 }><SubIconAll><FaWordpress style={{marginRight: '20px'}}/><FaServer style={{marginRight: '20px'}}/><FaExpeditedssl style={{marginRight: '20px'}}/><FaHandsHelping style={{marginRight: '20px'}}/></SubIconAll></SubtitleWithIcon1>
                
                <SubtitleWithIcon2 doNotShow2 = { doNotShow2 }>
                
                <SubIconAllLink href='https://github.com/grivel17' rel="noopener" target='_blank' aria-label='LinkedIn'>
 
                    <GitHubIcon />
                  
                </SubIconAllLink>
                 
                 <SubIconAll> 
                    <FaCodeBranch style={{marginRight: '20px'}}/>
                    <FaHtml5 style={{marginRight: '20px'}}/>
                    <FaJsSquare style={{marginRight: '20px'}}/>
                    <FaSass style={{marginRight: '20px'}}/>
                    <FaReact style={{marginRight: '20px'}}/>
                    <FaElementor style={{marginRight: '20px'}}/>
                  </SubIconAll>
                </SubtitleWithIcon2>
                <SubtitleWithIcon3 doNotShow3 = { doNotShow3 }><SubIconAll><FaBlackTie style={{marginRight: '20px'}}/><FaCartArrowDown style={{marginRight: '20px'}}/><FaWordpress style={{marginRight: '20px'}}/><FaServer style={{marginRight: '20px'}}/><FaExpeditedssl style={{marginRight: '20px'}}/></SubIconAll></SubtitleWithIcon3>
                
                <SubIconAllLink href='https://www.linkedin.com/in/tomasz-wojciechowski-61600742/' rel="noopener" target='_blank' aria-label='LinkedIn'>
                    <LiIcon doNotShow5={doNotShow5}/>   
                </SubIconAllLink>


                <AnchorLink href={anchor} >
                <Link>
                  <Button big fontBig primary={primary} doNotShow4={doNotShow4}>
                    {buttonLabel} 
                  </Button>
                </Link>
                </AnchorLink>
          


              </TextWrapper>
              
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;

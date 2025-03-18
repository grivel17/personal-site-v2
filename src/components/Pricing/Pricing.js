import React from 'react';
import {GiCrystalBars, GiCrystalCluster, GiCrystalGrowth} from 'react-icons/gi';
import {FaCheck, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {
  PricingCard,
  PricingCardCost,
  PricingCardFeature,
  PricingCardFeatures,
  PricingCardIcon,
  PricingCardInfo,
  PricingCardPlan,
  PricingContainer,
  PricingHeading,
  PricingInfo,
  PricingSection,
  PricingWrapper,
} from './Pricing.elements';

function Pricing() {
    return (
        <IconContext.Provider value={{color: '#a9b3c1', size: 64}}>
            <PricingSection>
                <PricingWrapper>
                    <PricingHeading>Cennik</PricingHeading>
                    <PricingContainer>
                        <PricingCard>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiCrystalCluster/>
                                </PricingCardIcon>
                                <PricingCardPlan>Strona basic</PricingCardPlan>
                                <PricingCardCost>Od 2999 zł</PricingCardCost>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Strona one-page<FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Responsywna<FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Cookies Info<FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Możliwość rozbudowy<FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>CMS<FaTimes size={18} style={{
                                        position: 'relative',
                                        top: '0.2rem',
                                        color: 'red',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Social media: częściowo</PricingCardFeature>
                                    <PricingCardFeature>Dodatkowe podstrony<FaTimes size={18} style={{
                                        position: 'relative',
                                        top: '0.2rem',
                                        color: 'red',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Formularz kontaktowy<FaTimes size={18} style={{
                                        position: 'relative',
                                        top: '0.2rem',
                                        color: 'red',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Blog<FaTimes size={18} style={{
                                        position: 'relative',
                                        top: '0.2rem',
                                        color: 'red',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Serwer<FaTimes size={18} style={{
                                        position: 'relative',
                                        top: '0.2rem',
                                        color: 'red',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Domena<FaTimes size={18} style={{
                                        position: 'relative',
                                        top: '0.2rem',
                                        color: 'red',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Certyfikat SSL<FaTimes size={18} style={{
                                        position: 'relative',
                                        top: '0.2rem',
                                        color: 'red',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Poczta<FaTimes size={18} style={{
                                        position: 'relative',
                                        top: '0.2rem',
                                        color: 'red',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Wsparcie<FaTimes size={18} style={{
                                        position: 'relative',
                                        top: '0.2rem',
                                        color: 'red',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                </PricingCardFeatures>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiCrystalBars/>
                                </PricingCardIcon>
                                <PricingCardPlan>Strona standard</PricingCardPlan>
                                <PricingCardCost>Od 4999 zł</PricingCardCost>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Rozbudowana strona główna<FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Responsywna<FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Cookies Info<FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Możliwość rozbudowy<FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>CMS<FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Social media<FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/> </PricingCardFeature>
                                    <PricingCardFeature>Do 5 podstron <FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Formularz kontaktowy<FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Blog<FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Serwer<FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Domena<FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Certyfikat SSL<FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Poczta<FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Wsparcie<FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                </PricingCardFeatures>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiCrystalGrowth/>
                                </PricingCardIcon>
                                <PricingCardPlan>Aplikacje i custom</PricingCardPlan>
                                <PricingCardCost>Wycena indywidualna</PricingCardCost>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Projekt i wykonanie<FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Wsparcie grafika:<FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Migracja istniejących treści:<FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Wdrożenie<FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                    <PricingCardFeature>Doradztwo i wsparcie techniczne<FaCheck size={18} style={{
                                        position: 'relative',
                                        top: '0.1rem',
                                        color: 'green',
                                        marginLeft: '0.5rem'
                                    }}/></PricingCardFeature>
                                </PricingCardFeatures>
                            </PricingCardInfo>
                        </PricingCard>
                    </PricingContainer>
                    <PricingInfo>Podane ceny mają charakter orientacyjny. Rzeczywisty koszt projektu zależy od
                        ostatecznej
                        wyceny.</PricingInfo>
                </PricingWrapper>
            </PricingSection>
        </IconContext.Provider>
    );
}

export default Pricing;

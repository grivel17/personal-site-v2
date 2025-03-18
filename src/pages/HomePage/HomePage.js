import React from 'react';
import {homeObjHero, homeObjOfer1, homeObjOfer2, homeObjOmnie,} from './HomePageData';
import {InfoSection, Pricing} from '../../components';

function HomePage() {
    return (
        <>
            <section>
                <InfoSection {...homeObjHero} />
            </section>
            <section id="s1">
                <InfoSection {...homeObjOfer1} />
                <InfoSection {...homeObjOfer2} />
            </section>

            <section id='s2'>
                <Pricing/>
            </section>
            <section id='s4'>
                <InfoSection {...homeObjOmnie} />
            </section>
        </>
    );
}

export default HomePage;

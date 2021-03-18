import React from 'react';
import { homeObjHero, homeObjOfer1, homeObjOfer2, homeObjOfer3, homeObj500, homeObjOmnie,} from './Data';
import { InfoSection, Pricing } from '../../components';


function Home() {
  return (
    <>
        <section>
        <InfoSection {...homeObjHero} />
        </section>
     

        <section id="s1">
        <InfoSection {...homeObjOfer1} />
        <InfoSection {...homeObjOfer2} />
        <InfoSection {...homeObjOfer3} />
        </section>
      
      
      <section id='s2'>
        <Pricing />
      </section>

      <section id='s3'>
        <InfoSection {...homeObj500} />
      </section>
      
      <section id='s4'>
        <InfoSection {...homeObjOmnie} />
      </section>
      
    </>
  );
}

export default Home;

import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there, I'm Njonjo,<br />
        a UnityEngine Game Programmer & Designer. 
      </SectionTitle>
      <SectionText>
      Please take a look around, see what I've been up to, and let's see what we can build together.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/Juubey' }>Need a Developer? </Button>
      {/* <Button onClick={() => window.location = 'https://github.com/Juubey' }>Need a Designer? </Button> */}
      
    </LeftSection>

  </Section>
);

export default Hero;
import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there, I'm Njonjo Njubi,<br />
        I'm a Software and Game Developer. 
      </SectionTitle>
      <SectionText>
      Please take a look around, see what I've been up to, and let's see what we can build together.<br />
      <p>Browse some of my work.</p>
      </SectionText>
      <ul>
        <li>
          <Button onClick={() => window.location = 'https://github.com/Juubey' }>Need a Software Developer?</Button>
          <Button onClick={() => window.location = 'https://albert-njubi.itch.io/' }>Need a Game Dev?</Button>
        </li>
      </ul>
    </LeftSection>

  </Section>

  /**
   * Hero type effect
   
   const typed = select('.typed')
   if (typed) {
     let typed_strings = typed.getAttribute('data-typed-items')
     typed_strings = typed_strings.split(',')
     new Typed('.typed', {
       strings: typed_strings,
       loop: true,
       typeSpeed: 100,
       backSpeed: 50,
       backDelay: 2000
     });
   }
   */
);

export default Hero;
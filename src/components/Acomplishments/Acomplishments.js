import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2, text: 'Web Development Certificates'},
  { number: 5, text: 'Game Jams Participated', },
  { number: 6, text: 'Games Developed', },
  { number: 10, text: 'Github Repos', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
      <Box key={index}>
        <BoxNum>{card.number}</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;

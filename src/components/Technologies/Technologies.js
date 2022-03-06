import React from 'react';
import { DiCode, DiFirebase, DiGithub, DiJavascript, DiReact, DiUnitySmall, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <br />
    <SectionText>
      I've worked with a range of coding languages, software and version control. From back-end to Design. 
    </SectionText>
    <List>
      <ListItem>
        <DiCode size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience with <br />
            React.js, JavaScript,<br /> 
            and C++/C#.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiUnitySmall size="3rem" />
        <ListContainer>
          <ListTitle>Back-End & Engines</ListTitle>
          <ListParagraph>Experience with <br />
            Unity, Node.js <br />
            and Unreal
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGithub size="3rem" />
        <ListContainer>
          <ListTitle>Version Control</ListTitle>
          <ListParagraph>Experience with <br />
            tools like Git <br />
            and Perforce
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './HeaderIcons';
import Experience from './Experience';
import Education from './Education';
import Language from './Language';
import Skills from './Skills';
import Profile from './Profile';
import Interest from './interest';

const Contents = () => {  

  return (
    <>
    <Header  name="Contents" />

    <Container className="mt-5">
      <Profile />
      <Experience />
      <Education />
      <Skills />
      <Language />
      <Interest />
    </Container>

    </>
  );
}

export  default Contents;
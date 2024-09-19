import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './HeaderIcons';
import Experience from './Experience';
import Education from './Education';
import Language from './Language';
import Skills from './Skills';

const Contents = () => {  

  return (
    <>
    <Header  name="Contents" />

    <Container className="mt-5">
      <Experience />
      <Education />
      <Skills />
      <Language />
    </Container>

    </>
  );
}

export  default Contents;
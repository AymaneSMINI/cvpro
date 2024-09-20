import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import Header from './HeaderIcons';
import Experience from './Experience';
import Education from './Education';
import Language from './Language';
import Skills from './Skills';
import Profile from './Profile';
import Interest from './interest';
import Cookies from 'js-cookie';
import PageNextIcon from '@rsuite/icons/PageNext';


const Contents = () => {

  // Central state to store form data, initialized from cookies
  const formDataString = Cookies.get('formData');
  const [formData, setFormData] = useState(formDataString ? JSON.parse(formDataString) : {});
  console.log("data",formData);

  // Save formData to cookies whenever it changes
  useEffect(() => {
    const formDataString = JSON.stringify(formData);
    Cookies.set('formData', formDataString, { expires: 7 }); // Expires in 7 days
  }, [formData]); // Save when formData changes

  // Function to handle save and update state
  const handleSave = (section, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: data
    }));
  };
  return (
    <>
      <Header name="Contents" />
      <Container className="mt-5">
        <Profile onSave={(data) => handleSave('profile', data)} 
          initialProfileData={formData.profile || []}
          />
        <Experience 
          onSave={(data) => handleSave('experience', data)} 
          initialExperienceData={formData.experience || []} 
        />
        <Education onSave={(data) => handleSave('education', data)} 
          initialEducationData={formData.education || []}
          />
        <Skills onSave={(data) => handleSave('skills', data)} 
          initialSkillData={formData.skills || []}
          />
        <Language onSave={(data) => handleSave('language', data)} 
          initialLanguageData={formData.language || []}
          />
        <Interest onSave={(data) => handleSave('interest', data)} 
          initialInterestData={formData.interest || []}
          />
        <div class="text-center" style={{marginBottom:"30px"}}>
          <Button href='/templates' class="btn btn-outline-primary w-50 text-decoration-none" type="submit">Next <PageNextIcon /></Button>
        </div>
        <div class="text-center" style={{marginBottom:"30px"}}>
        <Button href='/mydata' variant="outline-secondary" type="submit">back</Button>
      </div>
      </Container>
    </>
  );
};

export default Contents;

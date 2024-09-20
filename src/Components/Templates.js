import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Cookies from 'js-cookie';
import Header from './HeaderIcons';
import html2pdf from 'html2pdf.js';


const CVDisplay = () => {
  // Extract formData from cookies
  const formDataString = Cookies.get('formData');
  const formData = formDataString ? JSON.parse(formDataString) : {};
  console.log(formData);
  
  // Dynamically populate the CV data with formData or default values
  const [cvData] = useState({
    name: formData.name || 'First Last Name',
    contact: {
      email: formData.contact?.email || 'email@gmail.com',
      phone: formData.contact?.phone || '(999) 999-9999',
      location: formData.contact?.location || 'City, State',
    },
    experience: formData.experience || [
      {
        first: 'Reporter',
        Second: 'Hendersonville Times-News',
        third: 'City, NC',
        fourth: 'Dec 2015',
        fifth: 'Present',
        sixth: [
          'Write four to seven stories each week under a tight deadline.',
         ],
      },
    ],
    education: formData.education || [
      {
        first: 'Bachelor of Arts, Mass Communication',
        Second: 'State University',
        third: 'May 2013',
        fourth: 'Hometown, NC',
        fifth: 'Hometown, NC',
        sixth: 'Hometown, NC',
      },
    ],
    skills: formData.skills || [{
      FirInput :'Microsoft Office',
      dropdown : "very good"
    }],
    interest: formData.interest || [{
      FirInput :'Microsoft Office',
    }],
    language: formData.language || [{
      FirInput :'Microsoft Office',
      dropdown : "very good"
    }],
  });

  const downloadPDF = () => {
    const element = document.getElementById('cv-container'); // The container with the CV content
    
    const opt = {
      margin: 0.5,
      filename: 'cv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
  
    html2pdf().from(element).set(opt).save();
  };
  return (
    <>
      <Header name="Templates" />
    
      <Container id="cv-container" style={{padding: '20px', marginBottom: "50px" }}>
        {/* Name and Contact Information */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1 style={{ fontWeight: 'normal' }}>{cvData.name}</h1>
          <p>
            {cvData.contact.email} - {cvData.contact.phone} - {cvData.contact.location}
          </p>
        </div>

        {/* Experience Section */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ textDecoration: 'underline' }}>Experience</h4>
          {cvData.experience.map((exp, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <h6>{exp.first}</h6>
              <p>
                {exp.third} - {exp.Second} 
                <span style={{"float":"right"}}>{exp.fourth} - {exp.fifth}</span>
              </p>
              <ul>
                {exp.sixth }
              </ul>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ textDecoration: 'underline' }}>Education</h4>
          {cvData.education.map((edu, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <h6>{edu.first}</h6>
              <p>
              {edu.third} - {edu.Second}<span style={{"float":"right"}}>{edu.fourth} - {edu.fifth}</span>
              </p>
              <p>
                
              </p>
            </div>
          ))}
        </div>

        {/* Language Section */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ textDecoration: 'underline' }}>Languages</h4>
          <ul>
            {cvData.language.map((language, index) => (
              <li key={index}>{language.FirInput} &nbsp;&nbsp; <b>{language.dropdown}</b> </li>
            ))}
          </ul>
        </div>
        {/* Skills Section */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ textDecoration: 'underline' }}>Skills</h4>
          <ul>
            {cvData.skills.map((skill, index) => (
              <li key={index}>{skill.FirInput} &nbsp;&nbsp; <b>{skill.dropdown}</b> </li>
            ))}
          </ul>
        </div>
        {/* interest Section */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ textDecoration: 'underline' }}>interests</h4>
          <ul>
            {cvData.interest.map((interest, index) => (
              <li key={index}>{interest.FirInput}</li>
            ))}
          </ul>
        </div>


      </Container>
      <div class="text-center">
      <button onClick={downloadPDF} class="btn btn-primary" style={{marginBottom: "30px"}}>Download CV as PDF</button>
      </div>
      <div class="text-center" style={{marginBottom:"30px"}}>
        <Button href='/contents' variant="outline-secondary" type="submit">back</Button>
      </div>
    </>
  );
};

export default CVDisplay;

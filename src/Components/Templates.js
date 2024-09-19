import React, { useState } from 'react';
import { Container,  Card, ListGroup } from 'react-bootstrap';

const CVDisplay = () => {
  // State containing dynamic CV data
  const [cvData] = useState({
    name: 'First Last Name',
    contact: {
      email: 'email@gmail.com',
      phone: '(999) 999-9999',
      location: 'City, State',
    },
    experience: [
      {
        title: 'Reporter',
        company: 'Hendersonville Times-News',
        location: 'City, NC',
        startDate: 'Dec 2015',
        endDate: 'Present',
        description: [
          'Write four to seven stories each week under a tight deadline.',
          'Develop, edit, and post content to web, Facebook, and Twitter.',
          'Analyze website traffic and target audience data to produce compelling stories.',
        ],
      },
      {
        title: 'Reporter',
        company: 'Mitchell News-Journal',
        location: 'Small town, NC',
        startDate: 'Aug 2013',
        endDate: 'Dec 2015',
        description: [
          'Created all written content and photos for the front page of the weekly newspaper.',
          'Produced three to five general news articles each week.',
        ],
      },
    ],
    education: [
      {
        degree: 'Bachelor of Arts, Mass Communication',
        university: 'State University',
        date: 'May 2013',
        location: 'Hometown, NC',
      },
    ],
    skills: ['Microsoft Office', 'Adobe Photoshop', 'WordPress', 'AP Style'],
  });

  return (
    <Container>
      {/* Name and Contact Information */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title as="h1">{cvData.name}</Card.Title>
          <Card.Text>
            <strong>Email:</strong> {cvData.contact.email}
          </Card.Text>
          <Card.Text>
            <strong>Phone:</strong> {cvData.contact.phone}
          </Card.Text>
          <Card.Text>
            <strong>Location:</strong> {cvData.contact.location}
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Experience Section */}
      <Card className="mb-4">
        <Card.Header as="h4">Experience</Card.Header>
        <Card.Body>
          {cvData.experience.map((exp, index) => (
            <div key={index} className="mb-3">
              <h5>{exp.title}</h5>
              <p>
                <strong>{exp.company}</strong> - {exp.location}
              </p>
              <p>
                {exp.startDate} - {exp.endDate}
              </p>
              <ul>
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Card.Body>
      </Card>

      {/* Education Section */}
      <Card className="mb-4">
        <Card.Header as="h4">Education</Card.Header>
        <Card.Body>
          {cvData.education.map((edu, index) => (
            <div key={index} className="mb-3">
              <h5>{edu.degree}</h5>
              <p>
                <strong>{edu.university}</strong> - {edu.location}
              </p>
              <p>{edu.date}</p>
            </div>
          ))}
        </Card.Body>
      </Card>

      {/* Skills Section */}
      <Card className="mb-4">
        <Card.Header as="h4">Skills</Card.Header>
        <Card.Body>
          <ListGroup>
            {cvData.skills.map((skill, index) => (
              <ListGroup.Item key={index}>{skill}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CVDisplay;

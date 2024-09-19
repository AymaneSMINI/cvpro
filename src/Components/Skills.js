import React, { useState } from 'react';
import DynamicForm2 from './DynamicForm2.js';
import Card from 'react-bootstrap/Card';
import { Button, ListGroup, Container, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faCog } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  
    const [formsSkills, setFormsSkills] = useState([]);
    const [editingIndexSkills, setEditingIndexSkills] = useState(null);

    // Editable headers for each section
    const [headerSkills, setHeaderSkills] = useState("Skills");
  
    // Toggle editable header mode
    const [isEditingHeaderSkills, setIsEditingHeaderSkills] = useState(false);
  
    // Dynamic labels for forms
    const labelsSkills = {
      mainLabel: "Skill",
      dropLabel: "Level",
    };

    const placeholdersSkills = {
        FirstPlaceholder: "ex. Microsoft Word",
        SecondPlaceholder: "Select",
    };
    
    // Add form functions for Skills and Education
    const addFormSkills = () => {
      setEditingIndexSkills(formsSkills.length);
      setFormsSkills([...formsSkills, { FirInput: '', dropdown: '' }]);
    };
  
    // Save form data functions
    const saveFormSkills = (index, formData) => {
      const updatedForms = formsSkills.map((form, i) => (i === index ? formData : form));
      setFormsSkills(updatedForms);
      setEditingIndexSkills(null);
    };
  
    // Edit form functions
    const editFormSkills = (index) => setEditingIndexSkills(index);
  
    // Remove form functions
    const removeFormSkills = (index) => setFormsSkills(formsSkills.filter((_, i) => i !== index));
  
    // Toggle header edit functions
    const toggleHeaderEditSkills = () => setIsEditingHeaderSkills(!isEditingHeaderSkills);
  
    const dropdownOptions = ['Very good', 'Good', 'Satisfactory', 'Intermediate', 'Beginner']; // Dynamic dropdown options

  return (
   <>
   <Container className="mt-5">
        {/* Skills Card */}
        <Card className="mb-4">
          <Card.Header>
            <div className="d-flex align-items-center justify-content-between">
              {isEditingHeaderSkills ? (
                <Form.Control
                  type="text"
                  value={headerSkills}
                  onChange={(e) => setHeaderSkills(e.target.value)}
                  onBlur={toggleHeaderEditSkills}
                  autoFocus
                />
              ) : (
                <h6>{headerSkills}</h6>
              )}
              <Button variant="light" onClick={toggleHeaderEditSkills}>
                <FontAwesomeIcon icon={faCog} />
              </Button>
            </div>
          </Card.Header>
          <Card.Body>
            <ListGroup>
              {formsSkills.map((form, index) => (
                <ListGroup.Item key={index}>
                  {editingIndexSkills === index ? (
                    <DynamicForm2
                      onSave={saveFormSkills}
                      index={index}
                      form={form}
                      labels={labelsSkills}
                      dropdownOptions={dropdownOptions}
                      placeholders={placeholdersSkills}
                    />
                  ) : (
                    <div className="d-flex justify-content-between align-items-center">
                                  <div className="d-flex flex-column">
                                      <h6>{form.FirInput || 'Skill'}</h6>
                                      <p>{form.dropdown || 'Select'}</p>
                                  </div>
                      <div>
                        <Button variant="light" onClick={() => editFormSkills(index)} className="me-2">
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Button variant="danger" onClick={() => removeFormSkills(index)}>
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </Button>
                      </div>
                    </div>
                  )}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Button className="mt-3" variant="primary" onClick={addFormSkills}>
              <FontAwesomeIcon icon={faPlus} /> Add Skills
            </Button>
          </Card.Body>
        </Card>
      </Container>
   </>
  );
};

export default Skills;

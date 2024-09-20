import React, { useEffect, useState } from 'react';
import { Button, ListGroup, Container, Form } from 'react-bootstrap';
import DynamicForm from './DynamicForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faCog } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';

export const Experience = ({ onSave, initialExperienceData = [] }) => {  // Receive the onSave prop from the parent
    const [formsExperience, setFormsExperience] = useState([]);
    const [editingIndexExperience, setEditingIndexExperience] = useState(null);

    // Editable headers for each section
    const [headerExperience, setHeaderExperience] = useState("Experience");
  
    // Toggle editable header mode
    const [isEditingHeaderExperience, setIsEditingHeaderExperience] = useState(false);
  
    // Dynamic labels for forms
    const labelsExperience = {
      mainLabel: "Function",
      descriptionLabel: "Location",
      dateLabel: "Start Date",
      Employer: "Employer",
      monthYearLabel: "End Date",
      additionalFieldLabel: "Description"
    };

    const placeholdersExperience = {
      FirstPlaceholder: "ex. Front end developer",
      SecondPlaceholder: "ex. New York",
      ThirdPlaceholder: "ex. Google",
      FourthPlaceholder: "",
      fifthPlaceholder: "",
      sixthPlaceholder: ""
    };
    useEffect(() => {
      if (initialExperienceData.length > 0) {
        setFormsExperience(initialExperienceData);  // Set initial data from props
      }
    }, [initialExperienceData]); 
    
    // Add form functions for Experience
    const addFormExperience = () => {
      setEditingIndexExperience(formsExperience.length);
      setFormsExperience([...formsExperience, { first: '',second: '',third: '',fourth: '',fifth: '',sixth: '' }]);
    };

    // Save form data functions
    const saveFormExperience = (index, formData) => {
      const updatedForms = formsExperience.map((form, i) => (i === index ? formData : form));
      setFormsExperience(updatedForms);
      setEditingIndexExperience(null);
      onSave(updatedForms);  // Explicitly call onSave after saving the form
    };

    // Edit form functions
    const editFormExperience = (index) => setEditingIndexExperience(index);

    // Remove form functions
    const removeFormExperience = (index) => {
      const updatedForms = formsExperience.filter((_, i) => i !== index);
      setFormsExperience(updatedForms);
      onSave(updatedForms);  // Explicitly call onSave after removing a form
    };

    // Toggle header edit functions
    const toggleHeaderEditExperience = () => setIsEditingHeaderExperience(!isEditingHeaderExperience);

    return (
      <>  
        <Container className="mt-5">
          {/* Experience Card */}
          <Card className="mb-4">
            <Card.Header>
              <div className="d-flex align-items-center justify-content-between">
                {isEditingHeaderExperience ? (
                  <Form.Control
                    type="text"
                    value={headerExperience}
                    onChange={(e) => setHeaderExperience(e.target.value)}
                    onBlur={toggleHeaderEditExperience}
                    autoFocus
                  />
                ) : (
                  <h6>{headerExperience}</h6>
                )}
                <Button variant="light" onClick={toggleHeaderEditExperience}>
                  <FontAwesomeIcon icon={faCog} />
                </Button>
              </div>
            </Card.Header>
            <Card.Body>
              <ListGroup>
                {formsExperience.map((form, index) => (
                  <ListGroup.Item key={index}>
                    {editingIndexExperience === index ? (
                      <DynamicForm
                        onSave={saveFormExperience}
                        index={index}
                        form={form}
                        labels={labelsExperience}
                        placeholders={placeholdersExperience}
                      />
                    ) : (
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                          <h6>{form.first || 'Function'}</h6>
                          <p>{form.fourth || 'September 2024'} - {form.fifth || 'September 2024'}</p>
                        </div>
                        <div>
                          <Button variant="light" onClick={() => editFormExperience(index)} className="me-2">
                            <FontAwesomeIcon icon={faEdit} />
                          </Button>
                          <Button variant="danger" onClick={() => removeFormExperience(index)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                          </Button>
                        </div>
                      </div>
                    )}
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Button className="mt-3" variant="primary" onClick={addFormExperience}>
                <FontAwesomeIcon icon={faPlus} /> Add Experience
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
};

export default Experience;

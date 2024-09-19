import React, { useState } from 'react';
import { Button, ListGroup, Container, Form } from 'react-bootstrap';
import DynamicForm from './DynamicForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faCog } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';


const Education = () => {

    // State for Education forms
    const [formsEducation, setFormsEducation] = useState([]);
    const [editingIndexEducation, setEditingIndexEducation] = useState(null);
  
    // Editable headers for each section
    const [headerEducation, setHeaderEducation] = useState("Education");
  
    // Toggle editable header mode
    const [isEditingHeaderEducation, setIsEditingHeaderEducation] = useState(false);
  
    // Dynamic labels for forms
  
    const labelsEducation = {
      mainLabel: "School education",
      descriptionLabel: "Location",
      Employer: "Educational establishment",
      dateLabel: "Start Date",
      monthYearLabel: "End Date",
      additionalFieldLabel: "Description"
    };

    const placeholdersEducation = {
        FirstPlaceholder: "ex. Software engineer",
        SecondPlaceholder: "ex. Massachusetts, United states",
        ThirdPlaceholder: "Harvard",
        FourthPlaceholder: "",
        fifthPlaceholder: "",
        sixthPlaceholder: ""
      };
    
    // Add form functions for Education

    const addFormEducation = () => {
      setEditingIndexEducation(formsEducation.length);
      setFormsEducation([...formsEducation, { value: '', description: '', fullDate: '', monthYear: '', additionalField: '' }]);
    };
  
    // Save form data functions
  
    const saveFormEducation = (index, formData) => {
      const updatedForms = formsEducation.map((form, i) => (i === index ? formData : form));
      setFormsEducation(updatedForms);
      setEditingIndexEducation(null);
    };
  
    // Edit form functions
    const editFormEducation = (index) => setEditingIndexEducation(index);
  
    // Remove form functions
    const removeFormEducation = (index) => setFormsEducation(formsEducation.filter((_, i) => i !== index));
  
    // Toggle header edit functions
    const toggleHeaderEditEducation = () => setIsEditingHeaderEducation(!isEditingHeaderEducation);
  
    return (
      <>
  
      <Container className="mt-5">
        {/* Education Card */}
        <Card className="mb-4">
          <Card.Header>
            <div className="d-flex align-items-center justify-content-between">
              {isEditingHeaderEducation ? (
                <Form.Control
                  type="text"
                  value={headerEducation}
                  onChange={(e) => setHeaderEducation(e.target.value)}
                  onBlur={toggleHeaderEditEducation}
                  autoFocus
                />
              ) : (
                <h6>{headerEducation}</h6>
              )}
              <Button variant="light" onClick={toggleHeaderEditEducation}>
                <FontAwesomeIcon icon={faCog} />
              </Button>
            </div>
          </Card.Header>
          <Card.Body>
            <ListGroup>
              {formsEducation.map((form, index) => (
                <ListGroup.Item key={index}>
                  {editingIndexEducation === index ? (
                    <DynamicForm
                      onSave={saveFormEducation}
                      index={index}
                      form={form}
                      labels={labelsEducation}
                      placeholders={placeholdersEducation }
                    />
                  ) : (
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex flex-column">
                                      <h6>{form.value || 'Education'}</h6>
                                      <p>{form.fullDate || 'Septembre 2024'} - {form.untildate || 'Septembre 2024'}</p>
                      </div>
                      <div>
                        <Button variant="light" onClick={() => editFormEducation(index)} className="me-2">
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Button variant="danger" onClick={() => removeFormEducation(index)}>
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </Button>
                      </div>
                    </div>
                  )}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Button className="mt-3" variant="primary" onClick={addFormEducation}>
              <FontAwesomeIcon icon={faPlus} /> Add Education
            </Button>
          </Card.Body>
        </Card>
      </Container>
  
      </>
    );
  }
  
export  default Education;

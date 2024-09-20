import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Button, ListGroup, Container, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faCog } from '@fortawesome/free-solid-svg-icons';
import DynamicForm3 from './DynamicForm3.js';

const Interest = ({onSave, initialInterestData = [] }) => {
  
    const [formsInterest, setFormsInterest] = useState([]);
    const [editingIndexInterest, setEditingIndexInterest] = useState(null);

    // Editable headers for each section
    const [headerInterest, setHeaderInterest] = useState("Interest");
  
    // Toggle editable header mode
    const [isEditingHeaderInterest, setIsEditingHeaderInterest] = useState(false);
  
    // Dynamic labels for forms
    const labelsInterest = {
      mainLabel: "Description",
    };

    const placeholdersInterest = {
        FirstPlaceholder: "",
    };
    useEffect(() => {
      if (initialInterestData.length > 0) {
        setFormsInterest(initialInterestData);  // Set initial data from props
      }
    }, [initialInterestData]); 
    // Add form functions for Interest and 
    const addFormInterest = () => {
      setEditingIndexInterest(formsInterest.length);
      setFormsInterest([...formsInterest, { FirInput: '' }]);
    };
  
    // Save form data functions
    const saveFormInterest = (index, formData) => {
      const updatedForms = formsInterest.map((form, i) => (i === index ? formData : form));
      setFormsInterest(updatedForms);
      setEditingIndexInterest(null);
      onSave(updatedForms); 
    };
  
    // Edit form functions
    const editFormInterest = (index) => setEditingIndexInterest(index);
  
    // Remove form functions
    const removeFormInterest = (index) => setFormsInterest(formsInterest.filter((_, i) => i !== index));
  
    // Toggle header edit functions
    const toggleHeaderEditInterest = () => setIsEditingHeaderInterest(!isEditingHeaderInterest);
  
  return (
   <>
   <Container className="mt-5">
        {/* Interest Card */}
        <Card className="mb-4">
          <Card.Header>
            <div className="d-flex align-items-center justify-content-between">
              {isEditingHeaderInterest ? (
                <Form.Control
                  type="text"
                  value={headerInterest}
                  onChange={(e) => setHeaderInterest(e.target.value)}
                  onBlur={toggleHeaderEditInterest}
                  autoFocus
                />
              ) : (
                <h6>{headerInterest}</h6>
              )}
              <Button variant="light" onClick={toggleHeaderEditInterest}>
                <FontAwesomeIcon icon={faCog} />
              </Button>
            </div>
          </Card.Header>
          <Card.Body>
            <ListGroup>
              {formsInterest.map((form, index) => (
                <ListGroup.Item key={index}>
                  {editingIndexInterest === index ? (
                    <DynamicForm3
                      onSave={saveFormInterest}
                      index={index}
                      form={form}
                      labels={labelsInterest}
                      placeholders={placeholdersInterest}
                    />
                  ) : (
                    <div className="d-flex justify-content-between align-items-center">
                                  <div className="d-flex flex-column">
                                      <h6>{form.FirInput || ''}</h6>
                                  </div>
                      <div>
                        <Button variant="light" onClick={() => editFormInterest(index)} className="me-2">
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Button variant="danger" onClick={() => removeFormInterest(index)}>
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </Button>
                      </div>
                    </div>
                  )}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Button className="mt-3" variant="primary" onClick={addFormInterest}>
              <FontAwesomeIcon icon={faPlus} /> Add Interest
            </Button>
          </Card.Body>
        </Card>
      </Container>
   </>
  );
};

export default Interest;

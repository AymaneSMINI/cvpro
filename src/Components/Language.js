import React, { useEffect, useState } from 'react';
import DynamicForm2 from './DynamicForm2.js';
import Card from 'react-bootstrap/Card';
import { Button, ListGroup, Container, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faCog } from '@fortawesome/free-solid-svg-icons';

const Language = ({onSave, initialLanguageData = [] }) => {
  
    const [formsLangauge, setFormsLanguage] = useState([]);
    const [editingIndexLangauge, setEditingIndexLangauge] = useState(null);

    // Editable headers for each section
    const [headerLangauge, setHeaderLangauge] = useState("Langauge");
  
    // Toggle editable header mode
    const [isEditingHeaderLangauge, setIsEditingHeaderLangauge] = useState(false);
  
    // Dynamic labels for forms
    const labelsLangauge = {
      mainLabel: "language",
      dropLabel: "Level",
    };

    const placeholdersLangauge = {
        FirstPlaceholder: "ex. English",
        SecondPlaceholder: "Select",
    };
    
    // Add form functions for Langauge and Language
    const addFormLangauge = () => {
      setEditingIndexLangauge(formsLangauge.length);
      setFormsLanguage([...formsLangauge, { FirInput: '', dropdown: '' }]);
    };
  
    // Save form data functions
    const saveFormLangauge = (index, formData) => {
      const updatedForms = formsLangauge.map((form, i) => (i === index ? formData : form));
      setFormsLanguage(updatedForms);
      setEditingIndexLangauge(null);
      onSave(updatedForms); 
    };
    
    useEffect(() => {
      if (initialLanguageData.length > 0) {
        setFormsLanguage(initialLanguageData);  // Set initial data from props
      }
    }, [initialLanguageData]); 
    // Edit form functions
    const editFormLangauge = (index) => setEditingIndexLangauge(index);
  
    // Remove form functions
    const removeFormLangauge = (index) => setFormsLanguage(formsLangauge.filter((_, i) => i !== index));
  
    // Toggle header edit functions
    const toggleHeaderEditLangauge = () => setIsEditingHeaderLangauge(!isEditingHeaderLangauge);
  
    const dropdownOptions = ['Native language', 'Fluent', 'Satisfactory', 'Average', 'Basic knowledge','A1', 'A2', 'B1', 'B2','C1', 'C2']; // Dynamic dropdown options

  return (
   <>
   <Container className="mt-5">
        {/* Langauge Card */}
        <Card className="mb-4">
          <Card.Header>
            <div className="d-flex align-items-center justify-content-between">
              {isEditingHeaderLangauge ? (
                <Form.Control
                  type="text"
                  value={headerLangauge}
                  onChange={(e) => setHeaderLangauge(e.target.value)}
                  onBlur={toggleHeaderEditLangauge}
                  autoFocus
                />
              ) : (
                <h6>{headerLangauge}</h6>
              )}
              <Button variant="light" onClick={toggleHeaderEditLangauge}>
                <FontAwesomeIcon icon={faCog} />
              </Button>
            </div>
          </Card.Header>
          <Card.Body>
            <ListGroup>
              {formsLangauge.map((form, index) => (
                <ListGroup.Item key={index}>
                  {editingIndexLangauge === index ? (
                    <DynamicForm2
                      onSave={saveFormLangauge}
                      index={index}
                      form={form}
                      labels={labelsLangauge}
                      dropdownOptions={dropdownOptions}
                      placeholders={placeholdersLangauge}
                    />
                  ) : (
                    <div className="d-flex justify-content-between align-items-center">
                                  <div className="d-flex flex-column">
                                      <h6>{form.FirInput || 'Language'}</h6>
                                      <p>{form.dropdown || 'Select'}</p>
                                  </div>
                      <div>
                        <Button variant="light" onClick={() => editFormLangauge(index)} className="me-2">
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Button variant="danger" onClick={() => removeFormLangauge(index)}>
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </Button>
                      </div>
                    </div>
                  )}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Button className="mt-3" variant="primary" onClick={addFormLangauge}>
              <FontAwesomeIcon icon={faPlus} /> Add Langauge
            </Button>
          </Card.Body>
        </Card>
      </Container>
   </>
  );
};

export default Language;

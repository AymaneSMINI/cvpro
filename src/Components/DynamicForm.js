// DynamicForm.js
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const DynamicForm = ({ onSave, index, form, labels, placeholders }) => {
  
  const [fields, setFields] = useState(form);

  const handleInputChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(index, fields); // Save label with form data
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* First input */}
      <Row className="mb-3">
        <Col>
          <Form.Group controlId={`name${index}`}>
            <Form.Label>{labels.mainLabel}</Form.Label>
            <Form.Control
              type="text"
              name="first"
              placeholder={placeholders.FirstPlaceholder}
              value={fields.first}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        {/* Second input */}
        <Col>
          <Form.Group controlId={`description${index}`}>
            <Form.Label>{labels.descriptionLabel}</Form.Label>
            <Form.Control
              type="text"
              name="Second"
              placeholder={placeholders.SecondPlaceholder}
              value={fields.Second || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>

      {/* third Field */}
      <Row className="mb-6">
        <Col>
          <Form.Group controlId={`Employer${index}`}>
            <Form.Label>{labels.Employer}</Form.Label>
            <Form.Control
              type="text"
              name="third"
              placeholder={placeholders.ThirdPlaceholder}
              value={fields.third || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>

      {/* 4th and 5th field  */}
      <Row className="mb-3">
        <Col>
          <Form.Group controlId={`datePicker${index}`}>
            <Form.Label>{labels.dateLabel}</Form.Label>
            <Form.Control
              type="date"
              name="fourth"
              placeholder={placeholders.FourthPlaceholder}
              value={fields.fourth || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId={`datePicker${index}`}>
            <Form.Label>{labels.monthYearLabel}</Form.Label>
            <Form.Control
              type="date"
              name="fifth"
              placeholder={placeholders.fifthPlaceholder}
              value={fields.fifth || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>

      {/* 6th Field */}
      <Row className="mb-3">
        <Col>
          <Form.Group controlId={`additionalField${index}`}>
            <Form.Label>{labels.additionalFieldLabel}</Form.Label>
            <Form.Control
              type="text"
              name="sixth"
              placeholder={placeholders.sixthPlaceholder}
              value={fields.sixth || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>

      {/* Save Button */}
      <Row className="mb-3">
        <Col xs="auto">
          <Button variant="success" type="submit" className="mt-4">
            Save
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default DynamicForm;
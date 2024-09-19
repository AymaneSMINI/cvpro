import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const DynamicForm3 = ({ onSave, index, form, labels, placeholders }) => {

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
            name="FirInput"
            placeholder={placeholders.FirstPlaceholder}
            value={fields.FirInput}
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

export default DynamicForm3;
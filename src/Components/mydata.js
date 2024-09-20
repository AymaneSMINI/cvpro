import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Header from './HeaderIcons';
import PageNextIcon from '@rsuite/icons/PageNext';
import styles from './styles.module.css';

const Mydata = () => {
  const [validated, setValidated] = useState(false);
  const [phone, setPhone] = useState(); // For phone number input
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      // Log form values
      console.log('Full Name:', fullName);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Address:', address);
    }

    setValidated(true);
  };

  return (
    <>
      <Header name="My data" />
      <div>
        <div style={{ marginBottom: '30px' }}>
          <Card className={styles.head1}>
            <Card.Header>My data</Card.Header>
            <Card.Body>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-2">
                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Mark Delot"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Mark@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Phone</Form.Label>
                    <PhoneInput
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={setPhone}
                      className="form-control"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom04">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="New York, United States"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Form.Group>
                </Row>
                <Row className="text-center">
                  <Button
                    href="/contents"
                    className="btn btn-outline-primary w-50 text-decoration-none"
                    type="submit"
                  >
                    Next <PageNextIcon />
                  </Button>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Mydata;

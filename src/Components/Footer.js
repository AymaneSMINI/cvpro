import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Myimg from './../assets/cvpro.png'
import styles from './styles.module.css'
const Footer = () => {
  return (
      <Container className={styles.container}>
    <Row>
      <Col style={{ "text-align": "center", "margin-top" : "60px"}}><img src= {Myimg} alt='' style={{"width" : "200px"}}/></Col>
      <Col style={{ color: '#ffffff', "margin" : "20px"}}><h1>Who we are ?</h1>
      We are a team of passionate developers dedicated to simplifying the CV creation process. Our website is designed to help users create professional, well-structured CVs with ease, eliminating the hassle of manual formatting and design. Whether you're a job seeker looking to make a great first impression or simply in need of an updated resume, our platform provides an intuitive solution to generate a CV quickly, allowing you to focus on what really matters showcasing your skills and experience.</Col>
    </Row>
    <Row className={styles.copyright}><span>Copyright © 2024 CVpro</span></Row>
  </Container>
  )
}

export default Footer;
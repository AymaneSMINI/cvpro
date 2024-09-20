import React from 'react'
import styles from './styles.module.css'
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
const Home = () => {

  return (
  <div className = {styles.home}>
    <div>
    <h2 className = {styles.head1}>Quickly write a professional CV</h2>
   <h6 className = {styles.head1}>Write a CV and download it immediately. In less than 15 minutes.</h6>
    </div>
   <div  class="text-center" style={{marginBottom: "20px"}}>
   <Button class="btn btn-outline-primary m-4 text-decoration-none "href="/mydata" size="lg"> make CV</Button>
   </div>
      <Card className={styles.head1}>
        <Card.Header>Quick and Easy</Card.Header>
        <Card.Body>
          <Card.Text>
            Our online CV writing tool allows anyone to quickly create a professional CV. You enter your personal data before starting to write your CV content and download your CV.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className={styles.head1}>
        <Card.Header>Better Chances of Getting a Job</Card.Header>
        <Card.Body>
          <Card.Text>
            Writing a relevant and professional CV will make you stand out from other job seekers. You will have approximately 65% more chances of receiving an invitation for a selection interview.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className={styles.head1}>
        <Card.Header>Organize Your Applications</Card.Header>
        <Card.Body>
          <Card.Text>
            It is often crucial to tailor your CV based on the job you are applying for. The CVpro writing tool allows you to create and manage multiple CVs in an organized manner within a personal environment.
          </Card.Text>
        </Card.Body>
      </Card>
  </div>
  )
}

export default Home;
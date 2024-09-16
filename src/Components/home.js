import React from 'react'
import styles from './styles.module.css'
import Button from 'react-bootstrap/Button';
const Home = () => {

  return (
  <div className = {styles.home}>
    <div>
    <h2 className = {styles.head1}>Quickly write a professional CV</h2>
   <h6 className = {styles.head1}>Write a CV and download it immediately. In less than 15 minutes.</h6>
    </div>
   <div  class="text-center">
   <Button class="btn btn-outline-primary m-4 text-decoration-none " size="lg"><a href="/mydata"> make CV</a></Button>
   </div>
  </div>
  )
}

export default Home;
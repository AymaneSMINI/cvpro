import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AppRouter from './Components/AppRouter';

function App() {
    return  (
      <React.Fragment>
        <Navbar />
        <AppRouter />
        <Footer />
      </React.Fragment>
      );
  } 


export default App;

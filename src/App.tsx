import React from 'react';
import './App.css';
import Topbar from './components/topbar';
import Features from './sections/Features';
import Footer from './sections/Footer';
import Header from './sections/Header';
import HowWorks from './sections/HowWorks';
import Mailing from './sections/Mailing';
import Testimonials from './sections/Testimonials';

function App() {

	// this is a comment

  return (
    <div>

      <Topbar/>
      <Header/>

      <div id='content' className='bg-main-dark-blue'>
        
        <Features/>
        <HowWorks/>
        <Testimonials/>
        <Mailing/>

      </div>

      <Footer/>
    
    </div>
  );
}

export default App;

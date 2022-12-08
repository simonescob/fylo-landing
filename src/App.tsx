import React from 'react';
import './App.css';
import Topbar from './components/topbar';
import Features from './sections/Features';
import Header from './sections/Header';
import HowWorks from './sections/HowWorks';
import Testimonials from './sections/Testimonials';

function App() {
  return (
    <div>

      <Topbar/>
      <Header/>

      <div id='content' className='bg-main-dark-blue'>
        
        <Features/>
        <HowWorks/>
        <Testimonials/>

      </div>

    </div>
  );
}

export default App;

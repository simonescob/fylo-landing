import React from 'react';
import './App.css';
import Topbar from './components/topbar';
import Features from './sections/Features';
import Header from './sections/Header';

function App() {
  return (
    <div>

      <Topbar/>
      <Header/>
      <Features/>

    </div>
  );
}

export default App;

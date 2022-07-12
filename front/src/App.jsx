import React from 'react';
import './App.css';
import HeaderBar from './components/homepage/header/header';
import NavBar from './components/homepage/nav/nav';
import HomeBar from './components/homepage/homepage/homepage';
import RightBar from './components/homepage/right/right';

const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderBar />
      <NavBar />
      <HomeBar />
      <RightBar />
    </div>
  );
};

export default App;

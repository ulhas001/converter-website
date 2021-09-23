import React, { useState } from 'react';
import logo from './layout/undraw_Location_search_re_ttoj.svg';
import logo1 from './layout/undraw_video_files_fu10.svg';
import logo2 from './layout/undraw_Images_re_0kll.svg';
import './App.css';
import { Link, BrowserRouter } from 'react-router-dom';

import Nav from './components/Nav';
import Section from './components/Section';

const App = () => {

  return (
    <BrowserRouter>
          <Nav/>
        <Section/>
    </BrowserRouter>
  );
};

export default App;

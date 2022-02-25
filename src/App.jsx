import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTitle } from '@react-hook';
import Home from '@/pages/Home';
import Setting from '@/pages/Setting';
import './App.scss';

const App = () => {
  useTitle('JSW PlayGround');

  return (
    <div id="App">
      <div>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/setting' element={<Setting />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
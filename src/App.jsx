import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTitle } from '@react-hook';
import Home from '@/pages/Home';
import Setting from '@/pages/Setting';
import Dev from '@/pages/Dev';
import './App.scss';

const App = () => {
  useTitle('JSW PlayGround');

  return (
    <div id="App">
      <div>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/setting' element={<Setting />} exact />
          <Route path='/dev' element={<Dev />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
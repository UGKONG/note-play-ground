import React from 'react';
import Styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { useTitle } from '@react-hook';
import Header from '@/pages/Common/Header';
import Home from '@/pages/Home';
import About from '@/pages/About';
import styles from '../modules/styles';

export default () => {
  useTitle('준비가 완료되었습니다.');
  return (
    <Main>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/about' element={<About />} exact />
      </Routes>
    </Main>
  );
}

const Main = Styled.main`
  ${styles.wrap()}
  ${styles.flex('center', 'column')}
  overflow: auto;

  div > * {
    text-align: center;
    display: block;
  }
`;
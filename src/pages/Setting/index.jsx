import React from 'react';
import Styled from 'styled-components';
import { PageAnimate } from '@react-hook';

const Setting = () => {
  
  return (
    <PageAnimate name='slide-up'>
      <main>
        설정 파일
      </main>
    </PageAnimate>
  )
}
export default Setting;

const Table = Styled.table`
  th {
    text-align: center;
    &:first-of-type { width: 300px }
    &:last-of-type { width: 200px }
  }
  td {
    &:last-of-type { cursor: pointer }
  }
`;
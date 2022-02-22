import React from 'react';
import Styled from 'styled-components';
import { PageAnimate } from '@react-hook';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillApi } from 'react-icons/ai';
import styles from '../../../modules/styles';

export default () => {
  const dispatch = useDispatch();
  const number = useSelector(state => state.number);
  
  return (
    <PageAnimate name='slide-up'>
      <Home>
        <h1><span>React APP</span>이 준비되었습니다</h1>
        <br />
        <AiFillApi size={40} color='orange' />
        <b>Num: { number }</b>
        <p>
          <button onClick={() => 
            dispatch({ type: 'setNumber', payload: number + 1 })
          }>UP</button>
          <button onClick={() => 
            dispatch({ type: 'setNumber', payload: number - 1 })
          }>DOWN</button>
        </p>
      </Home>
    </PageAnimate>
  )
}
const Home = Styled.section`
  text-align: center;

  span {
    color: #5a02aa;
  }
  b {
    display: block;
    margin-top: 20px;
    color: ${styles.red};
  }
  p {
    padding: 30px 0 20px;
    ${styles.font('16px', 500)}
  }
`;
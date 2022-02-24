import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { PageAnimate, useCleanArray } from '@react-hook';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillApi } from 'react-icons/ai';
import styles from '../../../modules/styles';

export default () => {
  const dispatch = useDispatch();
  const number = useSelector(state => state.number);
  
  return (
    <PageAnimate name='slide-up'>
      <Home>
        <button onClick={() => {
          setArr([
            //{ 고유번호, 순서, 타입, 제목 }
            // 객관식(넘버): 1 / 객관식(텍스트): 2 / 주관식: 3
            { askSeq: '1', category: 4, categoryName: '카테고리1', order: '1', type: '1', title: '가구를 붙잡고 앉는다.', allCount: '114' },
            { askSeq: '2', category: 4, categoryName: '카테고리2', order: '2', type: '1', title: '가구를 붙잡고 일어선다.', allCount: '200' },
            { askSeq: '3', category: 2, categoryName: '카테고리2', order: '3', type: '1', title: '가구를 잡고 걷는다.', allCount: '100' },
            { askSeq: '3', category: 5, categoryName: '카테고리2', order: '3', type: '1', title: '가구를 잡고 걷는다.', allCount: '100' },
            { askSeq: '3', category: 56, categoryName: '카테고리2', order: '3', type: '1', title: '가구를 잡고 걷는다.', allCount: '100' },
          ])
        }}>TEST</button>
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
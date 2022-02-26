/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { PageAnimate } from '@react-hook';
import API from '@modules/API';
import _ from 'lodash';
import Note from './Note';
import NotePlus from './NotePlus';
import './index.scss';

const Home = () => {
  const [noteList, setNoteList] = useState([]);
  
  const getNoteList = e => {
    API.get('/noteList.json').then(({data}) => {
      setNoteList(_.map(data, (item, key) => {
        let data = {...item};
        data.id = key;
        return data;
      }));
    });
  }

  useEffect(getNoteList, []);
  
  return (
    <PageAnimate name='slide-up'>
      <ul className='note-list'>
        {noteList.map(item => <Note key={item.id} item={item}/>)}
        <NotePlus getNoteList={getNoteList} />
      </ul>
    </PageAnimate>
  )
}

export default Home;
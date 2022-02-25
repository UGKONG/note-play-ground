/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import API from '@modules/API';
import './NotePlus.scss';
import { useDateFormat, useTimeFormat } from '@modules/functions';

const NotePlus = ({ getNoteList }) => {

  const click = e => {
    let data = {
      color: '#fde7cc',
      title: '',
      contents: '',
      date: useDateFormat() + ' ' + useTimeFormat(),
    }
    API.post('/noteList.json', data).then(res => {
      console.log(res.status);
      res.status < 400 && getNoteList();
    })
  }

  return (
    <li className='NotePlus' onClick={click}>
      <div><span /><span /></div>
    </li>
  )
}

export default NotePlus;
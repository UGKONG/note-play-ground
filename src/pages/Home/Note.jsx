/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from 'react';
import { useDateFormat, useTimeFormat } from '@modules/functions';
import API from '@modules/API';
import './Note.scss';

const Note = ({ item }) => {
  const noteRef = useRef(null);
  const [title, setTitle] = useState(item.title);
  const [contents, setContents] = useState(item.contents);
  const [isSaveDelay, setSaveDelay] = useState(false);
  const [isSave, setSave] = useState(false);
  const [date, setDate] = useState(item.date);
  const [color, setColor] = useState(item.color);
  const [timer, setTimer] = useState(null);
  
  const titleChange = e => setTitle(e.target.value);
  const contentsChange = e => setContents(e.target.value);
  const saveTextView = () => {
    setSave(true);
    setTimeout(() => setSave(false), 2000);
  }
  const textSave = () => {
    let data = { title, contents, date: useDateFormat() + ' ' + useTimeFormat() }
    API.patch('/noteList/' + item.id + '.json', data)
      .then(res => saveTextView());
  }
  const autoSave = () => {
    setTimer(null);
    clearTimeout(timer);

    setTimer(
      setTimeout(() => {
        setTimer(null);
        textSave();
      }, 2000)
    );
  }
  useEffect(autoSave, [title, contents]);

  return (
    <li 
      className='Note' ref={noteRef}
      style={{ backgroundColor: color }}
    >
      <div className='options'>
        <div className='span-wrap'>
          <span /><span /><span />
        </div>
      </div>
      <div className='title'>
        <input placeholder='메모지 제목' value={title} onChange={titleChange} />
      </div>
      <textarea placeholder='내용' value={contents} onChange={contentsChange} />
      <div className='date'>
        <span>{date}</span>
        { isSave && <span>저장됨</span> }
      </div>
    </li>
  )
}

export default Note;
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import API from '@modules/API';
import './Note.scss';

const Note = ({ item }) => {
  const [title, setTitle] = useState(item.title);
  const [contents, setContents] = useState(item.contents);
  const [autoSaveTime] = useState(1000);
  const [isSave, setSave] = useState(false);
  const [date, setDate] = useState(item.date);
  const [color, setColor] = useState(item.color);
  const [timer, setTimer] = useState(null);
  
  const titleChange = e => setTitle(e.target.value);  // 제목 State 변경
  const contentsChange = e => setContents(e.target.value);  // 내용 State 변경
  const saveTextView = () => {  // 저장됨 텍스트 출력
    setSave(true);
    setTimeout(() => setSave(false), autoSaveTime * 2);
  }
  const textSave = () => {  // 제목, 내용 저장
    let data = { title, contents };
    API.patch('/noteList/' + item.id + '.json', data)
      .then(() => saveTextView());
  }
  const autoSave = () => {  // 입력후 autoSaveTime ms 후 자동 저장
    setTimer(null);
    clearTimeout(timer);

    setTimer(
      setTimeout(() => {
        textSave();
      }, autoSaveTime)
    );
  }

  useEffect(autoSave, [title, contents]);

  const styles = {
    note: { backgroundColor: color }
  }
  return (
    <li className='Note' style={styles.note}>
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
        <span>생성일시: {date}</span>
        { isSave && <span>저장됨</span> }
      </div>
    </li>
  )
}

export default Note;
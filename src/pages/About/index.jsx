import React from 'react';
import Styled from 'styled-components';
import { PageAnimate } from '@react-hook';

export default () => {
  const head = ['모듈명', '공식문서'];
  const body = [
    { name: 'React', url: 'https://ko.reactjs.org/docs/getting-started.html' },
    { name: 'ReactDOM', url: 'https://ko.reactjs.org/docs/react-dom.html' },
    { name: 'React Redux', url: 'https://react-redux.js.org/introduction/getting-started' },
    { name: 'Sass', url: 'https://sass-lang.com/documentation/syntax' },
    { name: 'axios', url: 'https://axios-http.com/kr/docs/intro' },
    { name: 'react-icons', url: 'https://react-icons.github.io/react-icons/' },
    { name: 'json-server', url: 'https://www.npmjs.com/package/json-server' },
    { name: 'Babel', url: 'https://babeljs.io/' },
    { name: 'Webpack', url: 'https://webpack.js.org/' },
    { name: 'framer-motion', url: 'https://www.framer.com/docs/animation/' },
    { name: 'styled-components', url: 'https://styled-components.com/' },
  ];
  
  const click = url => window.open(url);

  return (
    <PageAnimate name='slide-up'>
      <h2>사용 모듈</h2>
      <br />
      <Table>
        <thead>
          <tr>{head.map((item, idx) => <th key={idx}>{item}</th>)}</tr>
        </thead>
        <tbody>
          {body.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td onClick={() => click(item.url)}>이동</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </PageAnimate>
  )
}

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
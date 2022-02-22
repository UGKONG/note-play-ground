export default {
  gray: '#777',
  whiteGray: '#ddd',
  whiteGrayHover: '#ccc',
  whiteGrayActive: '#bbb',
  darkGray: '#555',
  red: '#ff4f4f',
  blue: '#4952f8',
  green: '#00c100',
  white: '#fff',
  whiteBlack: '#333',
  black: '#282828',
  orange: '#f88629',
  yellow: '#f7d740',
  purple: '#ab14fc',
  pink: '#fb44e4',
  navy: '#5a02aa',
  bg: '#00000020',
  flex: (dir = 'flex-start', option = 'row', wrap = 'nowrap') => {
    return `
      display: flex;
      align-items: center;
      justify-content: ${dir};
      flex-flow: ${option};
      flex-wrap: ${wrap};
    `;
  },
  font: (size = 'inherit', weight = 'inherit', color = 'inherit', spacing = 'auto') => {
    return `
      font-size: ${size};
      font-weight: ${weight};
      color: ${color};
      letter-spacing: ${spacing};
    `
  },
  wrap: (box = 'block') => {
    return `
      width: 100%;
      height: 100%;
      position: relative;
      display: ${box};
    `;
  },
  textOverflow: () => {
    return `
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `
  },
  backgroundReset: (size = 'contain') => {
    return `
      background-repeat: no-repeat;
      background-size: ${size};
      background-position: center;
    `;
  },
  position: (po = 'fixed', top = 'unset', right = 'unset', bottom = 'unset', left = 'unset', translate = 'unset') => {
    return `
      position: ${po};
      top: ${top};
      right: ${right};
      bottom: ${bottom};
      left: ${left};
      transform: ${translate};
    `;
  },
  size: (w = 'static', h = 'static') => {
    return `
      width: ${w};
      height: ${h};
    `;
  },
  border: (border = 'auto', radius = 'auto') => {
    return `
      border: ${border};
      border-radius: ${radius};
    `;
  }
}
// app colours 
const white = '#ffffff';
const lightBlue = '#5693c4';
const blue = '#1f6feb';
const gray = '#484f58';
const midGray = '#9c9c9c';
const charcoal = '#0d1117';
const black = '#152028';



export const light = {
  name: 'light',
  text: white,
  background: '#2193b0', /* fallback for old browsers */
  background: '-webkit-linear-gradient(to top, #6dd5ed, #2193b0)',  /* Chrome 10-25, Safari 5.1-6 */
  background: 'linear-gradient(to top, #6dd5ed, #2193b0)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  elements: blue,
  hover: lightBlue,
  textElements: charcoal,
  selectElements: white,
  selectArrow: blue,
  disabled: midGray

};

export const dark = {
  name: 'dark',
  text: white,
  background: black,
  elements: blue,
  hover: lightBlue,
  textElements: white,
  selectElements: gray,
  selectArrow: white,
  disabled: midGray

};
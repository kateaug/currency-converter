// app colours 
const white = '#ffffff';
const gradient = 'linear-gradient(to top, #6dd5ed, #2193b0)';
const lightBlue = '#5693c4';
const blue = '#1f6feb';
const darkBlue = '#0d419d';
const midBlue = '#0c2d6b';
const gray = '#484f58';
const midGray = '#9c9c9c';
const charcoal = '#0d1117';
const black = '#152028';



export const light = {
  name: 'light',
  text: white,
  background: gradient,
  elements: blue,
  hover: lightBlue,
  btnFocus: darkBlue,
  btnActive: midBlue,
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
  btnFocus: darkBlue,
  btnActive: midBlue,
  textElements: white,
  selectElements: gray,
  selectArrow: white,
  disabled: midGray

};
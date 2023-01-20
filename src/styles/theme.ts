import { DefaultTheme } from 'styled-components';

const colors = {
  main: '#4EA0EB',
  white: '#FFFFFF',
  contents: '#A6D0F5',
  lightgray: '#c4c3c0',
};

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};

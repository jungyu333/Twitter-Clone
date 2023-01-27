import { DefaultTheme } from 'styled-components';

const colors = {
  main: '#4EA0EB',
  white: '#FFFFFF',
  contents: '#A6D0F5',
  lightgray: '#c4c3c0',
  error: '#D32F2F',
  status: '#F8D4DA',
};

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};

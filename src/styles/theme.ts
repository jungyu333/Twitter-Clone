import { DefaultTheme } from 'styled-components';

const colors = {
  main: '#4EA0EB',
  white: '#FFFFFF',
  contents: '#A6D0F5',
  lightgray: '#ededed',
  error: '#D32F2F',
  status: '#F8D4DA',
  textgray: '#c4c3c0',
  logoutgray: '#999999',
  black: '#0F141A',
};

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};

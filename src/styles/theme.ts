import { DefaultTheme } from 'styled-components';

const colors = {
  main: '#4EA0EB',
  white: '#FFFFFF',
  contents: '#A6D0F5',
};

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};

import { CSSProperties } from 'react';

export type TypographyProps = {
  as?: keyof JSX.IntrinsicElements;
  color?: string;
  margin?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  lineHeight?: string;
  letterSpacing?: string;
  title?: string;
  style?: CSSProperties;
  children: any;
  // props for responsive design
  resWeight?: string;
  resSize?: string;
  resAlign?: string;
};
type AlignOptions =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'stretch'
  | 'baseline';

export type ContainerProps = {
  position?: string;
  justify?: AlignOptions;
  alignItems?: AlignOptions;
  bgColor?: string;
  borderColor?: string;
  direction?: 'row' | 'column';
  container?: boolean;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  // props for responsive design
  resDisplay?: string;
  resMargin?: string;
  resPadding?: string;
  resWidth?: string;
  resHeight?: string;
  resAlignItems?: string;
  resJustify?: string;
  resDirection?: string;
};
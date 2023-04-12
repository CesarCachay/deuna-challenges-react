import { TypographyProps } from './types';

const Typography: React.FC<TypographyProps> = ({
  as: Wrapper = 'h2',
  color,
  margin,
  padding,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  style,
  title,
  children
}) => {
  return (
    <Wrapper
      title={title}
      style={{
        color: color || '#000000',
        margin: margin || 0,
        padding: padding || 0,
        fontSize: fontSize || 16,
        fontWeight: fontWeight || 'normal',
        textAlign: textAlign || 'left',
        lineHeight: lineHeight || 'normal',
        letterSpacing: letterSpacing || 'normal',
        ...style,
      }}
    >
      {children}
    </Wrapper>
  );
};
export default Typography;
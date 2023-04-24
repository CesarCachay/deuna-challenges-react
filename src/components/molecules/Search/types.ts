export type SearchProps = {
  onChangeValue: (value: string) => void;
  searchValue: string;
  onSubmit: () => void;
  maxWidth?: string;
  placeholder?: string;
  width?: string;
  height?: string;
};

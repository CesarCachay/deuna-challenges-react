export type PaginationProps = {
  page: number;
  numberOfPages: number | undefined;
  setPage: (page: number) => void;
}
export interface Pagination {
  page: number;
  offset: number;
}

export interface BlogResponse<T> {
  data: { items: T[] };
  pagination: Pagination;
}

interface Img {
  url: string;
}

export class Blogs {
  id: number;
  title: string;
  content: string;
  image: Img;
  created_at: string;
  updated_at: string;

  constructor(data: any = {}) {
    this.id = data.id || 0;
    this.title = data.title || "";
    this.content = data.content || "";
    this.image = data.image || {};
    this.created_at = data.created_at || "";
    this.updated_at = data.updated_at || "";
  }
}

export interface PaginationParams {
  page: number;
  offset: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

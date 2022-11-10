export type Inputs = {
  title: string;
  content: string;
  image: string;
  created_at: string;
};

export interface GetListPayload {
  search?: string;
  page?: number;
  offset?: number;
  sort_by?: string;
  sort_direction?: string;
}

export interface AddBlogPayload {
  title: string;
  content: string;
  image?: string;
}

import APIClient from "./http.common";
import { AddBlogPayload, GetListPayload } from "../types/blog.typpe";

const blogApi = {
  getAll(params: {}): Promise<GetListPayload> {
    const url = "/api/v2/blogs";
    return APIClient.get(url, { params });
  },

  getById(id: number): Promise<number> {
    const url = `/api/v2/blogs/${id}`;
    return APIClient.get(url);
  },

  addItem(blog: {}): Promise<AddBlogPayload> {
    const url = "/api/v2/blogs";
    return APIClient.post(url, { blog });
  },
  editItem(id: number, blog: {}): Promise<AddBlogPayload> {
    const url = `/api/v2/blogs/${id}`;
    return APIClient.put(url, blog);
  },
  removeItem(id: number): Promise<number> {
    const url = `/api/v2/blogs/${id}`;
    return APIClient.delete(url);
  }
};

export default blogApi;

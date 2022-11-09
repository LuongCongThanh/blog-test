import http from "./http.common";

const getAllBlogsList = () => {
  return http.get("/api/v2/blogs", { params: { page: 2, offset: 20 } });
};

// const get = (id) => {
//   return http.get(`/tutorials/${id}`);
// };
//
// const create = (data) => {
//   return http.post("/tutorials", data);
// };
//
// const update = (id, data) => {
//   return http.put(`/tutorials/${id}`, data);
// };
//
// const remove = (id) => {
//   return http.delete(`/tutorials/${id}`);
// };
//
// const removeAll = () => {
//   return http.delete(`/tutorials`);
// };
//
// const findByTitle = (title) => {
//   return http.get(`/tutorials?title=${title}`);
// };

const APIService = {
  getAllBlogsList
};

export default APIService;

import { API_BASE_URL, PAGINATION_LIMIT } from "@/constants/api";

export const ApiUrls = {
  getPosts: (page = 1, search?: string) =>
    `${API_BASE_URL}/posts?_expand=user&_order=desc&_sort=id&_page=${page}&_limit=${PAGINATION_LIMIT}${
      search ? `&q=${search}` : ""
    }`,
  posts: (id?: number | string) => `${API_BASE_URL}/posts${id ? `/${id}` : ""}?_expand=user&`,
};

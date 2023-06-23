import axios from "axios";
import { ApiUrls } from "./urls";
import { Post } from "@/types/blog";


export const fetchPosts = async (
  page = 1,
  search?: string
): Promise<Post[]> => {
  try {
    const response = await axios.get(ApiUrls.getPosts(page, search));
    if (response?.status === 200) {
      const data = response.data;
      return data;
    } else {
      throw new Error("Failed to fetch Posts");
    }
  } catch (error: any) {
    console.log(error);
    throw new Error(
      error?.response?.data?.message || "An error occurred while fetching Posts"
    );
  }
};

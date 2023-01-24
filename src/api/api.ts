import axios from "axios";

const server = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getAllUsers = async () => {
  try {
    const response = await server.get("/users");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getComments = async (id: number) => {
  try {
    const response = await server.get(`/comments?postId=${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAlbums = async (id: number) => {
  try {
    const response = await server.get(`/albums?userId=${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

import axios from 'axios';

// this url returns all the posts in database
const url = 'http://localhost:8080/posts';

// fetch the posts using axios
export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);
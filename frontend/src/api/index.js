import axios from 'axios';

// this url returns all the posts in database
const url = 'http://localhost:8080/posts';

// fetch the posts usingg axios
export const fetchPosts = () => axios.get(url);


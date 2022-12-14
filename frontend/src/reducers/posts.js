import { FETCH_ALL, CREATE, UPDATE, LIKE, DELETE } from '../constants/actions';

// Create reducer with a state of 'posts'
// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
  // switch statement returns based on action
  switch(action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) => post._id === action.payload._id ? action.payload : post);
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case LIKE:
      return posts.map((post) => post._id === action.payload._id ? action.payload : post);
    default: 
      return posts;
  }
}
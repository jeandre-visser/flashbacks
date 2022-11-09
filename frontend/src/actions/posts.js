import * as api from '../api';

// This function is an action creator, returns an action (in this case we dispatch the action)
// an action has a type and a payload
// use redux thunk to implement asyncronous logic
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: 'FETCH_ALL', payload: data });

  } catch(error) {
    console.log(error.message)
  }
}

// Obtain the data in the try catch block
export const createPost = (post) => async (dispatch) => {
  try {
    // Post api request to backend server
    const { data } = await api.createPost(post);
    // Dispatch the CREATE action with the data
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error)
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: 'UPDATE', payload: data });

  } catch (error) {
    console.log(error);
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id)

    dispatch({ type: 'DELETE', payload: id });
    
  } catch (error) {
    console.log(error)
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: 'LIKE', payload: data});
    
  } catch (error) {
    console.log(error)
  }
}
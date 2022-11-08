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
// Create reducer with a state of 'posts'
export default (posts = [], action) => {
  // switch statement returns based on action
  switch(action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default: 
      return posts;
  }
}
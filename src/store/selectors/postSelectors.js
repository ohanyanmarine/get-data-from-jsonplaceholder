const postSelectors = (state) => state.posts;

const posts = (state) => postSelectors(state).posts;
const selectedPost = (state) => postSelectors(state).selectedPost;
const post = (state) => postSelectors(state).selected;
const filteredPosts = (state) => postSelectors(state).filteredPosts;

export default { posts, selectedPost, post, filteredPosts };

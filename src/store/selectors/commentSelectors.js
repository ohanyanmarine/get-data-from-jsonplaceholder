const commentSelectors = (state) => state.comments;

const comments = (state) => commentSelectors(state).comments;
const selectComment = (state) => commentSelectors(state).selectComment;
const comment = (state) => commentSelectors(state).selected;
const filteredComments = (state) => commentSelectors(state).filteredComments;

export default { comments, selectComment, comment, filteredComments };


const resolvers = {
  Query: {
    posts: (_, __, { dataSources }) => dataSources.post.getPosts(),
    post: (_, { id }, { dataSources }) => dataSources.post.getById(id),

    comments: (_, __, { dataSources }) => dataSources.comment.getComments(),
    comment: (_, { id }, { dataSources }) => dataSources.comment.getById(id),
  },
  Mutation: {
    createPost: (_, args, { dataSources }) => dataSources.post.create(args),
    deletePost: (_, { id }, { dataSources }) => dataSources.post.delete(id),
    updatePost: (_, { id, input }, { dataSources }) => dataSources.post.update(id, input),

    createComment: (_, args, { dataSources }) => dataSources.comment.create(args),
    deleteComment: (_, { id }, { dataSources }) => dataSources.comment.delete(id),
    updateComment: (_, { id, input }, { dataSources }) => dataSources.comment.update(id, input),
  }
};

module.exports.resolvers = resolvers
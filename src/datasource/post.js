const { DataSource } = require("apollo-datasource");
const { PostModel } = require("../model/post.model.js");

class PostDataSource extends DataSource {
  initialize(config) {
    this.context = config.context;
  }

  create(input) {
    return PostModel.create(input);
  }

  async delete(id) {
    try {
      const deletePost = await PostModel.findByIdAndDelete(id);
      if (!deletePost)
        return ("Post is not found!");
      else
        return ("The Post is deleted");
    }
    catch (error) {
      throw error
    }
  }

  async update(id, input) {
    try {
      const updatePost = await PostModel.findByIdAndUpdate(id, { ...input });
      if (!updatePost)
        return ("Not Found to Update!!");
      const post = await Post.findById(id);
      return post;
    }
    catch (error) {
      throw error
    }
  }

  async getPosts() {
    try {
      const posts = await PostModel.find({});
      return posts;
    }
    catch (error) {
      throw error
    }
  }

  getById(id) {
    return PostModel.findOne({ _id: id });
  }
}
module.exports.PostDataSource = PostDataSource;
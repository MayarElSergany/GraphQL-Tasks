const { DataSource } = require("apollo-datasource");
const { CommentModel } = require("../model/comment.model.js");

class CommentDataSource extends DataSource {
  initialize(config) {
    this.context = config.context;
  }

  create(input) {
    return CommentModel.create(input);
  }

  async delete(id) {
    try {
      const deleteComment = await CommentModel.findByIdAndDelete(id);
      if (!deleteComment)
        return ("This comment is not found!!");
      else
        return "This comment is deletedd";
    } catch (error) {
      throw error
    }
  }

  async update(id, input) {
    try {
      const updateComment = await CommentModel.findByIdAndUpdate(id, { ...input });
      if (!updateComment)
        return ("This comment is not found");
      const comment = await Comment.findById(id)
      return `${comment} updated Successfully!!!`
    }
    catch (error) {
      throw error
    }
  }

  async getComments() {
    const comments = await CommentModel.find({});
    return comments;
  }

  getById(id) {
    return CommentModel.findOne({ _id: id })
  }
}
module.exports.CommentDataSource = CommentDataSource;
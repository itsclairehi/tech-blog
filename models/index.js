const Blog = require('./Blog');
const User = require('./User')
const Comment = require('./Comment')

//user relationships
User.hasMany(Blog, {
    foreignKey: 'user_id'
  });

  //user can have many posts, but post can only have 1 user
  Blog.belongsTo(User, {
    foreignKey: 'user_id',
  });

//blog relationships

//comment relationships
Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Comment.belongsTo(Blog, {
    foreignKey: 'post_id'
  });
  
  User.hasMany(Comment, {
    foreignKey: 'user_id'
  });
  
  Blog.hasMany(Comment, {
    foreignKey: 'post_id'
  });

module.exports = { Blog, User, Comment }
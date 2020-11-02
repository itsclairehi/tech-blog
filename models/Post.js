const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

//define all attributes
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        text: {
            type :DataTypes.STRING
        }
    },
        {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'post'
          }
    
)

module.exports = Post;
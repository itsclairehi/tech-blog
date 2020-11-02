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

        text_test: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            sequelize,
            freezeTableName: true,
            timestamps: false,
            underscored: true,
            modelName: 'post'
          }
    
)

module.exports = Post;
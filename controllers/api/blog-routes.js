const router = require('express').Router();
const { Blog } = require('../../models/Blog');
const sequelize = require('../../config/connection');


router.post('/', (req, res) => {
    // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
    Blog.create({
        title: req.body.title,
        
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    });

    module.exports = router
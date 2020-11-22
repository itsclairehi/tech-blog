const router = require('express').Router();
const { Blog } = require('../../models/Blog');
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
    Blog.findAll()
        .then((dbPostData) => {
            console.log("HHHHHHH", dbPostData)
            res.render("homepage", {dbPostData})
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

router.get('/:id', (req, res) => {
    Blog.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

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



router.delete('/:id', (req, res) => {
    Blog.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbBlogData => res.json(dbBlogData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
})

module.exports = router
const router = require('express').Router();
const models = require('../../models');
const { Post } = require('../../models');

router.post('/', (req,res) => {
    Post.create({
        text: req.body.text
    })
    .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
})

module.exports = router;
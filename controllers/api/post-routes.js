const router = require('express').Router();
const models = require('../../models');
const { Post } = require('../../models');

router.post('/', (req, res) => {
    Post.create(req.body, {
      text_test: req.body.text_test
    })
    .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
})

router.get('/', (req,res) => {
  Post.findAll()
  .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
})

module.exports = router;
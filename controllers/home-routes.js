//page load routes
const router = require('express').Router();
const { Blog } = require('../models/Blog');

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

router.post("/create")

router.get('/login', (req, res) => {
      res.render('login')
})

module.exports= router;
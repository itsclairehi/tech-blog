//page load routes
const router = require('express').Router();
const Blog  = require('../models/Blog');

router.get('/', (req, res) => {
      Blog.findAll()
            .then((dbPostData) => {

                  const blogs = dbPostData.map(blog => blog.get({ plain: true }));
                  res.render('homepage', {
                        blogs,
                        loggedIn: req.session.loggedIn
                  });
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

module.exports = router;
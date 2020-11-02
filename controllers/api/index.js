const router = require('express').Router();

const postRoutes = require('./post-routes.js');
//browser location will be localhost3001/api/post, adding 2nd prefix
router.use('/post', postRoutes);

module.exports = router;
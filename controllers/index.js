const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js')


router.use('/api', apiRoutes);


//page routes have no prefix, user-oriented
router.use('/', homeRoutes);

module.exports = router;
const router = require('express').Router();
//require all api route js files
const apiRoutes = require('./api');

const homeRoutes = require('./home-routes.js')

//add api prefix to all api routes
router.use('/api', apiRoutes);
//page routes have no prefix, user-oriented
router.use('/', homeRoutes);

module.exports = router;
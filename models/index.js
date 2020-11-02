//require all models
// const { foreign_key } = require('inflection')
const Modeltest = require('./Modeltest')

//create associations
//Modeltest.belongsTo(model2, {
//     foreign_key: 'model2_id'
// })

//export all models as unnamed object
module.exports = {Modeltest}
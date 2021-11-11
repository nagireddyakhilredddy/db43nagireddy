var express = require('express'); 
const phones_controlers= require('../controllers/phones'); 
var router = express.Router(); 
 
/* GET phoness */ 
router.get('/', phones_controlers.phones_view_all_Page ); 
module.exports = router; 
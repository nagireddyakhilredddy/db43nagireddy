var express = require('express'); 
const phones_controlers= require('../controllers/phones'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', phones_controlers.phones_view_all_Page ); 
module.exports = router;
// GET request for one costume. 
router.get('/phones/:id', phones_controlers.phones_detail); 
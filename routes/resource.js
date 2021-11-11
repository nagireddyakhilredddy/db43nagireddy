var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var phones_controller = require('../controllers/phones'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// phones ROUTES /// 
 
// POST request for creating a phones.  
router.post('/phones', phones_controller.phones_create_post); 
 
// DELETE request to delete phones. 
router.delete('/phones/:id', phones_controller.phones_delete); 
 
// PUT request to update phones. 
router.put('/phones/:id', 
phones_controller.phones_update_put); 
 
// GET request for one phones. 
router.get('/phones/:id', phones_controller.phones_detail); 
 
// GET request for list of all phones items. 
router.get('/phones', phones_controller.phones_list); 
 
module.exports = router; 
 
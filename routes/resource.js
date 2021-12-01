var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var phones_controller = require('../controllers/phones'); 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
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

/* GET detail phones page */ 
router.get('/detail', phones_controller.phones_view_one_Page); 

/* GET create phones page */ 
router.get('/create', phones_controller.phones_create_Page); 

/* GET create update page */ 
router.get('/update',secured,phones_controller.phones_update_Page); 

/* GET create phones page */ 
router.get('/delete', phones_controller.phones_delete_Page);
 
module.exports = router; 


 
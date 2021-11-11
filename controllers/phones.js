var phones = require('../models/phones'); 
 
// List of all phoness 
exports.phones_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: phones list'); 
}; 
 
// for a specific phones. 
exports.phones_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: phones detail: ' + req.params.id); 
}; 
 
// Handle phones create on POST. 
exports.phones_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: phones create POST'); 
}; 
 
// Handle phones delete form on DELETE. 
exports.phones_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: phones delete DELETE ' + req.params.id); 
}; 
 
// Handle phones update form on PUT. 
exports.phones_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: phones update PUT' + req.params.id); 
}; 

// List of all phoness 
exports.phones_list = async function(req, res) { 
    try{ 
        thephoness = await phones.find(); 
        res.send(thephoness); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.phones_view_all_Page = async function(req, res) { 
    try{ 
        thephoness = await phones.find(); 
        res.render('phones', { title: 'phones Search Results', results: thephoness }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// Handle phones create on POST. 
exports.phones_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new phones(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"phones_type":"goat", "cost":12, "size":"large"} 
    document.pName = req.body.pName; 
    document.pPixels = req.body.pPixels; 
    document.pCost = req.body.pCost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
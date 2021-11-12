var phones = require('../models/phones'); 
 
// List of all Costumes 
exports.phones_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume list'); 
}; 
 
// for a specific Costume. 
exports.phones_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.phones_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.phones_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.phones_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id); 
}; 
// List of all Costumes 
exports.phones_list = async function(req, res) { 
    try{ 
        theCostumes = await phones.find(); 
        res.send(theCostumes); 
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
        theCostumes = await phones.find(); 
        res.render('phones', { title: 'phones Search Results', results: theCostumes }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// Handle Costume create on POST. 
exports.phones_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new phones(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.pName = req.body.pName; 
    document.pEngine = req.body.pEngine; 
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

// for a specific Costume. 
exports.phones_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Costume.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
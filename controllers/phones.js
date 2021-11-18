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

// for a specific phones. 
exports.phones_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await phones.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle phones update form on PUT. 
exports.phones_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await phones.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.pName)  
               toUpdate.pName = req.body.pName; 
        if(req.body.pPixels) toUpdate.pPixels = req.body.pPixels; 
        if(req.body.pCost) toUpdate.pCost = req.body.pCost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// Handle phones delete on DELETE. 
exports.phones_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await phones.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

 // Handle a show one view with id specified by query 
 exports.phones_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await phones.findById( req.query.id) 
        res.render('phonesdetail',  
{ title: 'phones Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

 // Handle building the view for creating a phones. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.phones_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('phonescreate', { title: 'phones Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle building the view for updating a phones. 
// query provides the id 
exports.phones_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await phones.findById(req.query.id) 
        res.render('phonesupdate', { title: 'phones Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle a delete one view with id from query 
exports.phones_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await phones.findById(req.query.id) 
        res.render('phonesdelete', { title: 'phones Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
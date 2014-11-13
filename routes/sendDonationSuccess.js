var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    //res.render('sendDonationSuccess', { title: 'sendDonationSuccess' });
    console.log("GLOBAL TOKEN "+globalToken);
    var Simplify = require("simplify-commerce"),
    client = Simplify.getClient({
        publicKey: 'sbpb_NTBhMTYxMDQtMWIzZi00MDk1LWJlNGMtMTYxYmM1NmQyMzZl',
        privateKey: 'CPf6b1gc6kINSBiH0JvMcJFLOmxvMCtwblljaXv1Pyh5YFFQL0ODSXAOkNtXTToq'
    });
 
    client.payment.create({
        amount : "300000",
        token : globalToken,
        description : "payment description",
        reference : "7a6ef6be31",
        currency : "USD"
    }, function(errData, data){

        if(errData){
             res.render('sendDonationFailure', { title: errData.data.error.message });
            console.error("Error Message: " + errData.data.error.message);
            // handle the error
            return;
        }
        res.render('sendDonationSuccess', { title: 'sendDonationSuccess' });
        console.log("Payment Status: " + data.paymentStatus);
    });
    
});
/*app.post('/', function(req, res) {
 
    var Simplify = require("simplify-commerce"),
    client = Simplify.getClient({
        publicKey: 'sbpb_NTBhMTYxMDQtMWIzZi00MDk1LWJlNGMtMTYxYmM1NmQyMzZl',
        privateKey: 'CPf6b1gc6kINSBiH0JvMcJFLOmxvMCtwblljaXv1Pyh5YFFQL0ODSXAOkNtXTToq'
    });
 
    client.payment.create({
        amount : "300000",
        token : "ce5a96da-8fb9-4ce2-b5db-c3da2815e93f",
        description : "payment description",
        reference : "7a6ef6be31",
        currency : "USD"
    }, function(errData, data){

        if(errData){
             res.render('sendDonationFailure', { title: errData.data.error.message });
            console.error("Error Message: " + errData.data.error.message);
            // handle the error
            return;
        }
        res.render('sendDonationSuccess', { title: 'sendDonationSuccess' });
        console.log("Payment Status: " + data.paymentStatus);
    });
    
  
});*/
module.exports = router;


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var Simplify = require("simplify-commerce"),
    client = Simplify.getClient({
        publicKey: 'sbpb_NTBhMTYxMDQtMWIzZi00MDk1LWJlNGMtMTYxYmM1NmQyMzZl',
        privateKey: 'CPf6b1gc6kINSBiH0JvMcJFLOmxvMCtwblljaXv1Pyh5YFFQL0ODSXAOkNtXTToq'
    });
 
    client.payment.create({
        amount : "3000",
        token : "704e8c83-82b9-4615-b774-5bf0101c9164",
        description : "payment description",
        reference : "7a6ef6be31",
        currency : "USD"
    }, function(errData, data){

        if(errData){
             res.render('sendDonationFailure', { title: 'sendDonationFailure' });
            console.error("Error Message: " + errData.data.error.message);
            // handle the error
            return;
        }
        res.render('sendDonationSuccess', { title: 'sendDonationSuccess' });
        console.log("Payment Status: " + data.paymentStatus);
    });
    
  
});

module.exports = router;


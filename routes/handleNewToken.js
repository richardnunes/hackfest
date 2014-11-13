var express = require('express');
var app     = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('createChallengeSuccess', { title: 'createChallengeSuccess' });
    //var express = require('express');
    //var app     = express();

   /*app.use(express.bodyParser());

    app.post('/handleNewToken', function(req, res) {
        res.send('You sent the name "' + req.body.name + '".');
    });

    app.listen(3000, function() {
        console.log('Server running at http://127.0.0.1:8080/');
    });*/
});

module.exports = router;
/*
var Simplify = require("simplify-commerce"),
    client = Simplify.getClient({
        publicKey: 'sbpb_NTBhMTYxMDQtMWIzZi00MDk1LWJlNGMtMTYxYmM1NmQyMzZl',
        privateKey: 'CPf6b1gc6kINSBiH0JvMcJFLOmxvMCtwblljaXv1Pyh5YFFQL0ODSXAOkNtXTToq'
    });
 
client.payment.create({
    amount : "1000",
    token : "[TOKEN ID]",
    description : "payment description",
    reference : "7a6ef6be31",
    currency : "USD"
}, function(errData, data){
 
    if(errData){
        console.error("Error Message: " + errData.data.error.message);
        // handle the error
        return;
    }
 
    console.log("Payment Status: " + data.paymentStatus);
});*/
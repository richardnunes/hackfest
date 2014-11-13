function completePayment(){
    var Simplify = require("simplify-commerce"),
        client = Simplify.getClient({
            publicKey: 'sbpb_NTBhMTYxMDQtMWIzZi00MDk1LWJlNGMtMTYxYmM1NmQyMzZl',
            privateKey: 'CPf6b1gc6kINSBiH0JvMcJFLOmxvMCtwblljaXv1Pyh5YFFQL0ODSXAOkNtXTToq'
        });

    client.payment.create({
        amount : "3000",
        token : "26977722-920f-4c9c-a6a9-ece7e15998f1",
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
    });
}
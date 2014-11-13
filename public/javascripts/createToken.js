 function simplifyResponseHandler(data) {
    console.log("simplifyResponseHandler()");
    var $paymentForm = $("#simplify-payment-form");
    var cardToken = null;
    // Remove all previous errors
    $(".error").remove();
    // Check for errors
    if (data.error) {
        // Show any validation errors
        console.log("error");
        if (data.error.code == "validation") {
            var fieldErrors = data.error.fieldErrors,
                    fieldErrorsLength = fieldErrors.length,
                    errorList = "";
            for (var i = 0; i < fieldErrorsLength; i++) {
                errorList += "<div class='error'>Field: '" + fieldErrors[i].field +
                        "' is invalid - " + fieldErrors[i].message + "</div>";
            }
            // Display the errors
            $paymentForm.after(errorList);
        }
        // Re-enable the submit button
        $("#process-payment-btn").removeAttr("disabled");
    } else {
        // The token contains id, last4, and card type
        console.log("success");
        var token = data["id"];
        cardToken = token;
        // Insert the token into the form so it gets submitted to the server
        $paymentForm.append("<input type='hidden' name='simplifyToken' value='" + token + "' />");
        // Submit the form to the server
        //completePayment();
        console.log(token);
        //$paymentForm.get(0).submit();
        location.href = "/createChallengeSuccess";
    }
}
function createToken() {
    console.log("createToken()");
    //$("#simplify-payment-form").on("submit", function() {
    // Disable the submit button
    //$("#process-payment-btn").attr("disabled", "disabled");
    // Generate a card token & handle the response
     console.log("generating token");
    SimplifyCommerce.generateToken({
        key: "sbpb_NTBhMTYxMDQtMWIzZi00MDk1LWJlNGMtMTYxYmM1NmQyMzZl",
        card: {
            number: $("#cc-number").val(),
            cvc: $("#cc-cvc").val(),
            expMonth: $("#cc-exp-month").val(),
            expYear: $("#cc-exp-year").val()
        }
    }, simplifyResponseHandler);
    // Prevent the form from submitting
    return false;
}

function myfunction()
{
    console.log("submitted");
}
submitForm = () => {
    // Clear any previous messages that might be there
    var thankYou = document.querySelector("#thank-you");
    thankYou.style.display = "none";
    thankYou.innerHTML = "";
    var apologies = document.querySelector("#apologies");
    apologies.style.display = "none";

    var formBody = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        phone: document.querySelector("#phone").value,
        address: document.querySelector("#address").value,
        city: document.querySelector("#city").value,
        postalCode: document.querySelector("#postal").value,
        subject: document.querySelector("input[name='subject']:checked")?.value,
        hourlyRate: document.querySelector("#hourly-rate")?.value,
        message: document.querySelector("#message").value,
    };

    var bodyJson = JSON.stringify(formBody);

    fetch("https://httpbin.org/post", {
        method: "POST",
        body: bodyJson,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(value => formSubmitted(value.json()), error => submitFormFailed(error));
}

formSubmitted = (response) => {
    response.then(json => submitFormSucceeded(json), error => submitFormFailed(error));
}

submitFormSucceeded = (response) => {
    var thankYou = document.querySelector("#thank-you");
    thankYou.style.display = "block";
    var responseData = document.createElement("p");
    responseData.innerHTML = "Thank you for your submission!<br><br>" + JSON.stringify(response);
    thankYou.appendChild(responseData);
}

submitFormFailed = (error) => {
    console.log("The form was not sent due to: " + error);
    var apologies = document.querySelector("#apologies");
    apologies.style.display = "block";
}

toggleHourlyRate = () => {
    var hourlyRateSection = document.querySelector("#container-hourly-rate");
    var hourlyRateInput = document.querySelector("#container-hourly-rate input");
    var hourlyRateValue = document.querySelector("#hourly-rate");
    hourlyRateInput.required = false;
    hourlyRateValue.value = "";
    if (document.querySelector("input[name='subject']:checked").value === "hiring") {
       hourlyRateSection.style.visibility = "visible";
       hourlyRateInput.required = true;
    } else {
        hourlyRateSection.style.visibility = "hidden";
        hourlyRateInput.required = false;
    }
}
const form = document.getElementById("registerForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");
        alert("Thank you, " + fullName + "! Your registration was received.");
});
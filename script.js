document.getElementById("SignupButton").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "signup.html";
});

document.getElementById("ForgotButton").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "forgotpassword.html";
});

document.getElementById("LoginButton").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "homepage.html";
});

document.getElementById("CreateAccountButton").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "homepage.html";
});

document.getElementById("LoginButton").addEventListener("click", function (e) {
    e.preventDefault();
    // Handle login logic here
    console.log("Login button clicked");
});

document.getElementById("CreateAccountButton").addEventListener("click", function (e) {
    e.preventDefault();
    // Handle login logic here
    console.log("Create account button clicked");
});
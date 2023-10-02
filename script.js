// script.js
document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
    const loginLink = document.getElementById("loginLink");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const role = document.getElementById("role").value;
        const password = document.getElementById("password").value;

        // Registration logic based on selected role (admin, lender, or borrower)
        if (role === "admin") {
            // Registration logic for admin
            console.log("Admin registration logic here");
        } else if (role === "lender") {
            // Registration logic for lender
            console.log("Lender registration logic here");
        } else if (role === "borrower") {
            // Registration logic for borrower
            console.log("Borrower registration logic here");
        }

        // Redirect to the login page after successful registration
        window.location.href = "login.html";
    });

    // Add event listener for the login link
    loginLink.addEventListener("click", function(event) {
        event.preventDefault();

        // Redirect to the login page when the link is clicked
        window.location.href = "login/login.html";
    });
});
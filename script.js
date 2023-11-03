document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Perform basic validation (you can add more robust validation)
        if (!email || !password) {
            alert("Please enter both email/phone and password.");
            return;
        }

        // Simulate a login process
        // Replace this with your actual login logic
        console.log("Logging in with email:", email);
        // You can add AJAX requests here to communicate with your server

        // Clear form fields after submission
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    });
});

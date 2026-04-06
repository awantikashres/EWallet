function resetPassword() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("newPass").value;
    let confirm = document.getElementById("confirmPass").value;

    if (!email || !pass || !confirm) {
        alert("Please fill all fields");
        return;
    }

    if (pass !== confirm) {
        alert("Passwords do not match");
        return;
    }

    // Simulate success
    alert("Password reset successful!");

    // Redirect to login page
    window.location.href = "login.html";
}
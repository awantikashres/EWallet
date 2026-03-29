function loginUser() {
    // get input values
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // simple validation
    if (email === "" || password === "") {
        alert("Please fill all fields!");
        return false;
    }

    // demo login (you can change this)
    if (email === "user@gmail.com" && password === "1234") {
        alert("Login Successful!");

        // redirect to dashboard
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Email or Password!");
    }

    return false; // prevent form reload
}
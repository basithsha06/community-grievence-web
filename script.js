// ===============================
// AA-28 MAIN SCRIPT
// ===============================

function openCitizen() {
    window.location.href = "citizen-auth.html";
}

function openAdmin() {
    window.location.href = "admin-login.html";
}

function openLogin() {
    window.location.href = "citizen-auth.html";
}


// ===============================
// CITIZEN REGISTER
// ===============================

function registerCitizen(name, mobile, email, password) {

    const citizen = {
        name: name,
        mobile: mobile,
        email: email,
        password: password
    };

    localStorage.setItem(
        "aa28_citizen",
        JSON.stringify(citizen)
    );

    alert("Registration successful! Please login.");

    window.location.href = "citizen-auth.html";
}


// ===============================
// CITIZEN LOGIN
// ===============================

function loginCitizen(email, password) {

    const savedCitizen =
        JSON.parse(localStorage.getItem("aa28_citizen"));

    if (!savedCitizen) {

        alert("No account found. Please register first.");
        return;

    }

    if (
        (savedCitizen.email === email ||
         savedCitizen.mobile === email)
        &&
        savedCitizen.password === password
    ) {

        localStorage.setItem(
            "aa28_citizen_logged",
            "true"
        );

        window.location.href =
            "citizen-dashboard.html";

    } else {

        alert("Invalid email/mobile or password.");

    }
}


// ===============================
// CITIZEN LOGOUT
// ===============================

function citizenLogout() {

    localStorage.removeItem(
        "aa28_citizen_logged"
    );

    window.location.href =
        "index.html";
}


// ===============================
// ADMIN LOGIN
// ===============================

function loginAdmin(id, password) {

    if (
        id === "admin" &&
        password === "admin123"
    ) {

        localStorage.setItem(
            "aa28_admin_logged",
            "true"
        );

        window.location.href =
            "admin-dashboard.html";

    } else {

        alert("Invalid Admin ID or Password.");

    }
}


// ===============================
// ADMIN LOGOUT
// ===============================

function adminLogout() {

    localStorage.removeItem(
        "aa28_admin_logged"
    );

    window.location.href =
        "admin-login.html";
}
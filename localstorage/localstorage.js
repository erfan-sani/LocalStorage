function login(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if(username && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        welcome.innerHTML = `Welcome ${username}`;
        inBTN.style.display = "none";
        outBTN.style.display = "inline";
    } else {
        welcome.innerText = "Please enter both username and password";
    }
}

function logout(e) {
    e.preventDefault();
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    welcome.innerText = "Logged out successfully";
    outBTN.style.display = "none";
    inBTN.style.display = "inline";
}

let inBTN = document.getElementById("in-btn");
let outBTN = document.getElementById("out-btn");
let welcome = document.getElementById("welcome");

outBTN.style.display = "none";

inBTN.addEventListener("click", login);
outBTN.addEventListener("click", logout);
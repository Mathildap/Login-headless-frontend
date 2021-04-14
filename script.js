// EVT-LISTENER ON LOGIN-BTN
document.getElementById("logInBtn").addEventListener("click", function(){
    logIn();
});

// EVT-LISTENER ON NEW USER-BTN
document.getElementById("newUserBtn").addEventListener("click", function() {
    addUser();
});

// LOG IN FUNCTION
function logIn() {

    // CREATE A VARIABEL FROM INPUT-VALUES
    let user = {id: "", userName: document.getElementById("userName").value, passWord: document.getElementById("passWord").value};

    // CREATE A POST TO BACKEND
    fetch("http://localhost:3000/users", {method: "post", headers: {"Content-type": "application/json"}, body: JSON.stringify(user)})
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
    });
};

// NEW USER FUNCTION
function addUser() {

    // CREATE A VARIABEL FROM INPUT-VALUES
    let newUser = {id: "", userName: document.getElementById("newUserName").value, passWord: document.getElementById("newPassWord").value};
    console.log(newUser);

    // CREATE A POST TO BACKEND
    fetch("http://localhost:3000/users/new", {method: "post", headers: {"Content-type": "application/json"}, body: JSON.stringify(newUser)})
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
    });
};
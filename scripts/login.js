function user() {
    document.querySelector(".box3").style.opacity = '100';
    document.querySelector(".box3").style.height = '100px';
    document.querySelector(".login").style.height = '80px';
    document.querySelector(".base").style.height = '0px';
    document.querySelector(".base").style.opacity = '0';
    document.querySelector(".login").style.opacity = '100';
    var input = document.querySelector("#name");
    input.disabled = false;
    var input2 = document.querySelector("#phone");
    input2.disabled = false;
    var button = document.querySelector("#log");
    button.disabled = false;
}

function adm() {
    document.querySelector(".base").style.opacity = '100';
    document.querySelector(".base").style.height = '100px';
    document.querySelector(".login").style.height = '80px';
    document.querySelector(".box3").style.height = '0px';
    document.querySelector(".box3").style.opacity = '0';
    document.querySelector(".login").style.opacity = '100';
    var input = document.querySelector("#id");
    input.disabled = false;
    var input2 = document.querySelector("#password");
    input2.disabled = false;
    var button = document.querySelector("#log");
    button.disabled = false;
}

function login() {
    var id = document.getElementById('id').value
    if (id == 223344) {
        console.log(id)
        window.location.href = "/content.html";
    }
    else {
        console.log("Senha Errada!")
    }
}
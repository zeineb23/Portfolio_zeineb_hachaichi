const first=document.getElementById("first");
const last=document.getElementById("last");
const email=document.getElementById("email");
const state=document.getElementById("state");
const city=document.getElementById("city");
const zip=document.getElementById("zip");
const project=document.getElementById("project");
const submit=document.getElementsByClassName("form-contact")[0];

console.log("OUI")
submit.addEventListener('click',(e)=>{
    console.log("clicked");
    Email.send({
        SecureToken : "19b6852e-1339-4b27-96cd-8a60d655b8b8",
        To : "zeineb.hachaichi2306@gmail.com",
        From : "zeineb.hachaichi2306@gmail.com",
        Subject : "New project",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
})

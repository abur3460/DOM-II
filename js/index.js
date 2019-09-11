// Your code goes here
let signBtns = Array.from(document.getElementsByClassName("btn"));

let signBtn1 = signBtns[0];
let signBtn2 = signBtns[1];
let signBtn3 = signBtns[2];

signBtn1.addEventListener("click", function(){
    signBtn1.style.backgroundColor = "white";
    signBtn1.style.color = "black";
    setTimeout(function(){
        signBtn1.style.color = "white";
        signBtn1.style.backgroundColor = "#17A2B8";
    }, 500);
}, false);
signBtn1.addEventListener("click", function(event){
    TweenLite.to(signBtn1, 1, {rotation: 720});
});

signBtn2.addEventListener("click", function(){
    signBtn2.style.backgroundColor = "lightgrey";
    signBtn2.style.color = "black";
    setTimeout(function(){
        signBtn2.style.color = "white";
        signBtn2.style.backgroundColor = "#17A2B8";
    }, 500);
}, false);
signBtn2.addEventListener("click", function(event){
    TweenLite.to(signBtn2, 1, {rotation: 3600});
});

signBtn3.addEventListener("click", function(){
    signBtn3.style.backgroundColor = "darkgrey";
    signBtn3.style.color = "black";
    setTimeout(function(){
        signBtn3.style.color = "white";
        signBtn3.style.backgroundColor = "#17A2B8";
    }, 500);
}, false);
signBtn3.addEventListener("click", function(event){
    TweenLite.to(signBtn3, 1, {rotation: 7200});
});

let navs = Array.from(document.getElementsByClassName("nav-link"));
console.log(navs);

let nav1 = navs[0];

nav1.addEventListener("mouseover", function() {
    nav1.style.color = "#17A2B8";

    setTimeout(function(){
        nav1.style.color = "black";
    }, 500);
}, false);

let navColor = document.querySelector('header .nav') ;

navColor.addEventListener("mouseover", function(event) {
    event.target.style.color = "green";

    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);

let headerChange = document.querySelectorAll('.text-content');

headerChange.forEach(header => {
    header.addEventListener("wheel", function(event) {
        event.target.style.color = "blue";
    });
});

document.addEventListener("copy", function(event){
    event.preventDefault();
    alert("get your own shit.");
});

let title = document.querySelector(".logo-heading");
title.addEventListener("click", function(event){
    TweenLite.to(title, 1, {rotation: 180});
});

document.addEventListener("keydown", function(event){
    if (event.keyCode === 32) {
        alert("Spacebar was pressed, whoosh.");
    };
});


window.addEventListener("load", (event) => {
    alert("Page is loaded");
});

title.addEventListener("dblclick", function(event) {
    event.target.style.color = "white";
});

nav1.addEventListener("click", function(){
    alert("Where do you think you are?");
});
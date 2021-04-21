const container = document.querySelector(".container");
const card = document.querySelector(".card");
const title = document.querySelector(".title");
const shoes = document.querySelector(".shoes img");
const description = document.querySelector(".description");
const buynow = document.querySelector(".purchase");
const sizes = document.querySelector(".sizes");



container.addEventListener("mousemove" , (e) => {
let xAxis = (window.innerWidth / 2 - e.pageX) /10;
let yAxis = (window.innerHeight /2 - e.pageY)/10;

card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
});

container.addEventListener('mouseenter', (e)=>{
card.style.transition = "none";
title.style.transform = "translateZ(150px)";
shoes.style.transform = "translateZ(150px)";
description.style.transform = "translateZ(150px)";
buynow.style.transform = "translateZ(150px)";
sizes.style.transform = "translateZ(150px)";
});

container.addEventListener("mouseleave", (e) => {
card.style.transform= `rotateY(${0}deg) rotateX(${0}deg)`;
card.style.transition = "all 0.5s ease";
});


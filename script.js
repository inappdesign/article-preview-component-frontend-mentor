"use strict";

const button = document.querySelector(".share-btn");
const popUp = document.querySelector(".share");

button.addEventListener("click", () => {
	popUp.classList.toggle("active");
});

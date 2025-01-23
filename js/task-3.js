const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
const title = document.querySelector("h1");
title.classList.add("title");
const input = document.getElementById("name-input");
input.classList.add("input");
nameInput.addEventListener("input", () => {
  const name = nameInput.value.trim();
  nameOutput.textContent = name ? name : "Anonymous";
});

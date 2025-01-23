function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const text = document.querySelector("div p");
text.classList.add("vg-text");
document.querySelector(".change-color").addEventListener("click", () => {
  const newColor = getRandomHexColor();
  document.body.style.background = newColor;
  document.querySelector(".color").textContent = newColor;
});

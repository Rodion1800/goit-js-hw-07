const btn = document.querySelector(".change-color");
btn.addEventListener("click", function () {
  const getRandomHexColor = `#${Math.floor(Math.random() * 16777215)

    .toString(16)
    .padStart(6, "0")}`;

  document.body.style.backgroundColor = getRandomHexColor;

  document.querySelector(".color").textContent = getRandomHexColor;
});

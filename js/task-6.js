function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const renderElements = document.querySelector("#boxes");

  renderElements.innerHTML = "";

  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;

    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);
  }

  renderElements.append(...boxes);
}

function destroyBoxes() {
  const renderElements = document.querySelector("#boxes");
  renderElements.innerHTML = "";
}

document.querySelector("[data-create]").addEventListener("click", () => {
  const input = document.querySelector("input");
  const amount = parseInt(input.value, 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
  return;
});

document
  .querySelector("[data-destroy]")
  .addEventListener("click", destroyBoxes);

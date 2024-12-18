const countTotalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${countTotalCategories.length}`);

const items = document.querySelectorAll(".item");

items.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li");

  console.log(`Category: ${categoryName}`);
  console.log(`Element: ${elements.length}`);
});

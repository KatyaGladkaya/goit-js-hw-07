const categoriesList = document.getElementById("categories");

const categoriesNumber = categoriesList.querySelectorAll(".item").length;
console.log(`Number of categories: ${categoriesNumber}`);

const items = categoriesList.querySelectorAll(".item");
items.forEach((item) => {
  const title = item.querySelector("h2");
  title.classList.add("list-item-title");
  const listItems = item.querySelectorAll("ul li");
  listItems.forEach((li) => {
    li.classList.add("list-item");
  });
  const itemNumber = item.querySelectorAll("ul li").length;
  console.log(`Category: ${title}, Elements: ${itemNumber}`);
});

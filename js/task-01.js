const categories = document.querySelectorAll(".categories-item");
const itemList = document.querySelectorAll(".categories-item-list");

const categoriesLength = `Number of categories: ${categories.length}`;
console.log(categoriesLength);

for (let i = 0; i < itemList.length; i++) {
    const category = `Category: ${categories[i].firstElementChild.textContent}`;
    const element = `Elements: ${categories[i].lastElementChild.children.length}`
    console.log(category);
    console.log(element);
}


// This script adds interactivity to the Doro Wat Recipe Page
document.addEventListener('DOMContentLoaded', () => {
// Automatically add a new ingredient
const ingredientList = document.querySelector('#ingredients ul');
if (ingredientList) {
// create a new <li> element
const li = document.createElement('li');
// Set the text of the new list item
li.textContent = '1 tsp black pepper';
// Add a Bootstrap style to the list item
li.classList.add('list-group-item');
// attach the new item to the ingredient list
ingredientList.appendChild(li);
}
}); // <-- closes DOMContentLoaded

// Add click-to-strike feature
const ingredients = document.querySelectorAll('#ingredients li');
ingredients.forEach((item) => {
// Toggle checked class when an item is clicked
item.addEventListener('click', () => {
item.classList.toggle('checked');
});
});

// Add click event to change title color
const colorButton = document.querySelector('#color-btn');
// Select the recipe title
const recipeTitle = document.querySelector('#recipe-title');
// Change the title color when button is clicked
if (colorButton && recipeTitle) {
colorButton.addEventListener('click', () => {
recipeTitle.style.color = 'orange';
});
}

// Back to Top button
const backToTopBtn = document.getElementById('backToTopBtn');

// Show button when scrolled down 200px
window.onscroll = function () {
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
backToTopBtn.style.display = 'block';
} else {
backToTopBtn.style.display = 'none';
}
}; // <-- end of onscroll

// Smooth scroll to top
backToTopBtn.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});

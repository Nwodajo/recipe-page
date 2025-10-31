// Add a new ingredient automatically 
const ingredientList = document.querySelector('#ingredients ul');
// create a new <li> element
const li = document.createElement('li');
// Set the text of the new list item
li.textContent =' 1 tsp black pepper';
// Add a Bootstrap style to the list item 
li.classList.add('list-group-item');
// attach the new item to the ingredient list 
ingredientList.appendChild(li);

// Add click to strike feauture

const ingredients = document.querySelectorAll('#ingredients li');
ingredients.forEach((item) => {
    // Toggle "checked" class when an item is clicked
    ingredients.addEventListener('click',() => {
        item.classList.toggle('checked');
    });

});
// Add click even to change  title color
const colorButton = document.querySelector('#color-btn');



// Select the recipe title 
const recipeTitle = document.querySelector('#recipe-title');
// Change the title color when button is clicked
colorButton.addEventListener('click',()=>{
    recipeTitle.style.color ='orange';
});
// Back TO Button Function
let topButton = document.getElementById('backToTopBtn');
topButton.addEventListener('click',() =>{
    window.scrollTo({ top: 0, behavior: 'smooth'});

});


// Show button when scrolled down 200px//
window.onscroll = function(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        backToTpBtn.style.display =='block';
    } else {
        backToTpBtn.style.display = 'none';
}
};
// Scroll smoothly to top when clicked /
backToTpBtn.addEventListener('click',function(){
    window.screenTop({top: 0, behavior: 'smooth'});
})
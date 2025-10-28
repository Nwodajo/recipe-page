// Add a new ingredient automatically 
const ingredientList = document.querySelector('#ingredients ul');
// create a new Li
const li = document.createElement('li');
// Set the text
li.textContent =' 1 tsp black pepper';
// give it the same Bootstrap style 
li.classList.add('list-group-item');
// attach it to the list
ingredientList.appendChild(li);

// Add click to strike feauture

const items = document.querySelectorAll('#ingredients li');
items.forEach((item) => {
    item.addEventListener('click',() => {
        item.classList.toggle('checked');
    });

});
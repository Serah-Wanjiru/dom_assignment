document.body.style.backgroundColor='silver'           
document.getElementById('title').style.color='green'   
const h3Elements = document.querySelectorAll('h3');    
h3Elements.forEach((h3) => {
  h3.style.textTransform = 'uppercase';
});

var fruits = document.getElementById('fruList')
var newFruit = document.createElement('li')
newFruit.textContent = 'mango';
fruits.appendChild(newFruit)

var vegies = document.getElementById('vegList')
var newVegie = document.createElement('li');
newVegie.textContent = 'pumkin';
vegies.appendChild(newVegie)
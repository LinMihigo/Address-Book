// Adding a numerical indicator showing changes when the slide is moved
var slider=document.getElementById("age");
var output=document.getElementById("myAge");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}

//function to publish contact form entries in the table
function publishToTable() {
  const name = document.getElementById('name').value;
  const rel = document.getElementById('rel').value;
  const age = document.getElementById('age').value;
  const tel = document.getElementById('tel').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const error = document.getElementById('error');
  
 // Checking if all input are filled and returning feedback when they aren't all filled
  error.innerHTML = (!name || !rel || !age || !tel || !email || !address) ? '*All entries are required!' : '';
  if (name && rel && age && tel && email && address) {
    const tableElement = document.getElementById('table');
    const trElement = document.createElement('tr');
    const tbodyElement = document.createElement('tbody');
    const nameEle = document.createElement('td');
    const relEle = document.createElement('td');
    const ageEle = document.createElement('td');
    const telEle = document.createElement('td');
    const emailEle = document.createElement('td');
    const addressEle = document.createElement('td');
    nameEle.innerHTML = name;
    relEle.innerHTML = rel;
    ageEle.innerHTML = age;
    telEle.innerHTML = tel;
    emailEle.innerHTML = email;
    addressEle.innerHTML = address;
    // Publish partially only the name and table borders.
    trElement.appendChild(nameEle);
    tbodyElement.appendChild(trElement);
    tableElement.appendChild(tbodyElement);
          
// Conditionally pushing to table of the rest of the entries when 'name' is clicked
    nameEle.addEventListener('click', function handleClick(){
      trElement.appendChild(relEle);
      trElement.appendChild(ageEle);
      trElement.appendChild(telEle);
      trElement.appendChild(emailEle);
      trElement.appendChild(addressEle);
    });
  };
}

// Clearing previous entries into form when they are submitted
const form = document.getElementById('form');
const btn = document.getElementById('btn');
btn.addEventListener('click', function handleClick(event) {
  form.reset();
});


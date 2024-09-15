// TODO: select query items from page to display down below
const soldEl = document.getElementById('soldData');
const favEl = document.getElementById('favData');
const totalEl = document.getElementById('salesData');

// // TODO: grab the sold data of items sold
// function soldDisplay() {
//     const sold = [JSON.parseInt(localStorage.getItem('key', sold)) || []];

//     if (sold.length > 0) {
//         soldEl.textContent = sold.values;
//     }
// }

// //TODO: make a function that grabs the local favorite data and adds it to the table on adminpage
// function favDisplay() {
//     const favs = [JSON.parseInt(localStorage.getItem('key', favs)) || []];

//     if (favs.length > 0) {
//         favEl.textContent = favs.values;
//     }
// }
// //TODO: make a function that grabs the local items sold and sums up all sold items value
// function totalSales() {
//     const numSold = [JSON.parseInt(localStorage.getItem('key', numSold)) || []];
//     let sum = 0;

//     for(i = 0; 0 < numSold.length; i++) {
//         sum++;
//         totalEl.textContent = sum;
//     }
// }

// function editText() {
//     const editTextAreaEl = document.getElementById('editTextArea');
//     const editBtn = document.getElementById('editSave');
//     const cardTextEl = document.getElementById('cardText');

//     editTextAreaEl.addEventListener('click', function(){
//         editTextAreaEl.value = localStorage.setItem('textArea' , JSON.stringify(editTextAreaEl));
//     }
// )

//     for(let i = 0; 0 < editTextAreaEl.length; i++) {

//         const newTextEl = document.createElement('p');
//         newTextEl = JSON.parse(localStorage.getItem('textArea'));
//         cardTextEl.appendChild(newTextEl);

//         if(newTextEl.value > 0 && editBtn.addEventListener('click')) {
//             cardTextEl.textContent = newTextEl.value;
//         }
//         console.log(newTextEl);
//     }
// }

// editText();

const saveChangesBtn = document.querySelector('#editSave');

saveChangesBtn.addEventListener('click', function(event) {
    event.preventDefault();

    const editItemDescription = document.querySelector('#editTextarea').value;

    console.log(editItemDescription);
})

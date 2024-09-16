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



const saveChangesBtn = document.querySelector('#editSave');
let modal = document.querySelector('.modal');

modal.addEventListener('click', function(event) {
    event.preventDefault();

    const editImage = document.querySelector('#editImage');

    const editTitleDescription = document.querySelector('#editTitle');

    const editItemDescription = document.querySelector('#editTextarea');

    if(!editTitleDescription.value || !editItemDescription.value) {
        document.querySelector('#ModalLabel').textContent = 'Please Fill All Fields.';
        return;
    } 

    document.querySelector('#image').setAttribute('src', editImage.value);
    
    document.querySelector('#cardTitle').textContent = editTitleDescription.value;

    document.querySelector('#cardText').textContent = editItemDescription.value;

})


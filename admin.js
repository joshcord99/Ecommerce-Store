// TODO: select query items from page to display down below
// const soldEl = document.getElementById('soldData');
// const favEl = document.getElementById('favData');
// const totalEl = document.getElementById('salesData');

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
const addNewBtn = document.querySelector('#addNewBtn');
const cardDivEl = document.querySelector('.card');
    addNewBtn.addEventListener('click', function() {
        cardDivEl.style.display = 'block';
    })

const newItems = [];


const saveChangesBtn = document.querySelector('#editSave');
let modal = document.querySelector('.modal');

saveChangesBtn.addEventListener('click', function(event) {
    event.preventDefault();

    const editImage = document.querySelector('#editImage');
    const editTitle = document.querySelector('#editTitle');
    const editItemDescription = document.querySelector('#editTextarea');
    const editPrice = document.querySelector('#editPrice');

    if(!editTitle.value || !editItemDescription.value) {
        document.querySelector('#ModalLabel').textContent = 'Please Fill All Fields.';
        return;
    } 

    const newItemObj = {
        imgUrl: '',
        title: '',
        desc: '',
        price: '',
    }

    document.querySelector('#image').setAttribute('src', editImage.value);
    document.querySelector('#cardTitle').textContent = editTitle.value;
    document.querySelector('#cardText').textContent = editItemDescription.value;
    document.querySelector('#price').textContent = editPrice.value;

    newItemObj.imgUrl = editImage.value;
    newItemObj.title = editTitle.value;
    newItemObj.desc = editItemDescription.value;
    newItemObj.price = editPrice.value;

    newItems.push(newItemObj);
    console.log(newItems);
    saveData(newItems);
})

function saveData(data) {
    localStorage.setItem('newSaleItems', JSON.stringify(data));
}


// variables for sales items and cart items
const saleitems = {
    titles:['bag','shoes','short','shirt','watch','belt','socks'],
    imgurl:['https://img.freepik.com/free-vector/realistic-horizontal-sale-banner-template-with-photo_23-2149017940.jpg'],
    prices:[10,50,20,25,30,20,10]
};
const cartItms = {
    titles:[],
    prices:[]
};
// for loop to render sales items on the page
for (let i=0;i<saleitems.titles.length;i++){

const rowDiv = document.querySelector('.row');//creating elements
const colDivel = document.createElement('div');
const carddivel = document.createElement('div');
const cardbodydiv = document.createElement('div');
const elImg = document.createElement('img');
const h5el = document.createElement('h5');
const pEl = document.createElement('p');
const aOneEl = document.createElement('a');
const aTwoEl = document.createElement('a');
cardbodydiv.classList.add('card-body');
h5el.classList.add('card-title');
h5el.textContent = saleitems.titles[i];
pEl.classList.add('card-text');
pEl.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content.";

aOneEl.classList.add('btn','btn-primary');
aOneEl.textContent = 'ADD TO CART';
aOneEl.setAttribute('data-index',i);

aTwoEl.classList.add('btn','bg-opacity-10');
aTwoEl.textContent = '❤️';
cardbodydiv.innerHTML+=h5el.outerHTML + pEl.outerHTML + aOneEl.outerHTML + aTwoEl.outerHTML;
elImg.setAttribute('src','https://img.freepik.com/free-vector/realistic-horizontal-sale-banner-template-with-photo_23-2149017940.jpg')
elImg.classList.add('card-img-top');
carddivel.classList.add('card','mt-2','mb-2');
carddivel.style.width = '18rem';
carddivel.innerHTML+= elImg.outerHTML + cardbodydiv.outerHTML;
colDivel.classList.add('col');
colDivel.appendChild(carddivel);
rowDiv.appendChild(colDivel);
}

// selecting elements with class card to add event listener and add/save selected items in the cart
const cartEl = document.querySelectorAll('.card');

for (const Elmt of cartEl){
    
    Elmt.addEventListener('click',function(e){
        const element = e.target;
        if(element.matches('a')){
            const index  = element.getAttribute('data-index');
            cartItms.titles.push(saleitems.titles[index]);
            cartItms.prices.push(saleitems.prices[index]);
        }
        
        console.log(cartItms);
    })
}
// show cart items in the modal by selecting cart button with id cart and append items in the modal to render
const cartBtn = document.querySelector('#cart');
cartBtn.addEventListener('click',function(){

    const modalbody = document.querySelector('.modal-body');
    modalbody.innerHTML = '';
    console.log(modalbody);
    const olEl = document.createElement('ol');
    if(cartItms.titles.length){

        for(let i = 0; i<cartItms.titles.length; i++){
            
            const liEl = document.createElement('li');
            const aEl = document.createElement('a');
            aEl.classList.add('btn','btn-close');
            aEl.setAttribute('data-index',i);
            aEl.addEventListener('click',function(){
               const index = aEl.getAttribute('data-index');
               cartItms.titles.splice(index,1);
               cartItms.prices.splice(index,1);
               aEl.parentElement.remove();
            });
            liEl.textContent = cartItms.titles[i] +' for $' + cartItms.prices[i].toFixed(2);
            liEl.append(aEl);
            olEl.append(liEl);
        }
        modalbody.append(olEl);
    }else{
        modalbody.innerHTML = 'Nothing in the Cart Yet..';
    }
});

// function saveData(cartItms){
//     localStorage.setItem('CartItems')

// }

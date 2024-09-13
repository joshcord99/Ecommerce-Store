const cartEl = document.querySelectorAll('.card');
const saleitems = {
    titles:['bag','shoes'],
    imgurl:['https://img.freepik.com/free-vector/realistic-horizontal-sale-banner-template-with-photo_23-2149017940.jpg'],
    prices:[10,50]
};
const cartItms = {
    titles:[],
    prices:[]
};
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
// toggle between Login and Registration

const signupbtn = document.querySelector('#signup');
const loginbtn = document.querySelector('#login');
signupbtn.addEventListener('click',function(){
    signupbtn.parentElement.classList.toggle('invisible');
    loginbtn.parentElement.classList.toggle('invisible');
})
loginbtn.addEventListener('click',function(){
    loginbtn.parentElement.classList.toggle('invisible');
    signupbtn.parentElement.classList.toggle('invisible');
})

const users = JSON.parse(localStorage.getItem('newUsers')) || []

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('exampleInputEmail1');
const passwordInput = document.getElementById('exampleInputPassword1');
const isAdminInput = document.getElementById('isAdmin');
//saves in local storage
//localstorage.setItem('blogPost', JSON.stringify(blogPost));

const newUsers = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    isAdmin: isAdminInput,
}
users.push(newUsers)
localStorage.setItem('newUsers', JSON.stringify(users));

console.log(users);

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

if(!isAdminInput) {
    redirectPage('./index.html');
} else {
    redirectPage('./admin.html')
}

//localstorage.setItem(`emailIexampleInputEmail1`, email);
//localstorage.getItem(`exampleInputPassword1`, password);
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


// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

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

// const nameInput = document.getElementById('name').value;
// const emailInput = document.getElementById('exampleInputEmail1').value;
// const passwordInput = document.getElementById('exampleInputPassword1').value;
// //const userClientInput = document.getElementById('userClient').value;
// //const userAdminInput = document.getElementById('userAdmin').value;
//saves in local storage
//localstorage.setItem('blogPost', JSON.stringify(blogPost));

//function getOption() {
  //  selectElement =
    //    document.querySelector('#userType');
    //output = selectElement.value;
   // document.querySelector('.output').textContent = output;
//}

// const newUsers = {
//     name: nameInput,
//     email: emailInput,
//     password: passwordInput,
//     usertype: getOption(),
    //client: userClientInput,
    //admin: userAdminInput,
// }
// users.push(newUsers)
// localStorage.setItem('newUsers', JSON.stringify(users));

// console.log(users);

// let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

//if(!isAdminInput) {
  //  redirectPage('./index.html');
//} else {
  //  redirectPage('./admin.html')
//}

//localstorage.setItem(`emailIexampleInputEmail1`, email);
//localstorage.getItem(`exampleInputPassword1`, password);
const form = document.querySelector('#myForm');

form.addEventListener('submit', function(event){
    event.preventDefault();

    let select = document.querySelector('#userType').value;
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#exampleInputEmailOne').value;
    let password = document.querySelector('#exampleInputPasswordOne').value;

    localStorage.setItem('userType', select);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    console.log('User Type:', select);
    console.log('User Name:', name);
    console.log('User Email:', email);
    console.log('User Password:', password);

    let storedUserType = localStorage.getItem('userType');
    let storedName = localStorage.getItem('name');
    let storedEmail = localStorage.getItem('email');
    let storedPassword = localStorage.getItem('password');

    console.log('Stored User Type:', storedUserType);
    console.log('Stored Name:', storedName);
    console.log('Stored Email:', storedEmail);
    console.log('Stored Password:', storedPassword);
});

const logInForm = document.querySelector('#logInForm');

logInForm.addEventListener('submit', function (event){
    event.preventDefault();
    let select = document.querySelector('#userType').value;
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#exampleInputEmailOne').value;
    let password = document.querySelector('#exampleInputPasswordOne').value;

    let storedUserType = localStorage.getItem('userType');
    let storedName = localStorage.getItem('name');
    let storedEmail = localStorage.getItem('email');
    let storedPassword = localStorage.getItem('password');
    
    if(!storedEmail || !storedPassword) {
        storedName = '';
        storedEmail = '';
        storedPassword = '';
        return;
    } else if(storedUserType === 'true') {
        location.assign('./admin.html');
    } else if(storedUserType === 'false') {
        location.assign('./index.html');
    }else {
        alert('Unknown user type');
    }
    // if(email.value !== storedEmail) {
    //     alert('Please enter valid email')
    // } else if (password.value !== storedPassword) {
    //     alert('Please enter valid password') 
    // } else {
    //     alert('Login Success')
    // }
});

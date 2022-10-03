
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});


const nav = document.querySelector('nav');
console.log(nav);

window.addEventListener("scroll", function()  {
    const offset = window.pageYOffset;

    if(offset > 30) {
      nav.classList.add("scroll")

    }
    else {
      nav.classList.remove("scroll")
    }

});
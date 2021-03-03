document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.nav__list-holder').classList.toggle('nav__list-holder--visible');
};


mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop +=  100; // For Safari
    document.documentElement.scrollTop += 100; // For Chrome, Firefox, IE and Opera
}

//  <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>

function burgerShow(event) {
    let element = document.getElementById("hamburger");
    element.classList.toggle("hamburger--visible");

}
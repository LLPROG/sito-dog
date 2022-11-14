let dropmenu = document.getElementById('drop');
let menuMobile = document.getElementById('menuMobile');
let hidemenu = document.getElementById('hide');
let body = document.body;
let links = document.querySelectorAll('.link');
let header = document.getElementsByTagName('header');
let hero = document.querySelector('.hero');

let open = false

function openmenu() {

    if (open == false) {
        menuMobile.classList.add('show');
        hidemenu.classList.add('show');
        body.classList.add('hidescroll')
        open = true
        console.log('show')
        console.log(open)

    }
}

function closemenu() {

    if (open == true) {
        menuMobile.classList.remove('show');
        hidemenu.classList.remove('show');
        body.classList.remove('hidescroll')

        open = false
        console.log('hide')
        console.log(open)

    }
}

dropmenu.addEventListener('click', openmenu);
hidemenu.addEventListener('click', closemenu);

links.forEach((link) => {
    link.addEventListener('click', closemenu);
    console.log('hide')

});


// header effect 


window.addEventListener('scroll', () => {
    let heroH = hero.offsetHeight;
    let headerH = header[0].offsetHeight;

    console.log(headerH)

    const currentscroll = window.pageYOffset

    if (currentscroll > headerH) {
        body.classList.add('translate-header');
    }

    if (currentscroll >= heroH) {
        body.classList.add('show-header');
        body.classList.remove('translate-header');
    }

    if (currentscroll <= 0) {
        body.classList.remove('show-header');
        body.classList.remove('translate-header');
    }

    // if (currentscroll < scroll && body.classList.contains('scroll-down')) {
    //     body.classList.remove('scroll-down');
    //     body.classList.add('scroll-up');
    // }


    // lastscroll = currentscroll;
})

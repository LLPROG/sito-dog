let dropmenu = document.getElementById('drop');
let menuMobile = document.getElementById('menuMobile');
let hidemenu = document.getElementById('hide');
let body = document.body;
let links = document.querySelectorAll('.link');
let header = document.getElementsByTagName('header')

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

let lastscroll = 0

window.addEventListener('scroll', () => {
    const currentscroll = window.pageYOffset
    console.log('cur' + currentscroll)
    console.log('last' + lastscroll)


    if (currentscroll <= 0) {
        body.classList.remove('scroll-up');
    }

    if (currentscroll > lastscroll && !body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-up');
        body.classList.add('scroll-down');
    }

    if (currentscroll < lastscroll && body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-down');
        body.classList.add('scroll-up');
    }


    lastscroll = currentscroll;
})

window.addEventListener("scroll", onScroll)

onScroll()
function onScroll() {
    ShowNavOnScroll()
    showBackToTopButtonOnScroll()
    active()
}

function ShowNavOnScroll() {
    
    if(scrollY > 0){
        navigation.classList.add("scroll")
    } else {
    navigation.classList.remove("scroll")
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 888.8889770507812){
        backToTopButton.classList.add("show")
    }
    else {
        backToTopButton.classList.remove("show")
    }
}

function openMenu() {
    document.body.classList.add("menu-expanded")
}

function closeMenu() {
    document.body.classList.remove("menu-expanded")
}


ScrollReveal({
    origin:'top',
    distante: '30px',
    duration: 700,
}).reveal(`
#home, 
#home img,
#home .stats,
#services,
#services header,
#services .cards,
#about,
#about header,
#about content`)

function active() {
    if(scrollY>=0 && scrollY<800) {
        menuOne.classList.add("active")
    }   else {
        menuOne.classList.remove("active")
    }

    if(scrollY>=800 && scrollY<1500) {
        menuTwo.classList.add("active")
    } else {
        menuTwo.classList.remove("active")
    }
    if (scrollY>=1500 && scrollY<2200) {
        menuThree.classList.add("active")
    } else {
        menuThree.classList.remove("active")
    }
}
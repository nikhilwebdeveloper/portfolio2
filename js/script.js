
// PRELOADER
let preloader = document.getElementById("preloader-container")
let body = document.getElementById("body")

function prefunction(){
    preloader.style.display = "none"
    body.style.overflowY = "auto"
}

function openmore(){
    // document.getElementById("more-menu").style.display = 'block'
    document.getElementById("more-menu").style.transform = 'scaleY(1)'
    document.getElementById("open-more-li").style.display = 'none'
    document.getElementById("close-more-li").style.display = 'inline-block'
    document.getElementById("close-more").style.display = "inline-block"
    // document.getElementById("close-more").style.zIndex = '2'
    // document.getElementById("open-more").style.zIndex = '1'
    document.getElementById("more-after").style.transform = 'rotate(90deg)'
}

function closemore(){
    // document.getElementById("more-menu").style.display = 'none'
    document.getElementById("more-menu").style.transform = 'scaleY(0)'
    document.getElementById("open-more-li").style.display = 'inline-block'
    document.getElementById("close-more-li").style.display = 'none'
    // document.getElementById("close-more").style.zIndex = '1'
    // document.getElementById("open-more").style.zIndex = '2'
    document.getElementById("more-after").style.transform = 'rotate(180deg)'
}

// MOBILE MENU
function mobilemenu(){
    document.getElementById("navbar").style.left = "0px"
    document.getElementById("mobile-menu").style.display = "none"
}
function closemenu(){
    document.getElementById("navbar").style.left = "-528px"
    document.getElementById("mobile-menu").style.display = "inline-block"
}

// SCROLL HIDDEN

window.addEventListener('scroll', function(){
    let scrollhidden = document.getElementById('navbar');

    if(window.innerWidth <= 500){
        if(window.pageYOffset >= 1){
            scrollhidden.style.left = '-528px'
            document.getElementById('mobile-menu').style.display = 'inline-block'
        }else if(window.innerWidth > 500){
            scrollhidden.style.left = '0px'
        }
    }   

});

    let home = document.getElementById('home-li')
    let abt = document.getElementById('abt-li')
    let contect = document.getElementById('contect-li')
window.addEventListener('scroll', function(){
    if(window.pageYOffset >= 548){
        document.getElementById('abt-li').style.color = '#efd91f'
        document.getElementById('home-li').style.color = '#fff'
    }else{
        document.getElementById('abt-li').style.color = '#fff'
        document.getElementById('home-li').style.color = '#efd91f'
    }

    if(window.pageYOffset >= 2100.88){
        document.getElementById('contect-li').style.color = '#efd91f'
        document.getElementById('abt-li').style.color = '#fff'
    }else{
        document.getElementById('contect-li').style.color = '#fff'
        // document.getElementById('abt-li').style.color = '#efd91f'
    }
})

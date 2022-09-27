

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
        }
    }
        

});

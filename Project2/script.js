let div = document.getElementById('div');
div.style.backgroundColor ="black";
div.style.width = '120px';
div.style.height='60px';
div.style.borderRadius = '50px'
let toggle = document.getElementById('circle');
let body = document.querySelector('body')
let moon = document.getElementsByClassName('moon')
let big = document.querySelector('h1')
let small = document.querySelector('h3')

let check = "day"
toggle.addEventListener('click' , function (){
    if(check==="day"){
        toggle.style.transform = "translateX(-59px)"
        div.style.backgroundColor = "#3d3d3c"
        toggle.style.transition = "all 1s ease"
        check = "night"
        body.style.backgroundImage ="url(https://i.pinimg.com/originals/18/03/0b/18030b06cb33fcedf337bf6dc9b9473f.gif)"
        big.style.color = "white"
        small.style.color = "white"
        small.innerText = "NIGHT MODE"
    }
    else{
        toggle.style.transform = "translateX(1px)"
        div.style.backgroundColor = "black"
        toggle.style.transition = "all 1s ease"
        check = "day";
        body.style.backgroundImage ="url(https://i.pinimg.com/originals/c8/ba/30/c8ba30ee61944cc26dbde4022a0a4b72.gif)"
        big.style.color = "black"
        small.style.color = "black"
        small.innerText = "DAY MODE"
    } 
})

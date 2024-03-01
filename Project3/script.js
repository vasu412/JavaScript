let button = document.querySelector('.bt1')
let body = document.querySelector('body');
button.addEventListener('click' , function(){
    let color1 = "#" + Math. floor(Math. random() * 16777215). toString(16);
    let color2 = "#" + Math. floor(Math. random() * 16777215). toString(16);
    let gradient = 'linear-gradient(to right,'+ color1 +','+ color2+ ')';
    body.style.background= gradient
    button.style.backgroundColor = "#" + Math. floor(Math. random() * 16777215). toString(16);
    button.style.color = "#" + Math. floor(Math. random() * 16777215). toString(16);
})

let div = document.querySelector('.div');
let bt2 = document.querySelector('.bt2');
let tri = document.querySelector('.tri');

let shape = 'square';

bt2.addEventListener('click',function(){
    if(shape==='square'){
        tri.style.display = 'none';
        div.style.display = 'block';
        div.style.borderRadius = "100%";
        shape = 'circle';
    }
    else if(shape==='circle'){
        tri.style.display = 'none';
        div.style.display = 'block';
        div.style.borderRadius = '0';
        shape='tri';
    }
    else {
        tri.style.display = 'block';
        div.style.display = 'none';
        // bt2.style.marginTop = '46.5vh'
        shape='square';
    }
})
let date  = new Date;
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let h = document.querySelector('.hour');
let m = document.querySelector('.min');
let s = document.querySelector('.sec');

h.innerText = hour +":";
m.innerText = min +":";

window.addEventListener('load',()=>{
    setInterval(()=>{
        if(sec==60) {
            sec=0;
            min+=1;
        }
        if(min==60){
            min=0;
            hour+=1;
        }
        if(hour==24){
            hour=0;
        }
        if(sec>=0 &&sec<10){
            s.innerText =":"+ "0"+ sec;
        }
        else {
            s.innerText = ":"+sec;
        }
        if(min>=0 &&min<10){
            m.innerText ="0"+ min;
        }
        else {
            m.innerText = min;
        }
        if(hour>=0 &&hour<10){
            h.innerText ="0"+ hour+":";
        }
        else {
            h.innerText = hour+":";
        }
        sec+=1;
    },1000)
} )

let fonts = fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyB6vhwcBZYh_4mY6sgMuKuZT7KoILcGVvE");

let select = document.getElementById('font')
let main = document.querySelector('.main')
let link = document.querySelector('.link');

async function abc() {
    let data = await fonts;
    let res = await data.json();

    console.log(res)
    res.items.forEach((ele) => {
        let option = document.createElement('option');
        // let atr = link.getAttribute('href');
        // console.log(atr);
        // link.setAttribute('href',atr+ele.family+"sherif"+"|")
        // console.log(link)
        option.innerHTML= ele.family;
        // main.style.fontFamily = ele.family
        select.appendChild(option)
    });
}
abc()

let set = document.querySelector('.set');
let box = document.querySelector('.box')

let count =0;
set.addEventListener('click',()=>{
    if(count==0){
        box.style.display = 'flex';
        count++;
    }
    else{
        box.style.display = 'none';
        count--;
    }
})

let bg = document.querySelector('.bg')
let tc = document.querySelector('.tc')

main.addEventListener('click',()=>{
    box.style.display = 'none';
})

bg.addEventListener('click',()=>{
    main.style.backgroundColor = bg.value
})

tc.addEventListener('click',()=>{
    main.style.color = tc.value
})

box.addEventListener('click',()=>{
    main.style.backgroundColor = bg.value
    main.style.color = tc.value
})

let white = document.querySelector('.white');
let black = document.querySelector('.black');

white.addEventListener('click',()=>{
    h.style.color = 'white'
    m.style.color = 'white'
    s.style.color = 'white'
})

black.addEventListener('click',()=>{
    h.style.color = 'black'
    m.style.color = 'black'
    s.style.color = 'black'
})

let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let auto = document.querySelector('.auto');

let size = 180

auto.addEventListener('click',()=>{
    size = 180
    h.style.fontSize = `${size}px`
    m.style.fontSize = `${size}px`
    s.style.fontSize = `${size}px`
})

minus.addEventListener('click',()=>{
    size-=45;
    h.style.fontSize = `${size}px`
    m.style.fontSize = `${size}px`
    s.style.fontSize = `${size}px`
})

plus.addEventListener('click',()=>{
    size+=45;
    h.style.fontSize = `${size}px`
    m.style.fontSize = `${size}px`
    s.style.fontSize = `${size}px`
})

let hide = document.querySelector('.hide');
let show = document.querySelector('.show');

hide.addEventListener('click',()=>{
    s.style.display = 'none'
})

show.addEventListener('click',()=>{
    s.style.display = 'block'
})

let half = document.querySelector('.half');
let full = document.querySelector('.full');

let num =0;
half.addEventListener('click',()=>{
    if(hour>12){
        if(hour>0 &&hour<10){
            h.innerText ="0"+ (hour-12)+":";
        }
        h.innerText = (hour-12)+":"
        num++;
    } 
})

full.addEventListener('click',()=>{
    if(num>0){
        h.innerText = (hour)+":"
        num--;
    }
})

let bold = document.querySelector('.bold');
let b=0;
bold.addEventListener('click',()=>{
    if(b==0){
        h.style.fontWeight = 'bold'
        m.style.fontWeight = 'bold'
        s.style.fontWeight = 'bold'
        b++;
    }
    else{
        h.style.fontWeight = 'normal'
        s.style.fontWeight = 'normal'
        m.style.fontWeight = 'normal'
        b--;
    }
})

let img = document.querySelector('.img')
let images = fetch("https://pixabay.com/api/?key=42868898-ed34784613294936d0d4f6293&q=yellow+flowers&image_type=photo");
async function getImg(){
    let data = await images;
    let res = await data.json();
    console.log(res);
    img.addEventListener('click',()=>{
        let i=Math.floor(Math.random()*19);
        main.style.backgroundImage = `url(${res.hits[i].previewURL})`
    })
}

getImg();

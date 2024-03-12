let obj =[
    {
        name : "RANJIT SINGH",
        time : "JAN 2023: 09:24:44",
        country : "INDIA",
        score : 85
    },
    {
        name : "VASU SINGLA",
        time : "FEB 2023: 19:24:44",
        country : "INDIA",
        score : 95
    },
    {
        name : "RANVIR SINGH",
        time : "MAR 2023: 10:24:04",
        country : "INDIA",
        score : 78
    }
] 

obj.sort((a,b)=>{
    return b.score - a.score;
})

let box = document.querySelector('.box2');

function click (x){
    let div = document.createElement('div');
    div.classList.add('div')
    div.innerHTML = 
    `<div style ="width:200px">
        <p>${x.name}</p>
        <p style="font-size: 12px;">${x.time}</p>
    </div>
    <p>${x.country}</p>
    <p class ='score'>${x.score}</p>
    <div class="div2">
        <p class='del'>🗑</p>
        <p class='plus'>+5</p>
        <p class='minus'>-5</p>
    </div>
    `

    let plus = div.querySelector('.plus');
    let minus = div.querySelector('.minus');
    let del = div.querySelector('.del');
    
    let sc = div.querySelector('.score');
    plus.addEventListener('click',()=>{
        let num = parseInt(sc.innerText);
        num+=5;
        sc.innerText= num;
    })
    
    minus.addEventListener('click',()=>{
        let num = parseInt(sc.innerText);
        if(num>5){num-=5;}
        sc.innerText= num;
    })
    
    del.addEventListener('click', ()=>{
        div.style.display = 'none';
        obj.splice(obj.indexOf(x),1);
    })
    
    box.appendChild(div)
}

obj.forEach((x)=>{
    click(x);
})

let Fname = document.querySelector('.Fname');
let Lname = document.querySelector('.Lname');
let country = document.querySelector('.country');
let score = document.querySelector('.score');
let submit = document.querySelector('.button')
const month = ["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEP","OCT","NOV","DEC"];

const d = new Date();
let m2 = month[d.getMonth()];
let time = d.getHours()+":"+ d.getMinutes()+":"+d.getSeconds();

submit.addEventListener('click',()=>{
    if(Fname.value !=""&& Lname.value !=""&& country.value !=""&&score.value !=""){
        let o = {
            name : Fname.value.toUpperCase() +" "+ Lname.value.toUpperCase(),
            time : m2+" " + d.getFullYear()+" " + time,
            country : country.value.toUpperCase(),
            score : score.value
        }
        obj.push(o);
        obj.sort((a,b)=>{
            return b.score - a.score;
        })
        box.innerHTML='';
        obj.forEach((x)=>{
            click(x);
        })
        Fname.value ="";
        Lname.value ="";
        country.value ="";
        score.value ="";
    }
})


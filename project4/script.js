const main = document.querySelector('main');
const body = document.querySelector('body');
const input = document.querySelector('input');

let load = (val) => {
    filterData = emojiList.filter(e=>{
        if(e.description.indexOf(val) != -1) {return true;}
        if(e.aliases.find(ele => ele===val)) {return true;}
        if(e.tags.find(ele => ele===val)) {return true;}
    })
    return filterData;
}

let sideFilter = (val) => {
    filterData = emojiList.filter(e=>{
        if(e.category.indexOf(val) != -1) {return true;}
    })
    return filterData;
}

let printing = (val) => {
    main.innerHTML = '';
    val.forEach(e => {
        const div = document.createElement('div');
        const cont1 = document.createElement('div');
        const cont2 = document.createElement('div');
        const cont3 = document.createElement('div');

        cont1.innerText = e.emoji;
        cont1.style.fontSize = '60px';
        cont1.style.height = '100px';
        cont1.style.textAlign = 'center';
        cont1.style.padding = '20px ';

        cont2.innerText = e.aliases[0];
        cont2.style.color = 'white';
        cont2.style.margin = '10px';
        cont2.style.paddingTop = '5px';
        cont2.style.wordWrap = 'break-word';
        cont2.style.borderTop = '.5px solid gray';
        cont2.style.fontSize = '14px';

        cont3.innerText = e.description;
        cont3.style.color = 'white';
        cont3.style.margin = '10px';
        cont3.style.paddingTop = '5px';
        cont3.style.borderTop = '.5px solid gray';
        cont3.style.wordWrap = 'break-word';
        cont3.style.fontSize = '14px';

        div.appendChild(cont1);
        div.appendChild(cont2);
        div.appendChild(cont3);
        main.appendChild(div);

        div.style.border = '.5px solid gray'
        div.style.height = '200px';
        div.style.width = '200px';
        div.style.textAlign = 'center';
        div.style.margin = '20px';
        div.style.borderRadius = '13px';
        div.style.fontFamily = '"Cinzel", serif';
        div.style.boxShadow = '1px 1px 5px #bdbbb7';
        div.style.hover = 'display:none';
        div.style.backgroundColor = 'black';

        div.addEventListener('mouseleave' , function(){
            div.style.transform = 'scale(1)';
            div.style.zIndex = '9';
        })

        div.addEventListener('mouseover' , function(){
            div.style.transform = 'scale(2)';
            div.style.zIndex = '99';
            div.style.transition ='all 0.7s ease';
        })
    })
}

let load2 = (e) => {
    let val = e.target.value.toLowerCase();
    let ans=load(val);
    printing(ans)
}

window.addEventListener('load',printing(emojiList));
input.addEventListener('keyup' ,load2);

let left = document.querySelector('.left');
let data = document.querySelector('.left_data');
let cross = document.querySelector('.cross');

let side = () => {
    let check = " ";
    emojiList.forEach((e)=>{
        let p = document.createElement('p');
        p.style.fontFamily = '"Cinzel", serif';
        p.style.padding = '15px';
        p.addEventListener('mouseover' , function(){
            p.style.backgroundColor = 'black'
            p.style.color='white';
            p.style.borderRadius = '10px'
            p.style.transition ='all .5s ease';
        })
        p.addEventListener('mouseleave' , function(){
            p.style.backgroundColor = 'gray'
            p.style.color='black';
            p.style.borderRadius = '10px'
            p.style.transition ='all .5s ease';
        })
        if(e.category!=check){
            p.innerHTML = e.category;
            p.classList.add('p')
            check = e.category;
            data.appendChild(p);
        }
    })
}
let count =0;

const bar = document.querySelector('.bar');
bar.addEventListener('click',()=>{
    bar.style.display ='none';
    left.style.display = 'block';
    if(count===0){side();}
    input.style.marginLeft = '385px'
    count++;
    let p = document.querySelectorAll('.p');
    p.forEach((x)=>{
        x.addEventListener('click',function(){
            let ans = sideFilter(x.innerText);
            printing(ans);
            let load3 = (e) => {
                let val = e.target.value.toLowerCase();
                filterData = emojiList.filter(e=>{
                    if(e.category===x.innerText){
                        if(e.description.indexOf(val) != -1) {return true;}
                        if(e.aliases.find(ele => ele===val)) {return true;}
                        if(e.tags.find(ele => ele===val)) {return true;}
                    }
                })
                printing(filterData)
            }
            input.addEventListener('keyup' ,load3);
        })
    })
})

cross.addEventListener('click',()=>{
    bar.style.display ='block';
    left.style.display = 'none';
    input.style.marginLeft = '500px'
    printing(emojiList)
})

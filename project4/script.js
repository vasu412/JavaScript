const main = document.querySelector('main');
const body = document.querySelector('body');
const input = document.querySelector('input');

let load = (val) => {
    filterData = emojiList.filter(e=>{
        if(e.description.indexOf(val) != -1) {return true;}
        if(e.aliases.find(ele => ele===val)) {return true;}
        if(e.tags.find(ele => ele===val)) {return true;}
    })

    main.innerHTML = '';
    filterData.forEach(e => {
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
        div.style.overflow = 'scroll';
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
    let val = e.target.value;
    load(val);
}

window.addEventListener('load',load(''));
input.addEventListener('keyup' ,load2);
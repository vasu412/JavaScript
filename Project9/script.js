let body = document.querySelector('.body')
for(let i=0;i<100;i+=1){
    let div = document.createElement('div');
    div.innerHTML="|";
    div.style.position = 'absolute'
    div.style.rotate = `${i}deg`
    body.appendChild(div);
}
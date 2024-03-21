let body = document.querySelector('.section')
for(let i=1;i<11;i++){
    let color = fetch(`https://pokeapi.co/api/v2/pokemon-color/${i}/`)

    async function pokeColor (){
        let data = await color;
        let res = await data.json();
        console.log(res);
    }
    pokeColor();
}


for(let i=1;i<1000;i++){
 
    let poke = fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    async function pokemon (){
        let data = await poke;
        let res = await data.json();
        // console.log(res);

        let div = document.createElement('div');
        div.classList.add('box')
        div.innerHTML = 
        `
        <main class="main"></main>
        <img src=${res.sprites.other['official-artwork'].front_default} alt="" style ="z-index:999">
        <p class="p">${res.species.name.toUpperCase()}</p>
        `
        body.appendChild(div);

        let box = document.querySelectorAll('.box');
console.log(box)
    }
    pokemon();

}



box.forEach(x=>{
    console.log(x)
})
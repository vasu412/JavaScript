let input = document.querySelector('.input')
let box = document.querySelector('.box')
let button = document.querySelector('.button')
let count =0;
button.addEventListener("click" ,()=>{
    if(count>0){
        box.innerText = '';
    }
    let imgs = fetch(`https://api.unsplash.com/search/collections?page=8&query=${input.value}&client_id=HgAI8o_mQF82RKKHOQgwpJUX85VsmX2sc9lvcCFVkzU`)
    async function images(){
        let data = await imgs
        let res = await data.json();
        console.log(res);

        res.results.forEach(x=> {
            let img = document.createElement('img')
            img.style.height = '300px'
            img.style.width = '305px'
            img.style.marginRight = '20px'
            img.style.marginBottom = '20px'
            x.preview_photos.forEach((ele)=>{
                img.src = ele.urls.full
                box.appendChild(img);
            })
        });
    }
    images();
    input.value = '';
    count++;
})

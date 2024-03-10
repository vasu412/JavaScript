const products = [
    {
        img : "https://m.media-amazon.com/images/I/41NQN8irrVL._MCnd_AC_.jpg",
        price : "418.00",
    },
    {
        img : "https://m.media-amazon.com/images/I/31SOMn7LufL._MCnd_AC_.jpg" ,
        price : "630.00",
    },
    {
        img : "https://m.media-amazon.com/images/I/311UQSlLlDL._MCnd_AC_.jpg" ,
        price : "359.00",
    },
    {
        img : "https://m.media-amazon.com/images/I/41yZpfqJQAL._MCnd_AC_.jpg" ,
        price :"198.00",
    },
    {
        img : "https://m.media-amazon.com/images/I/416pDzJljOL._MCnd_AC_.jpg" ,
        price :"372.00"
    },
    {
        img : "https://m.media-amazon.com/images/I/31XmKBGN-SL._MCnd_AC_.jpg" ,
        price :"329.00"
    },
    {
        img : "https://m.media-amazon.com/images/I/31wbbfrv5WL._MCnd_AC_.jpg" ,
        price :"300.00"
    },
    {
        img : "https://m.media-amazon.com/images/I/313nf+p926L._MCnd_AC_.jpg" ,
        price :"379.00"
    }
]


let button = document.querySelectorAll('button')
let h = document.querySelector('.rightH');
let h2 = document.querySelector('.rightH2');
let p = document.querySelector('.rightP');
let cart = document.querySelector('.cart_data');
let sub = document.querySelector('.span');
let hr = document.createElement('hr');
let total = 0;

function work(val,count,x){
    total += parseFloat(products[val]['price']);
    sub.style.display = 'block'
    sub.innerText = `₹${total}`
    x.innerText ="In basket"
    x.style.fontWeight ='bold'
    x.style.backgroundColor ="transparent"
    h.style.display = 'block';
    h2.style.display = 'block';
    p.style.display = 'none';

    let div = document.createElement('div');
    div.style.height = '205px';
    div.style.width = '130px'
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';

    let img = document.createElement('img');
    let price = document.createElement('p');
    let quantity = document.createElement('p');

    quantity.innerText = `Quantity : ${count} `;
    quantity.style.margin = '0';

    price.innerText = products[val].price
    price.style.margin = '3px';
    price.style.fontWeight = 'bold';
    img.src = products[val].img;

    let div2 = document.createElement('div');
    let b1 = document.createElement('button');
    let b2 = document.createElement('button');
    let b3 = document.createElement('button');

    div2.style.margin = '5px 0'
    div2.style.display = 'flex'
    b3.classList.add("material-icons")
    b1.innerText ="+";
    b2.innerText ="-";
    b3.innerText= "delete"
    b3.style.fontSize = '14px'
    b1.style.padding ='1px 4px';
    b1.style.margin = '0 8px';
    b2.style.padding ='1px 5px';
    b2.style.margin = '0 8px';
    b3.style.padding ='1px 4px';
    b3.style.margin = '0 8px';

    div2.append(b1,b2,b3);
    div.appendChild(img);
    div.appendChild(price);
    div.appendChild(quantity);
    div.appendChild(div2);
    
    img.style.height = '120px';
    img.style.width = '100px'
    cart.append(div)

    b1.addEventListener('click' , function(){
        count++;
        quantity.innerText = `Quantity : ${count} `;
        total+=parseFloat(products[val]['price']);
        sub.innerText = `₹${total}`
    })

    function del(){
        div.style.display = 'none';
        x.innerText="Add to Cart"
        x.style.backgroundColor ="#FFD814"
        x.style.fontWeight ='normal'
        total-= (parseFloat(products[val]['price'])*count);
        sub.innerText = `₹${total}`;
        if(total===0 ){
            sub.style.display='none'
            h2.style.display='none'
            h.style.display='none'
            p.style.display='block'
        }
    }

    b2.addEventListener('click' , function(){
        if(count===1){
            del();
        }
        else {
            count--;
            quantity.innerText = `Quantity : ${count} `;
            total-= parseFloat(products[val]['price']);
            sub.innerText = `₹${total}`
        }
    })

    b3.addEventListener('click' , function(){
        del();
    })
}

button.forEach((x)=>{
    let val = x.value;
    let count =1;

    x.addEventListener('click' ,()=>{
        if(x.innerText==='Add to Cart'){
            work(val,count,x);
        }
    })
    
})

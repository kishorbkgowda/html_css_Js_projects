let loan = document.querySelector('.princi');
let rate= document.querySelector('.int');
let time =document.querySelector('.months');
let btn = document.querySelector('button');
let para =document.querySelector('.result');

btn.addEventListener('click',()=>
{
    let result = loan.value*rate.value*0.01/time.value;
    let finalshowdown = loan.value/time.value+result;
    para.innerHTML= finalshowdown.toFixed(3);
    console.log(finalshowdown.toFixed(3));
})
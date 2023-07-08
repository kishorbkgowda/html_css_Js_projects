let i1 = document.querySelector('.o1');
let i2 = document.querySelector('.o2');
let sc = document.querySelector('.score');
let res = document.querySelector('.result');
let btn = document.querySelector('button');
let num = 0;

function funky()
{
    i1.innerHTML = randomno1();
    i2.innerHTML = randomno2(); 
    
}
funky();

btn.addEventListener('click',(e)=>
{  
   
    
   if(e.target.innerHTML == 'Submit')
   {    
       
        let lol = i1.innerHTML*i2.innerHTML;
        console.log(lol);
            if(res.value == lol)
                {
                    sc.innerHTML = ++num;
                    res.value='';
                    funky();
                    warning1(num);
                }
            else if(res.value!=lol || res.value=='')
                {
                     sc.innerHTML = --num;
                     res.value='';
                     funky();  
                     warning1(num);
                }

  
   }


})

function warning1(a)
{
    if(a>0)
{
     sc.style.color='green';
    
}

else if(a<0)
{ 

    sc.style.color='red';

}
}

function randomno1()
{
    let a = Math.round((Math.random()*100));
    return a;
   

}
function randomno2()
{
    let b = Math.round((Math.random()*100));
    return b;
   
}


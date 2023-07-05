let hours=document.querySelector('.hours');
let min=document.querySelector('.min');
let sec=document.querySelector('.sec');

setInterval(()=>{
    
let lol=new Date();
hours.innerHTML=(lol.getHours()<10?"0":"")+lol.getHours();
min.innerHTML=(lol.getMinutes()<10?"0":"")+lol.getMinutes();
sec.innerHTML=(lol.getSeconds()<10?"0":"")+lol.getSeconds();

},1000)

lol.getHours(()=>
{
    if(lol.getHours < 10)
    {
        lol.getHours="0"+lol.getHours;
    }
}
)


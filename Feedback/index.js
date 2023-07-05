let rating1=document.querySelectorAll(".rating");
let feeling="";
let btn = document.querySelector("button");
const cont=document.getElementById("container");

rating1.forEach((rating2)=>
{
    rating2.addEventListener("click",(e)=>
    {
        // console.log(e.target.innerText);
        // console.log(e.target.parentNode.innerText);
        // const a=e.target.parentNode.innerText;
        // console.log(a);
        // if(e.target.innerText != " " || e.target.parentNode.innerText != " ")
        // {   
          
            if((e.target.innerText || e.target.parentNode.innerText)!="");
            {
                removeActive();
                feeling=e.target.innerText || e.target.parentNode.innerText;
                e.target.classList.add("active");  
                e.target.parentNode.classList.add("active");
            }
         
        // }
    });

   
});

btn.addEventListener("click",() =>
{
    if(feeling !== "")
    {
        cont.innerHTML=
        `<div style="display:flex;justify-content:center; margin-bottom: 40px;">
        <strong style="text-align:center;font-size:1.5rem">Thank You!</strong>
        </div>
        <br />
        <br />
         <div style="display:flex;justify-content:center;margin-bottom:25px;font-family: 'Oswald', sans-serif;">
         <strong style="font-size:1.4rem;font-family: 'Oswald', sans-serif;">Feedback : ${feeling}</strong></div> 
         <div style="display:flex;justify-content:center;margin-bottom:25px;">
         <p style="font-family: 'Oswald', sans-serif;font-weight:bold;text-align:center;font-size:1.25rem;margin:10px;">
         We'll use your feedback to improve our customer support.
         </p>
         </div>
         
         `
        
        
                                                                          
                
    }


})

function removeActive()
{
    rating1.forEach((rating2)=> 
    {
           rating2.classList.remove("active");      
    });
}
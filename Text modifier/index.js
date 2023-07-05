let content = document.querySelector("textarea");
let buttons=document.querySelectorAll('button');
let para = document.querySelector("p");
para.innerHTML=`Total words entered ${content.value.length}`; 

buttons.forEach((btn)=>
{
 
btn.addEventListener('click',(e)=>
{
    if(e.target.innerHTML == 'Uppercase')
    {
        uppercaseconverter();
        
    }
    else if(e.target.innerHTML == 'Lowercase')
    {
           lowerconverter();  
    }
    else if(e.target.innerHTML == 'Clear')
    {
           clearoperator();
          para.innerHTML=`Total words entered ${content.value.length}`;        
    }
})
})

content.addEventListener('input',(e)=>
{
    let letter =e.target.value.split("");
    para.innerHTML=`Total words entered ${letter.length}`;
}
)


const uppercaseconverter=()=>
{

let string=content.value;
content.value=string.toUpperCase();

}
const lowerconverter=()=>
{
 let string =content.value;
 content.value=string.toLowerCase();
}

const clearoperator=()=>
{
    content.value="";
}


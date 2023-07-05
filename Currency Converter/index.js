let c1 = document.querySelector('.s1');
let c2 = document.querySelector('.s2');
let n1 = document.querySelector('.i1');
let n2 = document.querySelector('.i2');
let para = document.querySelector('p');
let btn = document.querySelector('button');


btn.addEventListener('click',(e)=>
{
    if(e.target.innerHTML == 'Submit')
    {
     if(c1.value == 'USD')
    {
        const a = parseFloat(n1.value);
        switch (c2.value) 
        {
            case "JPY":
                const result = (a*144.39).toFixed(2);
                n2.value=  result;
                funky();
                break;

            case "IND":
                 const result1 = (a*82);
                 n2.value=  result1;
                 funky();
                break;
             
            case "USD":
                n2.value = a;
                funky();
            default:
                break;
        }
        
    }
    else if(c1.value == 'IND')
    {
        const a = parseFloat(n1.value);
        switch (c2.value) 
        {
            case "JPY":
                const result = (a*1.76).toFixed(2);
                n2.value=  result;funky();
                break;

            case "USD":
                 const result1 = (a*0.012).toFixed(2);
                 n2.value=  result1;funky();
                break;
             
            case "IND":
                n2.value = a;
                funky();
            default:
                break;
        }

    }
    else 
    {
        const a = parseFloat(n1.value);
        switch (c2.value) 
        {
            case "USD":
                const result = (a*0.0069).toFixed(4);
                n2.value=  result;funky();
                break;

            case "IND":
                 const result1 = (a*0.57).toFixed(2);
                 n2.value=  result1;funky();
                break;
             
            case "JPY":
                n2.value = a;
                funky();
            default:
                break;
        }
    }
   
 
    }
})


function funky()
{
  
    para.innerHTML = `${n1.value}  ${c1.value}  equals to  ${n2.value}  ${c2.value}`;
   
}
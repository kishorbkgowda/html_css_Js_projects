let height = document.querySelector('.hei');
let weight = document.querySelector('.wei');
let btn = document.querySelector('button');
let res = document.querySelector('.result');
let para = document.querySelector('.showdown');

// btns.forEach(btn=>
    // {

        btn.addEventListener('click',(e)=>
        {
            if(e.target.innerHTML == "Compute BMI")
            {
                
                funky();
            }
        
            // else
            //  {
            //     clearall();
            // }
        })

    // })



function funky()
{
    let a = parseFloat(height.value);
    a = (a/100);
    let b=parseFloat(weight.value);
    let result = (b/(a*a));
    res.value=result.toFixed(3);

    if(result < 18.5)
    {
        para.innerHTML=`Underweight Range`;
    }
    else if(result > 18.5 && result < 25)
    {
        para.innerHTML=`Healthy Weight`;
    }
    else if(result>25 && result<30){
        para.innerHTML=`Overweight Range`
    }
    else{
        para.innerHTML=`Obesity Range`
    }

}

function clearall()
{
    height.value="";
    weight.value="";
    res.value="";
    para.innerHTML="";
}
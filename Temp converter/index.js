let celsius=document.querySelector('.cel');
let fahre=document.querySelector('.fah');
let kelvin= document.querySelector('.kel');



const convertcel=()=>
{
    let a = parseFloat(celsius.value);
    fahre.value = ((a*1.8)+32).toFixed(2);
    kelvin.value = (a+273.15).toFixed(2);
}

const convertfahre=()=>
{
    let b = fahre.value;
    celsius.value = ((b-32)*(5/9)).toFixed(2);
    kelvin.value =  (((b-32)*(5/9))+273.15).toFixed(2);
}

const convertkelvin=()=>
{
    let c = kelvin.value;
    celsius.value=(kelvin.value-273.15).toFixed(2);
    fahre.value=((kelvin.value-273.15)*(9/5)+32).toFixed(2);
}


    celsius.addEventListener('input',convertcel);
    fahre.addEventListener('input',convertfahre);
    kelvin.addEventListener('input',convertkelvin);


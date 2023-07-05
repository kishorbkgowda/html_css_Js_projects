let btn=document.querySelectorAll('button');
let kilo=document.getElementById("kg");
let grams=document.getElementById("gr");
let pounds=document.getElementById("po");





let kgconverter = () =>
{
    let a = kilo.value;
    grams.value=a*1000;
    pounds.value=(a*2.205).toFixed(2);   
};
let gramsconverter = () =>
{
    let b = grams.value;
    kilo.value=(b/1000).toFixed(2);
    pounds.value=(b*0.00220462).toFixed(2);
};

let poundsconverter = () =>
{
    let c= pounds.value;
    kilo.value= (c/0.453592).toFixed(2);
    grams.value=(c*453.592).toFixed(2);
};



    kilo.addEventListener("input",kgconverter);
    grams.addEventListener("input",gramsconverter);
    pounds.addEventListener("input",poundsconverter);



// function gramsconverter()
// {
//     const kg = kilo.value;
//     grams.value = (kg * 1000) ;
   

// }

// function poundconverter()
// {
//     const lol = (kilo.value*2.20462).toFixed(2);
//     pounds.value = lol;
// }


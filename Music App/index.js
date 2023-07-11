window.addEventListener('load',()=>
{
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "red","yellow","orange","green","#c060d3","#6860d3"
    ];

// lets get going with the sound

pads.forEach((pad,index) =>{
    // console.log(pad,index);
    pad.addEventListener('click', function()
    {   
        // reseting the current time
        sounds[index].currentTime=0;
        sounds[index].play();
        
        create(index);
    })
})

//Create a function
let create = (index)=>
{
const bubble = document.createElement('div');
visual.appendChild(bubble);
bubble.style.backgroundColor = colors[index];
bubble.style.animation = 'jump 2s ease'
bubble.addEventListener('animationend',()=>
{
    visual.removeChild(bubble);
})

}

})


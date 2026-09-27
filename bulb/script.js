const bulb = document.querySelector('div');
const btn=document.querySelector('button');

btn.addEventListener('click', () => {
    if(bulb.classList.toggle('lit')){
        btn.textContent="OFF";
        document.body.style.backgroundColor="white"
        
    }else{
        btn.textContent="ON";
        document.body.style.backgroundColor="black"
        bulb.style.border="1px solid white"
        btn.style.backgroundColor="black"
        btn.style.border="1px solid white"
        btn.style.color="white"
    }

})
let choices = document.querySelectorAll('.num');
let submit = document.getElementById('btn');
let evPage = document.querySelector('.evaluation');
let retPage = document.querySelector('.thanks');
let reslt = document.getElementById('rate');
for(let i = 0 ; i < choices.length ; i++) {
    choices[i].addEventListener('click' , ()=>{
        for(let i = 0 ; i < choices.length ; i++) {
            choices[i].classList.remove('selected');
        }
        choices[i].classList.add('selected');
        submit.addEventListener('click' , ()=> {
            evPage.style.display = 'none';
            retPage.style.display = 'block';
            reslt.innerHTML = choices[i].innerHTML;
        })
    })
}
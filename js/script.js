setTimeout(function(){
  window.location.href = 'https://itaruweb.com/';
}, 5*1000);

const btn =document.querySelector('.btn-menu')
const nav =document.querySelector('.top-nav')
btn.addEventListener('click',() =>{
    nav.classList.toggle('open-menu')


    if (btn.innerHTML ==="Menu"){
        btn.innerHTML ="Close";
       }else{
        btn.innerHTML ="Menu";
       }
       });

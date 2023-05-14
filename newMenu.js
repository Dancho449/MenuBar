const btn = document.querySelector('.img');
const mainMenu = document.querySelector('.main-menu');
const clearMenu = document.querySelector('.clear-menu');

btn.addEventListener('click', function(){
    mainMenu.style.display = 'block';
});

clearMenu.addEventListener('click', function(){
    mainMenu.style.display = 'none';
});

window.addEventListener('click', function(e){
    if(e.target === mainMenu){
        mainMenu.style.display = 'none'; 
    }
})
let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let main_content = document.querySelector('.main-content');

window.addEventListener('resize', () => {
    if(window.innerWidth < 605) 
        {
            sidebar.classList.remove('active');
            main_content.classList.remove('active');
        }

})

btn.addEventListener('click', function () {
    if (window.innerWidth > 605){
        sidebar.classList.toggle('active');
        main_content.classList.toggle('active');
    }
});

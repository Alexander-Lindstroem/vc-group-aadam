let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let main_content = document.querySelector('.main-content');

btn.addEventListener('click', function () {
    sidebar.classList.toggle('active');
    main_content.classList.toggle('active');
});


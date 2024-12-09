let menuButton =  document.querySelector(".menu-button")
let menu = document.querySelector(".menu");
let list = document.querySelector(".menu ul");
let initialList = list.innerHTML;

menuButton.addEventListener('click', ()=>{
    menu.classList.toggle("active");
})

window.addEventListener('resize', () => {
    if (window.innerWidth < 605) {
        list.innerHTML = `
            <li class="next-button">
                <a href="index.html"><img src="../menu-icons/home-icon.png" alt=""></a>
            </li>
            <li class="next-button">
                <a href="../html/mammals.html"><img src="../menu-icons/mammals-icon.png" alt=""></a>
            </li>
            <li class="next-button">
                <a href="../html/reptiles.html"><img src="../menu-icons/reptiles-icon.png" alt=""></a>
            </li>
            <li class="next-button">
                <a href="../html/birds.html"><img src="../menu-icons/birds-icon.png" alt=""></a>
            </li>
            <li>
                <a href="../html/team.html"><img src="../menu-icons/about-us-icon.png" alt=""></a>
            </li>
        `
    }
    else list.innerHTML = initialList;
    
})

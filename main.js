// Change navbar style on scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0)
});

//show/hidden faq
const faqs =document.querySelectorAll('.faq');
faqs.forEach(faq=>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');

        //change the icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className==='fa-solid fa-plus'){
            icon.className="fa-solid fa-minus"
        } else{
            icon.className="fa-solid fa-plus"
        }
    })
});

// show and hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#closed-menu-btn");

menuBtn.addEventListener('click', ()=>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none"; 
});
// Closed nav menu
const closeNav = ()=>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block"; 
}
closeBtn.addEventListener('click',closeNav);

//Contact form reset

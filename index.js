const btn = document.querySelector(".navigation-toggle");
const nav =document.querySelector(".nav-menu")

btn.addEventListener('click',()=>{
    // console.log("click heu")
    const visibility=nav.getAttribute("data-visible");
    // console.log(visibility)
    if(visibility=="true"){
        nav.setAttribute("data-visible",false);
    }
    else if(visibility=="false"){
        nav.setAttribute("data-visible",true);
    }
})
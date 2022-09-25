
//   console.log(window.innerWidth)


document.querySelector("#onNavbar").onclick = () =>{
    const onNavbar = document.getElementById("wrapper__siderbar")

    onNavbar.classList.toggle("activeSidebar");
    document.getElementById("headerdiff").classList.add("d-none")
}

document.querySelector("#closeSidebar").onclick = () => {
    
    const onNavbar = document.getElementById("wrapper__siderbar")
    onNavbar.classList.toggle("activeSidebar");
    document.getElementById("headerdiff").classList.remove("d-none")
}

// Scroll navbar header
window.addEventListener("scroll", ()=>{
    const elmSticky = document.getElementById("sticky")
    console.log(window.innerWidth)
    if(window.pageYOffset > 0){
        elmSticky.classList.add('sticky');
    }else{
        elmSticky.classList.remove('sticky');
    }

})


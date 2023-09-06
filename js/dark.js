const btnDark = document.querySelector(".dark-btn");
const body = document.querySelector("body");
btnDark.addEventListener("click", ()=>{
    const bodyIsDark = body.classList.contains("dark");
    if(bodyIsDark == true) {
        body.classList.remove("dark");
    }else {
        body.classList.add("dark");
    }
})
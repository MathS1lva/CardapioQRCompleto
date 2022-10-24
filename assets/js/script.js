// Botão Scroll to top
const scrollBtn = document.querySelector(".upArrow")

const refreshButtonVisibility = () => {
    if (document.documentElement.scrollTop <= 50){
        scrollBtn.style.display = "none";
    }
    else {
        scrollBtn.style.display = "block";
    }
}
refreshButtonVisibility();

scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) => {
    refreshButtonVisibility();
});
// Fim Botão


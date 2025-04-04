let topButton = document.querySelector(".top");

window.onscroll = function() {
    if( scrollY >= 500 ) {
        topButton.classList.add("active");
    } else {
        topButton.classList.remove("active");
    }
}

topButton.addEventListener("click", function() {
    scrollTo({
        top: 0,
        behavio: "smooth"
    })
})
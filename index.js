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

// Smooth scroll functionality for buttons
document.addEventListener('DOMContentLoaded', function() {
    // Get all buttons in the buttons container
    const actionButtons = document.querySelectorAll('.buttons button');
    
    // Add click event to each button
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the contact section
            const contactSection = document.getElementById('contact');
            
            if (contactSection) {
                // Scroll to contact section with smooth behavior
                contactSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Existing scroll-to-top functionality
    const topButton = document.querySelector(".top");
    
    window.onscroll = function() {
        if (window.scrollY >= 500) {
            topButton.classList.add("active");
        } else {
            topButton.classList.remove("active");
        }
    }

    topButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// Scroller Progress

let scroller = document.querySelector(".scroller");

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    scroller.style.width = `${scrollTop / height * 100}%`;
})
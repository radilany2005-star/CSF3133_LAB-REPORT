document.addEventListener("DOMContentLoaded", function() {
    
    // Automatic Slideshow
    let slideIndex = 0;
    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        if (slides.length > 0) {
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 4000); // Transitions every 4 seconds
        }
    }
    showSlides();

    // Progress Bar
    const progressBar = document.getElementById("progress-bar");
    const btn = document.getElementById("increase-progress");
    let progress = 0;
    btn.addEventListener("click", () => {
        if (progress < 100) {
            progress += 20;
            progressBar.style.width = progress + "%";
        } else {
            alert("Itinerary Complete! Time to fly!");
        }
    });

    // Collapsible Logic (Handles multiple buttons)
    const collapsibles = document.querySelectorAll(".collapsible");
    collapsibles.forEach(item => {
        item.addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
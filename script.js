let currentSlide = 0;  

function showSlide(index) {  
    let slides = document.getElementById('slides');  
    let totalSlides = slides.children.length;  
    if (index >= totalSlides) {  
        currentSlide = 0;  
    } else if (index < 0) {  
        currentSlide = totalSlides - 1;  
    } else {  
        currentSlide = index;  
    }  
    slides.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';  
}  

function nextSlide() {  
    showSlide(currentSlide + 1);  
}  

setInterval(nextSlide, 3000);
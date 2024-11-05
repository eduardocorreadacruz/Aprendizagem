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

        document.getElementById('linkButton').addEventListener('click', function() {  
            let linkContainer = document.getElementById('linkContainer');  
            if (linkContainer.style.display === 'none') {  
                linkContainer.style.display = 'block';
            } else {  
                linkContainer.style.display = 'none';  
            }  
        });  

function toggleMenu() {  
    let menu = document.getElementById('menuLateral');  
    let content = document.getElementById('mainContent');  
    menu.classList.toggle('active'); 

    if (menu.classList.contains('active')) {  
        content.style.marginLeft = "250px";
    } else {  
        content.style.marginLeft = "0";  
    }  
}  

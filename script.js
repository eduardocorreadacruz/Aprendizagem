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

document.querySelectorAll('.ancor').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function openCity(evt, cityName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.getElementById("defaultOpen").click();


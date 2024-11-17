function gerarNum(max, min) {
    let valorAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    return valorAleatorio
}

function ordenarCrescente(array) {
    let valorAtual;
    for (let j = array.length - 1; j > 0; j--) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                valorAtual = array[i];
                array[i] = array[i + 1];
                array[i + 1] = valorAtual;
            }
        }
    }
    return array;
}

function ordenarDecrescente(array) {
    let valor_atual;
    for (let j = array.length - 1; j > 0; j--) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] < array[i + 1]) {
                valor_atual = array[i];
                array[i] = array[i + 1];
                array[i + 1] = valor_atual;
            }
        }
    }
    return array;
}

function configurarBotaoOrdenarCrescente() {
    let button = document.getElementById("ordenar");
    if (button) {
        button.addEventListener("click", () => {
            let array = [];
            for (let i = 0; i < 6; i++) {
                array[i] = gerarNum(10, 1);
            }

            let visu = document.getElementById("visu");
            visu.textContent = `Antes de ser ordenado: [${array}]`;

            array = ordenarCrescente(array);

            let res = document.getElementById("res");
            res.textContent = `Após ser ordenado: [${array}]`;
        });
    }
}

function configurarBotaoOrdenarDecrescente() {
    let button = document.getElementById("ordenar2");
    if (button) {
        button.addEventListener("click", () => {
            let array = [];
            for (let i = 0; i < 6; i++) {
                array[i] = gerarNum(10, 1);
            }

            let visu2 = document.getElementById("visu2");
            visu2.textContent = `Antes de ser ordenado: [${array}]`;

            array = ordenarDecrescente(array);

            let res2 = document.getElementById("res2");
            res2.textContent = `Após ser ordenado: [${array}]`;
        });
    }
}

configurarBotaoOrdenarCrescente()
configurarBotaoOrdenarDecrescente()

function ordenarMatriz(crescente) {
    let matriz = gerarMatriz();
    let visu = document.getElementById(crescente ? "visuMatrizCrescente" : "visuMatrizDecrescente");
    visu.innerHTML = `Antes de ser ordenado:<br>${formatarMatriz(matriz)}`;

    matriz = ordenar(matriz, crescente);

    let res = document.getElementById(crescente ? "resMatrizCrescente" : "resMatrizDecrescente");
    res.innerHTML = `Após ser ordenado:<br>${formatarMatriz(matriz)}`;
}

function configurarBotoes() {
    document.getElementById("ordenarMatrizCrescente").addEventListener("click", () => ordenarMatriz(true));
    document.getElementById("ordenarMatrizDecrescente").addEventListener("click", () => ordenarMatriz(false));
}

// Chama a função para configurar os botões ao carregar a página
configurarBotoes();


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

function openTabs(evt, tabsName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabsName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.getElementById("defaultOpen").click();




  function gerarNum(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function ordenar(matriz, crescente = true) {
    for (let i = 0; i < matriz.length; i++) {
        matriz[i].sort((a, b) => crescente ? a - b : b - a);
    }
    return matriz;
}

function formatarMatriz(matriz) {
    return matriz.map(linha => linha.join(", ")).join("<br>");
}

function gerarMatriz() {
    let matriz = [];
    for (let i = 0; i < 3; i++) {
        let linha = [];
        for (let j = 0; j < 3; j++) {
            linha[j] = gerarNum(10, 1);
        }
        matriz.push(linha);
    }
    return matriz;
}

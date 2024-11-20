// ----------------------- CARROSSEL -----------------------
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

// ----------------------- GALLERIA DE IMAGENS -----------------------
function galeriaDeImagens() {
   document.getElementById('adicionarBtn').addEventListener('click', function () {
      let imagemInput = document.getElementById('imagemInput');
      let imagemUrl = imagemInput.value;

      let novaImagem = document.createElement('img');
      novaImagem.src = imagemUrl;

      let galeria = document.getElementById('galeria');
      galeria.appendChild(novaImagem);

      imagemInput.value = '';
   });
}

galeriaDeImagens();

// ----------------------- ALGORITMOS DE ORDENAÇÃO -----------------------
function bubbleSort(arr) {
   let steps = [];
   let n = arr.length;
   for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
         if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
         }
      }
      steps.push([...arr]);
   }
   return steps;
}

function insertionSort(arr) {
   let steps = [];
   for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
         arr[j + 1] = arr[j];
         j--;
      }
      arr[j + 1] = key;
      steps.push([...arr]);
   }
   return steps;
}

function selectionSort(arr) {
   let steps = [];
   let n = arr.length;
   for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
         if (arr[j] < arr[minIndex]) {
            minIndex = j;
         }
      }

      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      steps.push([...arr]);
   }
   return steps;
}

function sortNumbers() {
   let input = document.getElementById('numbersInput').value;
   let numbers = input.split(',').map(num => parseFloat(num.trim()));

   let resultsHtml = `<h2>Resultados:</h2>`;

   // Bubble Sort  
   resultsHtml += `<h3>Bubble Sort:</h3>`;
   let bubbleSteps = bubbleSort([...numbers]);
   bubbleSteps.forEach((step, index) => {
      resultsHtml += `<div class="step">Passo ${index + 1}: [${step.join(', ')}]</div>`;
   });

   // Insertion Sort  
   resultsHtml += `<h3>Insertion Sort:</h3>`;
   let insertionSteps = insertionSort([...numbers]);
   insertionSteps.forEach((step, index) => {
      resultsHtml += `<div class="step">Passo ${index + 1}: [${step.join(', ')}]</div>`;
   });

   // Selection Sort  
   resultsHtml += `<h3>Selection Sort:</h3>`;
   let selectionSteps = selectionSort([...numbers]);
   selectionSteps.forEach((step, index) => {
      resultsHtml += `<div class="step">Passo ${index + 1}: [${step.join(', ')}]</div>`;
   });

   document.getElementById('results').innerHTML = resultsHtml;
}

// ----------------------- GERAR MATRIZ IMPAR E PAR -----------------------
let matriz5 = [
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0]
];

function gerarAleatorio(max, min) {
   let valorAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
   return valorAleatorio;
}

function gerarMatriz4() {
   for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
         matriz5[i][j] = gerarAleatorio(1, 50);
      }
   }
   displayMatriz();
}

function displayMatriz() {
   let matrixContainer = document.getElementById('matrixContainer');
   matrixContainer.innerHTML = '';

   let table = document.createElement('table');
   for (let i = 0; i < 7; i++) {
      let row = document.createElement('tr');
      for (let j = 0; j < 7; j++) {
         let cell = document.createElement('td');
         cell.textContent = matriz5[i][j];
         row.appendChild(cell);
      }
      table.appendChild(row);
   }
   matrixContainer.appendChild(table);
   somarPares();
}

function somarPares() {
   let somaPar = 0;
   let somaImpar = 0;
   for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
         if (matriz5[i][j] % 2 === 0) {
            somaPar += matriz5[i][j];
         } else {
            somaImpar += matriz5[i][j];
         }
      }
   }
   let somaParContainer = document.getElementById('somaParContainer');
   somaParContainer.textContent = somaPar;
   let somaImparContainer = document.getElementById('somaImparContainer');
   somaImparContainer.textContent = somaImpar;
}

document.getElementById('gerarMatrizes2Btn').addEventListener('click', gerarMatriz4);

// ----------------------- GERAR MATRIZ E SOMA DIVISIVEIS POR 3 -----------------------
let matriz4 = [
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0]
];

function gerarMatriz3() {
   for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
         matriz4[i][j] = gerarAleatorio(1, 20);
      }
   }
   console.table(matriz4);
   exibirMatriz1();
}

function exibirMatriz1() {
   let matrizDiv = document.getElementById('matriz4');
   let html = '<table>';
   for (let i = 0; i < matriz4.length; i++) {
      html += '<tr>';
      for (let j = 0; j < matriz4[i].length; j++) {
         html += `<td>${matriz4[i][j]}</td>`;
      }
      html += '</tr>';
   }
   html += '</table>';
   matrizDiv.innerHTML = html;
}

function somarTres() {
   let soma = 0;
   for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
         if (matriz4[i][j] % 3 === 0) {
            soma += matriz4[i][j];
         }
      }
   }
   document.getElementById('somaDivisiveisPor3').innerText = `A soma dos elementos divisíveis por 3 é: ${soma}`;
}

// Event listener para gerar a matriz 3 e somar elementos divisíveis por 3
document.getElementById('gerarMatrizes1Btn').addEventListener('click', function () {
   gerarMatriz3();
   somarTres();
});

// ----------------------- GERAR MATRIZES 1 E 2 E SOMAR -----------------------
let matriz1 = [
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0]
];

let matriz2 = [
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0]
];

let matriz3 = [
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0]
];

function gerarMatriz1() {
   for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
         matriz1[i][j] = gerarAleatorio(20, 1);
      }
   }
   return matriz1;
}

function gerarMatriz2() {
   for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
         matriz2[i][j] = gerarAleatorio(20, 1);
      }
   }
   return matriz2;
}

function somarMatrizes() {
   for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
         matriz3[i][j] = matriz1[i][j] + matriz2[i][j];
      }
   }
   return matriz3;
}

function exibirMatriz(matriz, elementoId) {
   let html = '<table>';
   for (let row of matriz) {
      html += '<tr>';
      for (let value of row) {
         html += `<td>${value}</td>`;
      }
      html += '</tr>';
   }
   html += '</table>';
   document.getElementById(elementoId).innerHTML = html;
}

document.getElementById('gerarMatrizesBtn').addEventListener('click', () => {
   gerarMatriz1();
   gerarMatriz2();
   somarMatrizes();

   exibirMatriz(matriz1, 'matriz1');
   exibirMatriz(matriz2, 'matriz2');
   exibirMatriz(matriz3, 'matriz3');
});

// ----------------------- ORDENAÇÃO CRESCENTE E DECRESCENTE -----------------------
function gerarNum(max, min) {
   let valorAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
   return valorAleatorio;
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

configurarBotaoOrdenarCrescente();
configurarBotaoOrdenarDecrescente();

// ----------------------- ORDENAR MATRIZ -----------------------
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

configurarBotoes();

// ----------------------- MENU -----------------------
document.getElementById('linkButton').addEventListener('click', function () {
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

// ----------------------- ABAS -----------------------
function openTabs(evt, tabsName) {
   // Esconder todas as abas
   let tabContent = document.getElementsByClassName("tabcontent");
   for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
   }

   // Remover a classe "active" de todos os botões de abas
   let tabLinks = document.getElementsByClassName("tablink");
   for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
   }

   // Mostrar a aba atual e adicionar a classe "active" ao botão que abriu a aba
   document.getElementById(tabsName).style.display = "block";
   evt.currentTarget.className += " active";
}

// Configurar a aba padrão ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
   document.getElementById("defaultOpen").click();
});

// ----------------------- FORMATAR MATRIZ PARA EXIBIÇÃO -----------------------
function formatarMatriz(matriz) {
   let html = '<table>';
   for (let i = 0; i < matriz.length; i++) {
      html += '<tr>';
      for (let j = 0; j < matriz[i].length; j++) {
         html += `<td>${matriz[i][j]}</td>`;
      }
      html += '</tr>';
   }
   html += '</table>';
   return html;
}

// ----------------------- GERAÇÃO DE MATRIZ ALEATÓRIA -----------------------
function gerarMatriz() {
   let matriz = [];
   for (let i = 0; i < 7; i++) {
      let linha = [];
      for (let j = 0; j < 7; j++) {
         linha.push(gerarAleatorio(1, 50));
      }
      matriz.push(linha);
   }
   return matriz;
}

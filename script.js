// ----------------------- Carrossel -----------------------
// variavel par a mostrar o slide inicial
let currentSlide = 0;

// função para mostrar o slide que corresponde ao indice 
function mostrarSlide(index) {
   // obtem o elemento que contem todos os slides
   let slides = document.getElementById('slides');
   // obtem o numero total de slides presentes
   let totalSlides = slides.children.length;

   // verifica se o indice fornecido e maior ou igual ao numero total de slides, caso seja maior reinicia voltando para o slide 0
   if (index >= totalSlides) {
      currentSlide = 0
   } else {
      // caso contrario, atualiza o slide atual para o indice fornecido 
      currentSlide = index
   }
   // o valor negativo e usado para mover os slides para a esquerda o calculo (-currentSlide * 100) determina a porcentagem de deslocamento que nocaso e 100%
   slides.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
}

// função para avancar para o proximo slide
function proximoSlide() {
   // chama a função mostrarSlide para mostrar o slide seguinte adicionando mais 1 no indice
   mostrarSlide(currentSlide + 1);
}

// define um intervalo que chama a função proximoSlide a cada 3000 milissegundos ou 3 segundos
setInterval(proximoSlide, 3000);

// ----------------------- Galeria de imagens -----------------------
// função principal que inicializa a galeria de imagens
function galeriaDeImagens() {
   // adiciona um evento que ao clicar a função e chamada
   document.getElementById('adicionarBtn').addEventListener('click', function () {
      // pega o valor do campo de entrada de imagem puxando a url que o usuario inseriu
      let imagemInput = document.getElementById('imagemInput');
      let imagemUrl = imagemInput.value; // url da imagem que o usuario inseriu

      // cria um novo eelemento de imagem
      let novaImagem = document.createElement('img');
      novaImagem.src = imagemUrl; // define a origem da nova imagem para o url que o usuario forneceu

      // obtem o elemento que representa a galeria onde as imagens serao exibidas
      let galeria = document.getElementById('galeria');
      // adiciona a nova imagem como um filho do elemento da galeria
      galeria.appendChild(novaImagem);

      // limpa o campo de entrada de imagem apos adicionar a imagem
      imagemInput.value = '';
   });
}

// chama a função galeriaDeImagens para inicializar a funcionalidade
galeriaDeImagens();

// ----------------------- Algoritmos de ordenaçãp -----------------------

// Função que implementa o algoritmo bubble sort
function bubbleSort(arr) {
   let steps = []; // array para armazenar os passos do algoritmo

   // loop externo para controlar o numero de passagens
   for (let i = 0; i < arr.length - 1; i++) {
      // loop interno para comparar elementos
      for (let j = 0; j < arr.length - i - 1; j++) {
         // se o elemento atual e maior que o proximo vai inverter a ordem
         if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // troca os elementos
         }
      }
      // adiciona o estado atual do array ao array de passos
      steps.push([...arr])
   }
   return steps // retorna todos os passos do algoritmo
}

// função que implementa o algoritmo insertion sort
function insertionSort(arr) {
   let steps = []; // array para armazenar os passos do algoritimo

   for (let i = 1; i < arr.length; i++) {
      let key = arr[i]; // o elemento a ser inserido na posicao correta
      let j = i - 1; // indice do elemento anterior

      // move os elementos que sao maiores que a chave +1
      while (j >= 0 && arr[j] > key) {
         arr[j + 1] = arr[j]; // move o elemento para a direita
         j--; // decrementa o indice
      }
      arr[j + 1] = key; // insere a chave na posicao correta
      steps.push([arr]); // adiciona o estado atual do array ao array de passos
   }
   return steps; // retorna todos os passos do algoritimo
}

// funcao que implementa o algoritmo selection sort
function selectionSort(arr) {
   let steps = []; // array para armazenar os passos do algoritimo
   // loop para encontrar o menor elemento no restante do array
   for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i; // inicializa o indice do menor elemento

      // loop para encontrar o menor elemento no array
      for (let j = i + 1; j < arr.length; j++) {
         if (arr[j] < arr[minIndex]) {
            minIndex = j; // atualiza o indice do menor elemento
         }
      }

      // troca o menor elemento encontrado com o elemento na posicao atual
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      steps.push([arr]); // adiciona o estado atual do array ao array de passos
   }
   return steps; // retorna todos os passos do algoritimo
}

// Função principal que ordena os números e exibe os resultados
function sortNumbers() {
   // Obtém o valor do campo de entrada e divide os números em um array
   let input = document.getElementById('numbersInput').value;
   let numbers = input.split(',').map(num => parseFloat(num.trim()));

   let resultsHtml = `<h2>Resultados:</h2>`; // Inicializa a string HTML para os resultados

   // Bubble Sort  
   resultsHtml += `<h3>Bubble Sort:</h3>`; // Adiciona o título para Bubble Sort
   let bubbleSteps = bubbleSort([...numbers]); // Chama o Bubble Sort e obtém os passos
   bubbleSteps.forEach((step, index) => {
      // Adiciona cada passo ao HTML
      resultsHtml += `<div class="step">Passo ${index + 1}: [${step.join(', ')}]</div>`;
   });

   // Insertion Sort  
   resultsHtml += `<h3>Insertion Sort:</h3>`; // Adiciona o título para Insertion Sort
   let insertionSteps = insertionSort([...numbers]); // Chama o Insertion Sort e obtém os passos
   insertionSteps.forEach((step, index) => {
      // Adiciona cada passo ao HTML
      resultsHtml += `<div class="step">Passo ${index + 1}: [${step.join(', ')}]</div>`;
   });

      // Selection Sort  
      resultsHtml += `<h3>Selection Sort:</h3>`; // Adiciona o título para Selection Sort
      let selectionSteps = selectionSort([...numbers]); // Chama o Selection Sort e obtém os passos
      selectionSteps.forEach((step, index) => {
         // Adiciona cada passo ao HTML
         resultsHtml += `<div class="step">Passo ${index + 1}: [${step.join(', ')}]</div>`;
      });
   
      document.getElementById('results').innerHTML = resultsHtml; // Exibe os resultados na página
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
   let MatrizContainer = document.getElementById('MatrizContainer');
   MatrizContainer.innerHTML = '';

   let table = document.createElement('table');
   for (let i = 0; i < 7; i++) {
      let row = document.createElement('tr');
      for (let j = 0; j < 7; j++) {
         let cell = document.createElement('td');
         cell.innerText = matriz5[i][j];
         row.appendChild(cell);
      }
      table.appendChild(row);
   }
   MatrizContainer.appendChild(table);
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
   somaParContainer.innerText = somaPar;
   let somaImparContainer = document.getElementById('somaImparContainer');
   somaImparContainer.innerText = somaImpar;
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
       visu.innerText = `Antes de ser ordenado: [${array}]`;

       array = ordenarCrescente(array);

       let res = document.getElementById("res");
       res.innerText = `Após ser ordenado: [${array}]`;
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
       visu2.innerText = `Antes de ser ordenado: [${array}]`;

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
    content.style.marginLeft = "0px";
 }
}

// ----------------------- ABAS -----------------------
// funcao para abrir as abas
function openTabs(evt, tabsName) {
   // obter todos os elementos com a classe "tabcontent"
   let tabContent = document.getElementsByClassName("tabcontent");
   
   // loop para esconder todas as abas
   for (let i = 0; i < tabContent.length; i++) {
      // muda o estilo de display para "none" para esconder a aba
      tabContent[i].style.display = "none"; // todas as abas ficam invisiveis
   }

   // obter todos os elementos com a classe tablink
   let tabLinks = document.getElementsByClassName("tablink");
   
   // loop para remover a classe "active" de todos os botoes de abas
   for (let i = 0; i < tabLinks.length; i++) {
      // remove a classe "active" do botao atual
      tabLinks[i].className = tabLinks[i].className.replace(" active", ""); // tira a classe active para que nenhum botao fique marcado
   }

   // mostrar a aba que foi selecionada
   document.getElementById(tabsName).style.display = "block"; // muda o estilo da aba selecionada para "block" para que fique visivel

   // adicionar a classe "active" ao botao que foi clicado
   evt.currentTarget.className += " active"; // adiciona a classe active ao botao que chamou a funcao para mostrar que esta ativo
}

// configurar a aba padrao ao carregar a pagina
document.addEventListener("DOMContentLoaded", function () {
   document.getElementById("defaultOpen").click(); // quando a pagina carrega, chama a aba "defaultOpen"
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

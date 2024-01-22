// Escrever conteúdo no HTML
function writeToDocument(conteudo) {
    document.write("<p>" + conteudo + "</p>");
}

// Exemplo criando uma array
const numeros = [1, 2, 3, 4, 5];
writeToDocument("<strong>Array Original:</strong> " + numeros);
// É uma prática comum declarar a array como const

// Exemplo criando uma array com new
const numerosNew = new Array(1, 2, 3, 4, 5);
writeToDocument("<strong>Array Original com New:</strong> " + numerosNew);
// A palavra-chave "new" pode produzir resultados inesperados, executa mais lento, e é menos simples, então é recomendado criar arrays usando o primeiro método

// Exemplo acessando array
writeToDocument("<strong>Acessando Elemento:</strong> Elemento no índice 2: " + numeros[2]);

// Exemplo array length
writeToDocument("<strong>Array Length:</strong> " + numeros.length);

// Exemplo array push - adiciona um elemento ao final da array
numeros.push(6);
writeToDocument("<strong>Array Push:</strong> " + numeros);

// Exemplo array pop - remove último elemento da array
const ElementoEstourado = numeros.pop();
writeToDocument("<strong>Array Pop:</strong> Elemento Estourado: " + ElementoEstourado + ", Array Atualizada: " + numeros);

// Exemplo array unshift - adiciona um elemento ao início da array
numeros.unshift(0);
writeToDocument("<strong>Array Unshift:</strong> " + numeros);

// Exemplo array shift - remove primeiro elemento da array
const ElementoDeslocado = numeros.shift();
writeToDocument("<strong>Array Shift:</strong> Elemento Deslocado: " + ElementoDeslocado + ", Array Atualizada: " + numeros);

// Exemplo array splice - muda o conteúdo da array removendo ou substituindo elementos existentes
numeros.splice(2, 1, 7, 8);
writeToDocument("<strong>Array Splice:</strong> " + numeros);

// Exemplo array slice - retorna uma cópia superficial de uma parte de uma array em uma nova array
const ArrayFatiada = numeros.slice(1, 4);
writeToDocument("<strong>Array Slice:</strong> " + ArrayFatiada);

// Exemplo array concat - merge duas ou mais arrays, retornando uma array nova
const NovaArray = numeros.concat([9, 10]);
writeToDocument("<strong>Concatenação de Array:</strong> " + NovaArray);

// Exemplo array indexOf - retorna o primero índice em qual o elemento dado pode ser achado na array
const IndiceDoSete = numeros.indexOf(7);
writeToDocument("<strong>Array IndexOf:</strong> Índice do 7: " + IndiceDoSete);

// Exemplo array includes - determina se a array inclui um elemento específico, retornando um booleano
const IncluiDez = numeros.includes(10);
writeToDocument("<strong>Array Includes:</strong> A array tem 10? " + IncluiDez);

// Exemplo array map - cria uma array com os resultados de chamar uma função provida em todos os elementos da array
const NumerosAoQuadrado = numeros.map(function (elemento) {
    return elemento * elemento;
});
writeToDocument("<strong>Array Map:</strong> Números Ao Quadrado: " + NumerosAoQuadrado);
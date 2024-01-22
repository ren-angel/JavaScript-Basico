// Escrever conteúdo no HTML
function writeToDocument(conteudo) {
    document.write("<p>" + conteudo + "</p>");
}

const num1 = 10;
const num2 = "10";
const string1 = "Hello";
const string2 = "World";

// Exemplo com == (valor igual)
if (num1 == num2) {
    writeToDocument("num1 é igual a num2 (usando = =)");
} else {
    writeToDocument("num1 não é igual a num2 (usando = =)");
}

// Exemplo com === (valor e tipo iguais)
if (num1 === num2) {
    writeToDocument("num1 é igual a num2 (usando = = =)");
} else {
    writeToDocument("num1 não é igual a num2 (usando = = =)");
}

// Exemplo com != (valor diferente)
if (string1 != string2) {
    writeToDocument("string1 não é igual a string2 (usando !=)");
} else {
    writeToDocument("string1 é igual a string2 (usando !=)");
}

// Exemplo com !== (valor e tipo diferentes)
if (string1 !== string2) {
    writeToDocument("string1 não é igual a string2 (usando != =)");
} else {
    writeToDocument("string1 é igual a string2 (usando != =)");
}

// Exemplo else if com && (E)
if (num1 === 10 && string1 === "Hello") {
    writeToDocument("Ambas as condições são verdadeiras");
} else if (num1 === 10) {
    writeToDocument("Primeira condição é verdadeira");
} else {
    writeToDocument("Nenhuma condição é verdadeira");
}

// Exemplo else if com || (OU)
if (num1 === 5 || string1 === "Hello") {
    writeToDocument("Pelo menos uma condição é verdadeira");
} else if (string1 === "World") {
    writeToDocument("Segunda condição é verdadeira");
} else {
    writeToDocument("Nenhuma condição é verdadeira");
}

// Exemplo com ! (NÂO) - reverte o valor booleano
if (!(num1 === 5)) {
    writeToDocument("num1 não é igual a 5 (usando !)");
} else {
    writeToDocument("num1 é igual a 5 (usando !)");
}

// Exemplo de operador condicional (ternário)
const resultado = (num1 === 10) ? "num1 é 10" : "num1 não é 10";
writeToDocument(resultado);
// Escrever conteúdo no HTML
function writeToDocument(conteudo) {
    document.write("<p>" + conteudo + "</p>");
}

// Exemplo de for...of - itera sobre objetos iteráveis como strings, arrays, sets e maps
const palavra = "iterar"
writeToDocument("<strong>For...Of Loop:</strong>");
for (let letra of palavra) {
    writeToDocument(letra);
}

// Exemplo de while
let contar = 0;
writeToDocument("<strong>While Loop:</strong>");
while (contar < 3) {
    writeToDocument("Contar: " + contar);
    contar++;
}

// Example do...while loop
let doWhileContar = 0;
writeToDocument("<strong>Do...While Loop:</strong>");
do {
    writeToDocument("Contar: " + doWhileContar);
    doWhileContar++;
} while (doWhileContar < 3);
// do while loops sempre executaram pelo menos uma vez, mesmo que a condição seja falsa, porque o bloco de código é executado antes de testar a condição
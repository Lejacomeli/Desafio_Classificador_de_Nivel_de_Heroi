// Dados: Nome do Herói e quantidade de experiência
// Gets: informações dadas pelo usuário
// Split: pegar essas informações e separar por :
// Resultado: vai gerar um armário entre ["Nome do Herói,XP"]

let dados = "Batman:800, Spider:3000, Homem de Ferro:10000".split(", ");
let resultado = [];

dados.forEach(item => {
    let [nome, quantidade] = item.split(":");
    quantidade = parseInt(quantidade);

    if (quantidade <= 1000) {
        resultado.push(`${nome}: Ferro`);
    } else if (quantidade <= 2000) {
        resultado.push(`${nome}: Bronze`);
    } else if (quantidade <= 5000) {
        resultado.push(`${nome}: Prata Ouro`);
    } else if (quantidade <= 8000) {
        resultado.push(`${nome}: Platina Diamante`);
    } else if (quantidade <= 9000) {
        resultado.push(`${nome}: Ascendente`);
    } else if (quantidade <= 10000) {
        resultado.push(`${nome}: Imortal`);
    } else {
        resultado.push(`${nome}: Radiante`);
    }
});

resultado.forEach(item => {
    let [nome, nivel] = item.split(": ");
    console.log(`O Herói de nome ${nome} está no nível de: ${nivel}`);
});
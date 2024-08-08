let comentarios = [
    "Esse produto é excelente!",
    "Não gostei, achei horrível.",
    "Mais ou menos, não sei se recomendaria.",
    "Incrível, atendeu todas as minhas expectativas.",
    "Terrível, nunca mais compro.",
    "Perfeito, é exatamente o que eu queria.",
    "Ruim, veio com defeito.",
    "Adorei, muito bom mesmo!",
    "Não vale o preço, terrível.",
    "Bom, mas esperava mais."
];

// Inicializando os contadores
let positivos = 0;
let negativos = 0;
let neutros = 0;

// Loop para percorrer todos os comentários
for (let i = 0; i < comentarios.length; i++) {
    let comentario = comentarios[i].toLowerCase(); // Normalizar para minúsculas
    // Verifica a classificação do comentário
    if (comentario.includes("excelente") || comentario.includes("incrível") || comentario.includes("perfeito")) {
        positivos++;
    } else if (comentario.includes("ruim") || comentario.includes("terrível") || comentario.includes("horrível")) {
        negativos++;
    } else {
        neutros++;
    }
}

// Exibindo os resultados
console.log(`Comentários positivos: ${positivos}`);
console.log(`Comentários negativos: ${negativos}`);
console.log(`Comentários neutros: ${neutros}`);
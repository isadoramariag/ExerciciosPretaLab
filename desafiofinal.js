let ranking = [];

while (true) {
    let pais = prompt("Digite o nome do país (ou 'sair' para terminar):");

    if (pais.toLowerCase() === "sair") {
        break;
    }

    let ouro = parseInt(prompt(`Quantas medalhas de ouro o ${pais} tem?`));
    let prata = parseInt(prompt(`Quantas medalhas de prata o ${pais} tem?`));
    let bronze = parseInt(prompt(`E quantas medalhas de bronze o ${pais} tem?`));

    if (!isNaN(ouro) && !isNaN(prata) && !isNaN(bronze)) {
        let totalMedalhas = ouro + prata + bronze;
        ranking.push({ pais, totalMedalhas });
    } else {
        alert("Por favor, insira a quantidade de medalhas apenas em números.");
    }
}

ranking.sort((a, b) => b.totalMedalhas - a.totalMedalhas);

if (ranking.length > 0) {
    let resultado = "# Ranking de medalhas:\n";
    
    for (let i = 0; i < ranking.length; i++) {
        if (i === 0) {
            resultado += `1º lugar: ${ranking[i].pais} com ${ranking[i].totalMedalhas} medalhas\n`;
        } else if (i === 1) {
            resultado += `2º lugar: ${ranking[i].pais} com ${ranking[i].totalMedalhas} medalhas\n`;
        } else if (i === 2) {
            resultado += `3º lugar: ${ranking[i].pais} com ${ranking[i].totalMedalhas} medalhas\n`;
            resultado += "________________________\n";  // Adiciona a linha tracejada após o 3º lugar
        } else {
            resultado += `#${i + 1}: ${ranking[i].pais} com ${ranking[i].totalMedalhas} medalhas\n`;
        }
    }
    alert(resultado);
} else {
    alert("Nenhum dado de medalhas foi inserido.");
}

// Velocidade limite: 70;
// 5 -> 1 ponto (até 74 ok);
// Math.floor(1.3);
// 12 ponts -> suspenso.
//75-1 / 80-2/85-3/90-4/95-5/100-6 etc...
checkSpeed(120);

function checkSpeed(speed) {
    const veloMax = 74;
    const veloAcima = 5;
    const veloBoa = 70;
    const pontMax = 12;
    verificador = speed - veloBoa;
    pontos = Math.floor((verificador/veloAcima));
    if (speed <= veloMax)
        console.log('Velocidade OK');
    if (pontos >= pontMax)
        console.log('Carteira Suspensa');
            else console.log('Pontuação: ', pontos);

}

    function carros () {
        carro1 = 'fusca';
        km1 = 100;
        p1 = 12,70;
        carro2 = "gol";
        km2 = 240;
        p2 = 180;
        console.log('o total do fusca é:', km1*p1);
        console.log('o total do gol é:', km2*p2);
    }

    function triangulo () {
        B=5;
        A=12;
        T=B*A/2
        console.log("o valor da área é:", T);
    }


    function array () {
        let frutas = ['maça', 'banana', 'laranja'];
console.log( frutas.length);
console.log(frutas);
frutas.push('manga');
console.log(frutas);
console.log(frutas.length);
frutas.pop();
frutas.pop();
console.log(frutas);
frutas.pop();
frutas.pop();
console.log(frutas);
frutas.push('uva');
frutas.push('amora');
frutas.push('michirica', 'abacate', 'abacaxi');
console.log(frutas);
console.log('a fruta na posição 1 é:', frutas[1]);
console.log(frutas.length);
console.log('o total de registros é de ', frutas.length+1, 'frutas.');
frutas.unshift('seereja');
console.log(frutas);
}

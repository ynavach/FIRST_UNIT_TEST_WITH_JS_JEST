
//funcion generica para truncar decimales
truncateDecimals = function (number, digits) {
    var multiplier = Math.pow(10, digits),
        adjustedNum = number * multiplier,
        truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

    return truncatedNum / multiplier;
};

// declaramos una funcion con el mismo nombre "fromYenToPound"
const fromYenTopound = function(valueInYen){
    // convertimos el valor a euros
    let valueInEuro = valueInYen / 127.9;
    let valueInPound = valueInEuro * 0.8;
    let valueTruncated = truncateDecimals(valueInPound,2);
    // retornamos el valor
    return valueTruncated
}

// declaramos una funcion con el mismo nombre "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInEuro = valueInDollar / 1.2;
    let valueInYen = valueInEuro * 127.9;
    let valueTruncated = truncateDecimals(valueInYen,1);

    // retornamos el valor
    return valueTruncated;
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    let valueTruncated = truncateDecimals(valueInDollar,1);

    // retornamos el valor
    return valueTruncated;
}

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenTopound};
//  1- Prompt km da percorrere:
const km = prompt('Inserisci i chilometri che devi percorrere');
console.log(km);

// 2 -Prompt età
const eta = prompt('Inserisci la tua età');
console.log(eta);

// 3 - Dati comuni
const tariffa = 0.21;
console.log(tariffa);

// 4 - Calcolo prezzo pieno del biglietto
let full_price = km * tariffa;
console.log(full_price);

// Sconto prezzo del biglietto in base all'età

// 5 - Sconto del 20% per i minorenni e del 40% per gli over 65
if (eta < 18){
    full_price = full_price * 0.8;
    console.log(full_price);
}

else if (eta > 65){
    full_price = full_price * 0.6;
    console.log(full_price);
}

else{
    full_price = full_price
}

// 6 - Creazione output utilizzando toFixed
let price = full_price.toFixed(2);
console.log(price)

// Bonus:
// Mostrare output in HTML;
document.getElementById("price_display").innerHTML = `In base alla tua età (${eta}anni) e ai chilometri che devi percorrere (${km}km), il tuo biglietto avrà un costo di €${price}.`
console.log("Operativo");

/*
    Il programma dovrà:
    - chiedere all'utente il numero di chilometri da percorrere;
    - età del passeggero;
    - calcolare il prezzo totale del viaggio:
        • definito in base ai km (0.21 € al km)
        • sconto del 20% per i minorenni
        • sconto del 40% per gli over 65
        • limite decimali: 2 [xx.yy(OK) ; xx.yyzz...(KO)]
    
    BONUS:
    - implementare controlli sull'input dell'utente
*/

// LOGICA
const userKm = parseInt(prompt("Quanti Km si devono percorrere? Inserire un numero intero:"));
const userAge = parseInt(prompt("Quanti anni ha il passeggero? Inserire un numero intero:"));
const pricePerKm = 0.21;

// const underage = 0 < userAge < 18;
// const adult = userAge >= 18;
// console.log(parseInt(underage));

let kmRate = userKm * 0.21;
console.log(kmRate);

if (userAge < 18){
    kmRate = (kmRate - (20 / 100 * kmRate)).toFixed(2);
    document.getElementById("user-distance").innerHTML = userKm;
    document.getElementById("user-age").innerHTML = userAge;
    document.getElementById("user-price").innerHTML = kmRate;
} 
else if (userAge >= 65){
    kmRate = (kmRate - (40 / 100 * kmRate)).toFixed(2);
    document.getElementById("user-distance").innerHTML = userKm;
    document.getElementById("user-age").innerHTML = userAge;
    document.getElementById("user-price").innerHTML = kmRate;
}
else{
    kmRate.toFixed(2);
    document.getElementById("user-distance").innerHTML = userKm;
    document.getElementById("user-age").innerHTML = userAge;
    document.getElementById("user-price").innerHTML = kmRate;
}
let nombres = [];
let nombresPairs = [];
let nombresImpairs = [];
let erreurs = 0;

while (nombres.length < 5) {
    let saisie = prompt("Veuillez saisir un nombre entier entre 9 et 99 : ");
    if (saisie >= 9 && saisie <= 99 && Number.isInteger(+saisie)) {
        nombres.push(+saisie);
        if(+saisie % 2 === 0) {
            nombresPairs.push(+saisie);

        } else {
            nombresImpairs.push(+saisie);

        }
    } else {
        erreurs++;
    }
}

document.getElementById("entierPair").innerHTML = nombresPairs.length;
document.getElementById("entierImpair").innerHTML = nombresImpairs.length;
document.getElementById("iterationFausse").innerHTML = erreurs;

let tbodyPairs = document.getElementById("pair");
tbodyPairs.innerHTML = "<tr><td>" + nombresPairs.join("<br>") + "</td></tr>";

let tbodyImpairs = document.getElementById("impair");
tbodyImpairs.innerHTML = "<tr><td>" + nombresImpairs.join("<br>") + "</td></tr>";
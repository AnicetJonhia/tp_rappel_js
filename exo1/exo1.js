var fruits = ['mangue', 'raisin', 'figue', 'kiwi'];
var listeFruits = document.getElementById("listeFruits");
listeFruits.innerHTML = "Listes des fruits : " + fruits;

var demande = document.getElementById("demande");
var input = document.getElementById("input");
var nouvelleListeFruits = document.getElementById("nouvelleListeFruits");

demande.addEventListener('submit', function(e) {
    e.preventDefault();
    var inputValue = input.value;

    for (let i = 0 ; i < fruits.length ; i++) {
        if (inputValue == fruits[i]) {
            fruits.splice(i,1);
            alert("Ok!");
            break;
        }
        if( inputValue != fruits[i]) {
            alert("indisponible!");
            break;
        }
    }

    nouvelleListeFruits.innerHTML = "Nouvelle liste des fruits : " +fruits ;

});
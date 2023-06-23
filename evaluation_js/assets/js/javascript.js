/* Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux
var age;
var personnemoins20 = 0;
var personneEntre20et40 = 0;
var personneplus40 = 0;

do {
  age = parseInt(prompt("Veuillez insérer l'âge de la personne (ou entrez 100 pour arrêter)"));

  if (age < 20) {
    personnemoins20++;
  } else if (age >= 20 & age <= 40) {
    personneEntre20et40++;
  } else if (age > 40) {
    personneplus40++;
  }

} while (age !== 100);

console.log("Nombre de personnes d'âge strictement inférieur à 20 ans : " + personnemoins20);
console.log("Nombre de personnes d'âge compris entre 20 ans et 40 ans : " + personneEntre20et40);
console.log("Nombre de personnes d'âge strictement supérieur à 40 ans : " + personneplus40); */


/* // Exercice 2 : Table de multiplication

function afficherTable() {
    var insererNombre = document.getElementById("insererNombre");
    var nombre = parseInt(insererNombre.value);

    if (isNaN(nombre)) {
        alert("Veuillez entrer un nombre valide.");
        return;
    }

    var tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";

    var tableHTML = "<h3>Table de multiplication de " + nombre + "</h3>";
    tableHTML += "<ul>";

    for (var i = 1; i <= 15; i++) {
        var resultat = i * nombre;
        tableHTML += "<li>" + i + " x " + nombre + " = " + resultat + "</li>";
    }

    tableHTML += "</ul>";
    tableContainer.innerHTML = tableHTML;
} */

// Exercice 3 : recherche d'un prénom
/* 
var tableau = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

function eliminationPrenom() {
    var prenom = prompt("Veuillez insérer un prenom que vous voulez supprimer ");
    var index = tableau.indexOf(prenom); 

    if (index !== -1) {
        tableau.splice(index, 1);
        tableau.push("");
        alert("Le prénom a été supprimé");
    }
    
        else {
            alert("Le prénom insérer n'a pas pu être supprimé");

        }
        console.log(tableau);
    }
    eliminationPrenom()
 */


/* // Exercice 4 : total d'une commande

var PU = parseFloat(prompt("Veuillez insérer le prix unitaire du produit :"));
var QTECOM = parseInt(prompt("Veuillez insérer la quantité : "));
var TOT = PU * QTECOM;
var REM = 0;
var PORT = 0;

if (TOT >= 100 & TOT <= 200) {
  REM = TOT * 0.05;
}
else if (TOT > 200) {
  REM = TOT * 0.1;
}

if (TOT > 500) {
  PORT = 0;
}
else {
  PORT = TOT * 0.02;
  if (PORT < 6) {
    PORT = 6;
  }
}

var final = TOT - REM + PORT;

console.log("Le prix à payer est de : " + final.toFixed(2) + "€");
console.log("Votre remise est de :" + REM.toFixed(2) + "€");
console.log("Les frais de port s'élève a :" + PORT.toFixed(2) + "€");
// Je n'ai pas réussi à faire le test numéro 2 qui consiste à rajouter 2% de port après la remise effectué */
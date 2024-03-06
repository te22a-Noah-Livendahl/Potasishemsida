// Funktion för att lägga till produkt i varukorgen
function lägg_till_varukorg(namn, pris) {
    var varukorg = document.getElementById("varukorg-artiklar");
    var totaltElement = document.getElementById("totalt");
    
    var li = document.createElement("li");
    li.textContent = namn + " - " + pris + " kr";
    varukorg.appendChild(li);
    
    // Uppdatera totalpriset
    var totalt = parseInt(totaltElement.textContent);
    totalt += pris;
    totaltElement.textContent = totalt;}
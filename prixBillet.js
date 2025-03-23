function prixBillet(age) {
    if (age <= 12) {
        return "Le prix du billet est de 10 €.";
    } else if (age >= 13 && age <= 17) {
        return "Le prix du billet est de 15 €.";
    } else {
        return "Le prix du billet est de 20 €.";
    }
}

// Test
let age = parseInt(prompt("Entrez votre âge :"));
console.log(prixBillet(age));
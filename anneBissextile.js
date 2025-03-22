function estAnneeBissextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        return `${annee} est une année bissextile.`;
    } else {
        return `${annee} n'est pas une année bissextile.`;
    }
}

// Test
let annee = parseInt(prompt("Entrez une année :"));
console.log(estAnneeBissextile(annee));
function estPalindrome(chaine) {
    // Convertir en minuscules et supprimer les espaces et la ponctuation
    chaine = chaine.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    // Condition d'arrêt : si la chaîne a 1 ou 0 caractère, c'est un palindrome
    if (chaine.length <= 1) {
        return true;
    }
    
    // Vérifier si le premier et le dernier caractère sont identiques
    if (chaine[0] !== chaine[chaine.length - 1]) {
        return false;
    }
    
    // Appel récursif sur la sous-chaîne sans le premier et le dernier caractère
    return estPalindrome(chaine.slice(1, -1));
}

// Test
let mot = prompt("Entrez un mot ou une phrase :");
if (estPalindrome(mot)) {
    console.log("C'est un palindrome.");
} else {
    console.log("Ce n'est pas un palindrome.");
}
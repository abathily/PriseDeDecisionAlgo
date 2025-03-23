function fibonacci(n) {
    if (n <= 0) {
        return "Veuillez entrer un nombre positif.";
    } else if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Test
let n = parseInt(prompt("Entrez un nombre pour Fibonacci :"));
console.log(`Le ${n}e nombre de Fibonacci est ${fibonacci(n)}`);
function primeFunction(n, m) {
    for (let i = n; i <= m; i++) {
        if (i < 2) continue; // Skip numbers less than 2

        let isPrime = true;

        // Check if the number is divisible by any number before it
        for (let p = 2; p < i; p++) {
            if (i % p === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(i); // Print the prime number
        }
    }
}

function main() {
    const n = parseInt(prompt("Enter the first number in the range: "));
    const m = parseInt(prompt("Enter the last number in the range: "));

    console.log(`The prime numbers between ${n} and ${m} are:`);
    primeFunction(n, m);
}

// Run the main function
main();

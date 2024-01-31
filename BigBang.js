const fs = require('fs');

const result = [];

for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        result.push("BIGBANG");
    } else if (num % 3 === 0) {
        result.push("BIG");
    } else if (num % 5 === 0) {
        result.push("BANG");
    } else {
        result.push(num.toString());
    }
}

const outputJson = JSON.stringify(result, null, 2);

fs.writeFileSync('output.json', outputJson);

console.log(result);

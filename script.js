function makeChange(amount) {
    return {
        q: Math.floor(amount / 25),
        d: Math.floor((amount % 25) / 10),
        n: Math.floor((amount % 25 % 10) / 5),
        p: amount % 5
    };
}

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

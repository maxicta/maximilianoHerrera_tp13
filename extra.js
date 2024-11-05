function showNumbers(num) {
    for (let i = num; i <= num+10; i++) {
        console.log(i);
        
    }
}

function printEveryThree(num) {
    for (let i = 0; i <= 57; i+=3) {
        console.log(i);
        
        
    }
}

function totalSummation(num) {
    let suma = 0
    for (let i = 0; i <= 100; i++) {
        suma += i
        console.log(suma);
        
    }
}

function showToUpperCase(text) {
    for (let i = 0; i < text.length; i++) {
        const element = text[i].toUpperCase();
        console.log(element);
        
    }
}

//showToUpperCase("practicando el uso de los ciclos o bucles")

function returnPairs(num) {
    let numPares = []
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0) {
            numPares.push(num[i]);
        }
    }
    return numPares
}

let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

console.log(returnPairs(num));

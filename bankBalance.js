let operacionesBancarias = [1000, 3000,-2000,1000];

function calculateBalance(cuenta) {
    let saldo = 0
    let ingreso = 0
    let retiro = 0
    for (let i = 0; i < cuenta.length; i++) {
        const element = cuenta[i];
        saldo += element
        if (element > 0) {
            ingreso += element
        }
        else if (element < 0) {
            retiro -= element
        }
    }
    let balance = [ingreso, retiro, saldo]
    return balance
}


function bankBalance(nombre, apellido, balance) {
    let balanceFinal = `Estimada ${nombre} ${apellido}: El monto total de los depositos es de ${balance[0]}. El monto total de los retiros es de ${balance[1]}. Por lo tanto, su saldo actual en la cuenta es de ${balance[2]}`
    return balanceFinal
}
let cuentaBank = bankBalance("Gloria", "Medina", calculateBalance(operacionesBancarias))
console.log(cuentaBank);

const userNameElement = document.querySelector('#userName');
// punto para llamar clase y gatito para id
const userSaldoElement = document.querySelector('#modal-saldo');
// 3 tipos de variables en js  let, const, var
const formIngresarSaldo = document.querySelector('#ingresarSaldoform');

const formRetirarSaldo = document.querySelector('#retirarSaldoform');



const userName = localStorage.getItem('nombre');
if (userName) {
    userNameElement.textContent = `${userName}`;
}

const userSaldo = localStorage.getItem('saldo');
if (userSaldo) {
    userSaldoElement.textContent = "$" + `${userSaldo}`;
}

formIngresarSaldo.addEventListener('submit', event => {
    event.preventDefault(); //ayuda a que no se envié el formulario en auto
    const userSaldo = localStorage.getItem('saldo');
    console.log(event.target.saldoIngresado.value);
    const saldoIngresado = event.target.saldoIngresado.value;
    console.log(event.target.saldoIngresado.value);
    const saldoPorValidar = parseInt(userSaldo) + parseInt(saldoIngresado);
    
    console.log(saldoPorValidar);

    if (saldoPorValidar > 990) {
        showAlert({ message: 'Operación Invalida' });
    }

    else {
        console.log("Saldo Actual es:" + saldoPorValidar);
        localStorage.setItem("saldo", saldoPorValidar);
        console.log(userSaldo);
    }
});

formRetirarSaldo.addEventListener('submit', e => {
    e.preventDefault(); //evita que se envie el formulario automaticamente
    const userSaldo = localStorage.getItem('saldo');
    console.log(e.target.saldoEgreso.value);
    const saldoEgresado = e.target.saldoEgreso.value;
    const saldoActual = parseInt(userSaldo) + parseInt(saldoEgresado);

    console.log(saldoActual);
    localStorage.setItem("saldo", saldoActual);

})

function showAlert({ message }) {
    alert(message);
}


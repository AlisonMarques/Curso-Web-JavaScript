//callback dentro de callback

// setTimeout(function () {
//     console.log("Executando callback 1...");

//     setTimeout(function () {
//         console.log("Executando callback 2...");

//         setTimeout(function () {
//             console.log("Executando callback 3...");
//         }, 2000);
//     }, 2000);
// }, 2000);

function esperarPor(tempo) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('Executando Promise...');
            resolve('testeeeeeeeeeeeeee');
        }, tempo);
    });
}

esperarPor(2000)
    .then(() => esperarPor())
    .then(esperarPor);

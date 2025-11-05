const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prompt(pertanyaan, callback) {
    rl.question(pertanyaan, (jawaban) => {
        callback(jawaban);
    });
}

function kalkulator() {
    let angka1, angka2, operator;

    prompt("Masukkan angka pertama: ", function(nomor1) {
        angka1 = parseFloat(nomor1);
        prompt("+  -  *  %   ", function(ingin) {
            operator = ingin;
            prompt("Masukkan angka kedua: ", function(nomor2) {
                angka2 = parseFloat(nomor2);
                let hasil = 0;

                if (operator === "+") {
                    hasil = angka1 + angka2;
                } else if (operator === "-") {
                    hasil = angka1 - angka2;
                } else if (operator === "*") {
                    hasil = angka1 * angka2;
                } else if (operator === "%") {
                    hasil = angka1 % angka2;
                } else {
                    console.log("Operator tidak valid!");
                    return rl.close();
                }

                console.log("Hasil: " + hasil);
                rl.close();
            });
        });
    });
}


kalkulator();


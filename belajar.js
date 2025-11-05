const { resolve } = require("path");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prompt(pertanyaan, callback){
    rl.question(pertanyaan, (jawaban) => {
        callback(jawaban);
    });
}

function pilihan(){
   prompt("Silahkan masukkan Pilihan Anda:\n 1.lihat data\n 2.tambah data\n",function(milih){
    if(milih === "1"){
        coba();
    }else{
        console.log("blok");
        rl.close();
    }
   });

}

function coba(){
    console.log("selamat datang");
    prompt("siapa nama kamu? ", function(nama) {
        console.log(`halo ${nama}`);

        prompt("apakah ingin melanjutkan?\n 1.iya\n 2.tidak\n", function(pilih){
            if(pilih === "1"){
                pilihan();
            }else{
                console.log("blok");
                rl.close();
            }
        });

    });

    
}




pilihan();
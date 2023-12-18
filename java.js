document.getElementById('plus').addEventListener('click', function(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var hasil = Number(a) + Number(b);

    alert("Hasil Penjumlahan = " + hasil);
})

document.getElementById('minus').addEventListener('click', function(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var hasil = Number(a) - Number(b);

    alert("Hasil Pengurangan = " + hasil);
})

document.getElementById('kali').addEventListener('click', function(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var hasil = Number(a) * Number(b);

    alert("Hasil Pengalian = " + hasil);
})

document.getElementById('bagi').addEventListener('click', function(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var hasil = Number(a) / Number(b);

    alert("Hasil Pembagian = " + hasil);
})

function fun() {
    document.getElementById("form").reset();
}
let texto = 'Amor';
let array = texto.split('');
texto = ""

array.forEach((element, i) => {
    if (array[i] === array[i].toUpperCase()) {
        texto = texto + element.toLowerCase();
    } else {
        texto = texto + element.toUpperCase();
    }
});

console.log(texto);


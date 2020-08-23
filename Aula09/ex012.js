var agora = new Date();
var horas = agora.getHours();
var minutos = agora.getMinutes();
var segundos = agora.getSeconds();

console.log(`Agora são exatamente ${horas}:${minutos}:${segundos} horas.`);

if (horas < 4) {
    console.log('Boa Madrugada!');
} else if (horas < 12) {
    console.log('Bom Dia!');
} else if (horas < 18) {
    console.log('Boa Tarde!');
} else {
    console.log('Boa Noite!');
}
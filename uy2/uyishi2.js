var son = +prompt("Son kiriting darajasini aniqlab beramz");
while (isNaN(son) || son == "" || son == 0) {
    son = +prompt("faqat son kiritng");
}
var daraja = +prompt("Soni darajasini kiritng");
var natija = Math.pow(son, daraja);
alert(son + " ning " + daraja + " darajasi " + natija + " ga teng.");

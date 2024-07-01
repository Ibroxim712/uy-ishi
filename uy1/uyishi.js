var a = +prompt("Son kiriting");
while (isNaN(a) || a == "" || a == 0) {
  a = +prompt("faqat son kiritng");
}
if (a % 2 == 0) {
  alert("Siz kiritgan son juft songa teng");
} else if (a % 2 == 1) {
  alert("siz kiritgan son toq songa teng");
}

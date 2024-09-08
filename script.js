var word= "SevenTeen";
var touppercase= word.toUpperCase()
document.getElementById("a").innerHTML= touppercase;

var tolowercase= word.toLowerCase();
document.getElementById("b").innerHTML= tolowercase;

var newWord= word.startsWith("s")
document.getElementById("c").innerHTML= newWord;

var random= Math.random()*100;
document.getElementById("d").innerHTML=random;

var wholeno= Math.floor(random);
document.getElementById("e").innerHTML=wholeno;

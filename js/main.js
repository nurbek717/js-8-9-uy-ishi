 // matindagi eng kup harfli suzni topib beruvchi funksiya:
 
var elText = document.querySelector("#salom");
var elText1 = document.querySelector("#salom1");


var matin = "Bundansalomsalomsalomsalom avvalroq Jahongir Ortiqxo‘jayev Toshkent shahri hokimi lavozimidan ketishi va uning o‘rnini Toshkent viloyati hokimi Davron Hidoyatov egallashi haqida xabarlar tarqalgan, Kun.uz manbasi bu ma'lumotni rad etib, Hidoyatov Toshkent viloyatining Chirchiq shahri hokimi bo‘lishini ma'lum qilgandi."

function  usText(textlar){
  var resalt =  ""
  var upText = textlar.split(" ")
  for (var hello  of upText) {
   if (resalt.length < hello.length) {
     resalt = hello
   }
  }
  return resalt
}

console.log(usText(matin));
elText1.textContent = usText(matin)
// _________________________________________________________________________________________________________________________
  

// bu hohhlagan sonningzni qushib beradi
var num = [10, 10, 10, 10,24,10]

function upNamber(nambers) {
  var resalt = 0

  for (var salom of nambers) {
     resalt = resalt + salom
  }
  return resalt
}
console.log(upNamber(num));
elText.textContent = upNamber(num)
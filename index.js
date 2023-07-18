//Lodash library import string
const lodash = require('lodash');

//Test Arrays
var myArray = [1,2,3,4,5,6,7,8.4];

//Test Object
var myObject = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];

//Lodash Array functions
var chunkArray = lodash.chunk(myArray,3); // İkinci parametreye göre split işlemi yapar ve yeni dizide oluşturur.
var compactArray = lodash.compact(myArray); // Tüm falsy değerleri siler ve yeni bir dizi oluşturur.
var concatArray = lodash.concat(myArray, [9,10]); // İlk diziyi bozmadan yeni dizi oluşturur ve parametre elemanlarını sonuna ekler.
var differenceArray = lodash.difference(myArray, [1,2,3,false]); //Default dizide olup, parametrede olmayan değerleri yeni bir diziye atar.
var differenceByArray = lodash.differenceBy(myArray, [1,2,3,false], Math.ceil); //Son parametreye göre iterasyon uygulayarak farklılıkları karşılaştırır.
var joinArray = lodash.join(myArray, '!'); //Dizideki tüm elemanları ikinci parametredeki seperatör ile birleştirir.
//var pullArray = lodash.pull(myArray, 1, 2); //Diziden belrtilen elemanları çıkartır, işlemleri ilk dizi üzerinden yapar.
var reverseArray = lodash.reverse(myArray); //Diziyi tersten okur
var tailArray = lodash.tail(myArray); //Dizinin ilk elemanı hariç tümünü alır

//Lodash collection functions
var countBy = lodash.countBy(myArray, Math.floor); //Vir iterasyon kuralına göre hangi değerden kaç adet var sayar ve anahtar-sonuç olarak sunar.
var every = lodash.every(myArray, Boolean); //İkinci parametre olan iterasyon kuralına eğer tüm içerik uyuyorsa true, uymuyorsa false döndürür.
var everyObject = lodash.every(myObject, {'user': 'barney', 'active': false}); //Obje içerisindeki nesneler için tüm iterasyon özellikleri doğru sağlanıyorsa true, sağlanmıyorsaa false döndürür.
var foreachArray = lodash.forEach(myArray, function(value) {
  //value dizinin elemanlarıdır, istenen işlem yapılabilir.
}); //Dizinin elemanlarını gezer
var foreachRightArray = lodash.forEachRight(myArray, function(value){
  //value dizinin elemanlarıdır, istenen işlem yapılabilir.
}); //Dizi elemanlarını tersten gezer
var groupByArray = lodash.groupBy(myArray, 'length'); //Uzunluğa göre gruplama yapar, istenen iterasyon verilebilir.
var includeArray = lodash.includes(myArray, 7); //Eğer iterasyondaki değer varsa true, yoksa false döner..

//Lodash Screening
console.log("The default array:", myArray);
console.log("The function shows:" , includeArray);
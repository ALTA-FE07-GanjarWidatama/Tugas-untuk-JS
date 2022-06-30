// Buatlah sebuah program menggabungkan 2 array input, dalam problem ini jika terdapat nama
// yang sama di dalam 2 array tersebut,maka kamu hanya boleh memasukan satu nilai saja.

// Sample Test Cases
// Input: ['apel', 'nanas', 'anggur'], ['apel', 'pisang']
// Output: ['apel', 'nanas', 'anggur', 'pisang']

// Input: ['apel', 'nanas'], ['anggur', 'apel']
// Output: ['apel', 'nanas', 'anggur', 'apel']

var array = ["apel", "anggur", "lemon", "leci", "nanas"];

function joinArrayRemoveDuplicate(arrayA) {
  var joinArrayRemoveDuplicate = [];

  for (var i = 0; i < arrayA.length; i++) {
    if (joinArrayRemoveDuplicate.indexOf(arrayA[i]) === -1) {
      joinArrayRemoveDuplicate.push(arrayA[i]);
    }
  }
  return joinArrayRemoveDuplicate;
}
var joinArrayRemove = joinArrayRemoveDuplicate(array);
console.log(joinArrayRemove);

var array2 = ["samsung", "apple", "apple", "sony", "xiaomi"];

function joinArrayRemoveDuplicate(arrayA) {
  var joinArrayRemoveDuplicate = [];

  for (var i = 0; i < arrayA.length; i++) {
    if (joinArrayRemoveDuplicate.indexOf(arrayA[i]) === -1) {
      joinArrayRemoveDuplicate.push(arrayA[i]);
    }
  }
  return joinArrayRemoveDuplicate;
}
var joinArrayRemove = joinArrayRemoveDuplicate(array2);
console.log(joinArrayRemove);

var array3 = (["football", "basketball"], ["basketball", "football"]);

function joinArrayRemoveDuplicate(arrayA) {
  var joinArrayRemoveDuplicate = [];

  for (var i = 0; i < arrayA.length; i++) {
    if (joinArrayRemoveDuplicate.indexOf(arrayA[i]) === -1) {
      joinArrayRemoveDuplicate.push(arrayA[i]);
    }
  }
  return joinArrayRemoveDuplicate;
}
var joinArrayRemove = joinArrayRemoveDuplicate(array3);
console.log(joinArrayRemove);

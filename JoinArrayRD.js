// Buatlah sebuah program menggabungkan 2 array input, dalam problem ini jika terdapat nama
// yang sama di dalam 2 array tersebut,maka kamu hanya boleh memasukan satu nilai saja.

// Sample Test Cases
// Input: ['apel', 'nanas', 'anggur'], ['apel', 'pisang']
// Output: ['apel', 'nanas', 'anggur', 'pisang']

// Input: ['apel', 'nanas'], ['anggur', 'apel']
// Output: ['apel', 'nanas', 'anggur', 'apel']


function joinArrayRemoveDuplicate(arrayA, arrayB) 
    // your code here
  // Test cases
 let fruit = (["apel", "anggur"], ["lemon", "leci", "nanas"])
    let joinArrayRemoveDuplicate1 = fruit.filter((Element, index) => {
        return fruit.indexOf(Element)  === index;
    });
 console.log(joinArrayRemoveDuplicate1(["apel", "anggur"], ["lemon", "leci", "nanas"]))
  // ["apel", "anggur", "lemon", "leci", "nanas"]
   
  console.log(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]))
  // ["samsung", "apple", "sony", "xiaomi"]
   
  console.log(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]))
  // [“football”, “basketball”]
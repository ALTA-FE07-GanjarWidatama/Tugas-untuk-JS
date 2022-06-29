// PART 3 - Branching, Looping, Array
// Problem 1 - Play With Asterisk
// Buatlah sebuah program untuk mencetak segitiga asterik seperti dibawah ini!
// Sample Test Cases
// Input: 5
// Output:
//     *
//    * *
//   * * *
//  * * * *
// * * * * *


function playWithAsterik(n){
    let pola= '';
  
    for(let x= 1; x<=n; x++){
        for(let y=n - 1; y >=x; y--){
            pola += ' ';
        }
  
        for(let z=1; z<=x; z++){
            pola += '* ';
        }
        pola += '\n';
    }
    return pola;
  }
  console.log(playWithAsterik(5))

// function PlaywithAsterik(n) {
//     let hasil = '';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j <= i; j++) {
//             hasil += '* ';
//         }
//         hasil += '\n';
//     }
//     return hasil;
// }
// console.log(PlaywithAsterik(5));
// function piramidaInponow(n) {
//     for (let i = 0; i < n; i++) {
//      let a = [];
//      for (var e = 0; e < n; e++) {
//        if (e >= (n) - i && e <= (n) + i) {
//          tamp1.push('*')
//        }else {
//          tamp1.push(' ')
//        }
//      }
//      console.log(tamp1.join(''));
//     }
//   }
//   piramidaInponow(6)


// function PlaywithAsterik(n) {
//     let result = "/n"
//     function segitiga(x) {
//         for(let i = 0; i < x; i++){
            
//             for(let spasi=x; spasi>i; spasi++){
//                 result +=" ";
//             }       
//             for(let y = 0; y<i; y++){
//                 result += " *"
//             }
//             result += "/n"
//         }
//     }

// }


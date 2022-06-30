// function FullPrima(n) {
//     // your code here
//     let bilanganPrima = 0;
//     for(let i = 1; i <= n; i++){
//     if(angka%i == 0)(
//         pembagi ++
//     )
//   } 
// }
//   if(pembagi == 2){
//     console.log(true);
//   }else{
//     console.log(false);
//   }

let bilanganPrima = 81;
let factor = 0
i = 0
while (i < bilanganPrima){
    if (bilanganPrima%i==0){factor++;}
    if (i %2 == 0 ) continue;
    if (factor > 2) break;
    i++
}
if (factor > 2) {
    console.log("bukan bilangan prima");
} else {
    console.log("bilangan prima");
}




  // console.log(FullPrima(2))  // true
  // console.log(FullPrima(3))  // true
  // console.log(FullPrima(11)) // false
  // console.log(FullPrima(13)) // false
  // console.log(FullPrima(23)) // true
  // console.log(FullPrima(29)) // false
  // console.log(FullPrima(37)) // true
  // console.log(FullPrima(41)) // false
  // console.log(FullPrima(43)) // false
  // console.log(FullPrima(53)) // true
function FullPrima(n) {
    // your code here
    let pembagi = 0;
    for(let i = 1; i <= n; i++){
    if(angka%i == 0)(
        pembagi ++
    )
  } 
}
  if(pembagi == 2){
    console.log(true);
  }else{
    console.log(false);
  }




  console.log(FullPrima(2))  // true
  console.log(FullPrima(3))  // true
  console.log(FullPrima(11)) // false
  console.log(FullPrima(13)) // false
  console.log(FullPrima(23)) // true
  console.log(FullPrima(29)) // false
  console.log(FullPrima(37)) // true
  console.log(FullPrima(41)) // false
  console.log(FullPrima(43)) // false
  console.log(FullPrima(53)) // true
function UbahHuruf(sentence) {
  let change = "";
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence.charCodeAt(i);
  if (char >= 97 && char <= 122) {
    change += String.fromCharCode(((char - 97 + 10) % 26) + 97);
  } else if (char >= 65 && char <= 90) {
    change += String.fromCharCode(((char - 65 + 10) % 26) + 65);
  } else {
    change += String.fromCharCode(char);
  }
}
  return change;
}

console.log(UbahHuruf("SEPULAS OKE"));
console.log(UbahHuruf("ALTERRA ACADEMY"));
console.log(UbahHuruf("INDONESIA"));
console.log(UbahHuruf("GOLANG"));
console.log(UbahHuruf("PROGRAMMER"));

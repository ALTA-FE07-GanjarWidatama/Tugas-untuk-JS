function UbahHuruf(sentence) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    for 
    (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  console.log(UbahHuruf("SEPULAS OKE"));
  console.log(UbahHuruf("ALTERRA ACADEMY"));
  console.log(UbahHuruf("INDONESIA"));
  console.log(UbahHuruf("GOLANG"));
  console.log(UbahHuruf("PROGRAMMER"));

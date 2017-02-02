//iteratively
function digitProduct (n) {
    if (n < 1) { return "Not a positive integer";}
    if (n === 1) {
      return 1;
    } else if (n > 10) {
      return 102;
    } else {// 2-10
      return call(n); //pass n
    }
    function call (m) {
      var result = 1;
      for (let i = 1; i < m; i++) { //m=6, i=5
        if (result < 10) { //2,4,8
        result += result; //8
        } else {
        result += (result % 10) * Math.floor(result / 10); //16
        }
      }
      return result; //22
    }
  }
digitProduct(5)
// 1,2,4,8,16,22,26,38,62,74,102,102

//recursively
function digitProduct (n) {
    if (n < 1) { return "Not a positive integer";}
    if (n > 10) {return 102;}
    if (n === 1) {return 1;}
    else {
      var result = 1;
      for (let i = 1; i < n; i++) {
        if (result < 10) {
        result += result;
        } else {
        result += (result % 10) * Math.floor(result / 10); //16
        }
      }
    }
      return digitProduct(n-1); //pass n
}
digitProduct(13)

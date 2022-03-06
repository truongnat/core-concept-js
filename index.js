function to64bitFloat(num) {
  var i,
    result = "";
  var dv = new DataView(new ArrayBuffer(8));
  dv.setFloat64(0, num, false);

  for (i = 0; i < 8; i++) {
    var bits = dv.getUint8(i).toString(2);
    if (bits.length < 8) {
      bits = new Array(8 - bits.length).fill("0").join("") + bits;
    }
    result += bits;
  }
  return result;
}

function to64bitFloat(num) {
  var i,
    result = '';
  var dv = new DataView(new ArrayBuffer(8));
  dv.setFloat64(0, num, false);

  for (i = 0; i < 8; i++) {
    var bits = dv.getUint8(i).toString(2);
    if (bits.length < 8) {
      bits = new Array(8 - bits.length).fill('0').join('') + bits;
    }
    result += bits;
  }
  return result;
}

var obj = {
  foo: function () {
    return this;
  },
};

function foo() {
  return this;
}

function insertSort(arr = []) {
  const { length } = arr;

  let i,
    j,
    last = 0;

  for (i = 1; i < length; i++) {
    last = arr[i];
    j = i;
    while (arr[j - 1] > last) {
      arr[j] = arr[j - 1];
      j = j - 1;
    }
    arr[j] = last;
  }
  return arr;
}

const ar = [1, 9, 4, 2, 10];

console.log(insertSort(ar));

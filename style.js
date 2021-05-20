//converting to Celsius.

function convertFahrToCelsius(f) {
  if (typeof f == 'string') {
    f = Number(f);
    console.log((((f - 32) * 5) / 9).toFixed(4));
  } else if (typeof f == 'number') {
    console.log((((f - 32) * 5) / 9).toFixed(4));
  } else {
    console.log(`${f} is a valid number, but an ${typeof f}`);
  }
}
convertFahrToCelsius(35);

// checking words function

function checkYuGiOh(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
      arr.push('yu-gi-oh');
    } else if (i % 2 == 0 && i % 3 == 0) {
      arr.push('yu-gi');
    } else if (i % 2 == 0 && i % 5 == 0) {
      arr.push('yu-oh');
    } else if (i % 3 == 0 && i % 5 == 0) {
      arr.push('gi-oh');
    } else if (i % 5 == 0) {
      arr.push('oh');
    } else if (i % 3 == 0) {
      arr.push('gi');
    } else if (i % 2 == 0) {
      arr.push('yu');
    } else {
      arr.push(i);
    }
  }
  console.log(arr);
}
checkYuGiOh(20);

let square = (a, b, h) => (a + b) * h / 2;

console.log('DT: ' + square(2, 3, 4));


let add = (a, b, cb) => {
  setTimeout(() => {
    if (typeof a != 'number' || typeof b != 'number') {
      return cb(new Error('Not a Number'));
    }
    cb(undefined, a + b);
  }, 1000);
}

add(3, 4, (err, result) => {
  if (err) console.log(err); else {
    console.log(result);
  }
})

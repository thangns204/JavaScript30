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

let multiply = (a, b, cb) => {
  setTimeout(() => {
    if (typeof a != 'number' || typeof b != 'number') {
      return cb(new Error('Not a Number'));
    }
    cb(undefined, a * b);
  }, 1000);
}

let divide = (a, b, cb) => {
  setTimeout(() => {
    if (typeof a != 'number' || typeof b != 'number') {
      return cb(new Error('Not a Number'));
    }
    if (b == 0) return cb(new Error('div by 0'))
    cb(undefined, a / b);
  }, 1000);
}


let DT = (a, b, h, cb) => {
  add(a, b, (err, result) =>{
    if (err) return cb(err);
    multiply(result, h, (err, result) => {
      if (err) return cb(err);
      divide(result, 2, (err, result) => {
        if (err) return cb(err);
        cb(undefined, result);
      })
    })
  })
}


DT(2, 3, 4, (err, result) => {
  if (err) console.log(err); else {
    console.log(result);
  }
})

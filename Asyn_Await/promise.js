
let add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != 'number' || typeof b !='number') {
        return reject(new Error("Not a Number"));
      }
      resolve(a + b);
    }, 1000)
  })
}

let multiply  = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != 'number' || typeof b != 'number') {
        return reject(new Error("Not a Number"));
      }
      resolve(a * b)
    }, 2000)
  })
}

let sumandmul = (a, b, c) => {
  add(a, b)
  .then(res => multiply(res, c))
  .then(result => console.log(result))
  .catch(err => console.log(err))
}


Promise.all([add(4, 5), multiply(3, 4)])
.then(res => console.log(res))
.catch(err => console.log(err));

sumandmul(3, 4 , 5);

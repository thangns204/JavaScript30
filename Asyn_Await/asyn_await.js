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

let sumandmul = async(a, b, c) => {
  try {
    let ressum = await add(a, b);
    let resmul = await multiply(ressum, c);
  } catch(e) {

  }

  console(ressum);
}
sumandmul(3, 4 ,5 );

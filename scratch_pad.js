// PROMISES

let p = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a == 2) {
    resolve("Success")
  } else {
    reject("Failed")
  }
})

p.then((message) => {
  // console.log(`This is the .then --> ${message}`)
}).catch((message) => {
  // console.log(`This is the .catch --> ${message}`)
})


// SWITCH STATEMENTS

switch(Math.round(Math.random() * 3)) {
  case 3:
    console.log("Three!")
    break;
  case 2:
    console.log("Two!")
    break;
  case 1:
    console.log("One!")
    break;
  default:
    console.log("Zero!")
}




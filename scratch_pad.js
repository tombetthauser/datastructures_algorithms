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
    // console.log("Three!")
    break;
  case 2:
    // console.log("Two!")
    break;
  case 1:
    // console.log("One!")
    break;
  default:
    // console.log("Zero!")
}



// CLASSES AND FAT ARROW SCOPE

class Person {
  constructor(name) {
    this.name = name
  }

  printNameArrow() {
    setTimeout(() => {
      console.log(`Arrow Func Name: ${this.name}`)
    }, 100)
  }
  
  printNameFunction() {
    setTimeout(function() {
      console.log(`Regular Func Name: ${this.name}`)
    })
  }
}

let justArrowFunction = () => console.log(`Arrow This = ${this}`)

function justAFunction() {
  console.log(`Func This = ${this}`)
}

// justArrowFunction()
// justAFunction()

let person = new Person("Tim")
person.printNameArrow()
person.printNameFunction()
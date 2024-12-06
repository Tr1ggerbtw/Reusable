'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */


const fn = () => {
    const obj1 = {
      name: "Daniil"
    }
    let obj2 = {
      name: "Daniil"
    }
  
    obj1.name = "New name"
    obj2.name = "New name"
  
    // obj1 = {
    //     name: "Sasha" TypeError: Assignment to constant variable.
    // }    We can change only field in constant, but not fully constant
    obj2 = {
      name: "Sasha"
    }
  
    console.dir(obj1)
    console.dir(obj2)
  }
fn()
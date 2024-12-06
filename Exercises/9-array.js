'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

let Arr = [];

    function Phonebook(name, phone){
        this.name = name;
        this.phone = phone;
    }
    Arr = [
        new Phonebook("Daniil", "+38054528411"), 
        new Phonebook("Danka", "+380293241945"),
        new Phonebook("Yan", "+380538952444")
    ]
    function findPhoneByName(name){
        for(let i = 0; i < Arr.length; i++){
            if(Arr[i].name == name) 
                {
                  return Arr[i].phone
                }
        }
    }
    console.log(findPhoneByName("Danka"));

module.exports = { Phonebook, findPhoneByName };

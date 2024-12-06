'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = {
    "Daniil" : "+38054528411",
    "Danka" : "+38039546354",
    "Yan" : "+380538952444"
};

const findPhoneByName = name => phonebook[name]

console.dir(findPhoneByName("Danka"));
     

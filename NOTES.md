Very Important Notes!

TRUTHY & FALSY

Falsy values: 0 (zero), null, undefined, false, NaN, false, " " (empty string)
everything else is Truthy values: '0' (string), 'false' (string), [] (empty array), {} (empty object), function(){} ("empty" function)

Jest -> check for truthy and falsy values

toBeNull, toBeUndefined, toBeDefined, toBeTruthy, toBeFalsy

toBe is for primities types
toEqual for objects and arrays

When we are working with async data we have to be carefull with expect.assertions and return the function because if we miss those we are going to recieve true even it isn't.

If we want to run our test as we're developing,
In package.json add inside
"scripts": {
"test": "jest",
"testwatch" : "jest --watchAll"
}
On terminal\$ npm run testwatch

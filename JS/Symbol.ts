/** ------- SYMBOL  ------- **/
/*
Symbol is a built-in object whose constructor returns a symbol primitive that's guaranteed to be unique. 
Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, 
and which are hidden from any mechanisms other code will typically use to access the object. That enables a form of weak encapsulation, or a weak form of information hiding.

Every Symbol() call is guaranteed to return a unique Symbol. 
*/

// When instantiating a symbol there is an optional first argument where you can choose to provide it with a string. 
// This value is intended to be used for debugging code, it otherwise doesn’t really affect the symbol itself.
const s1 = Symbol('debug');
console.log(s1); // Symbol(debug)

// They are useful to avoid the risk of having name collisions with other libraries.
var ob: any = {}
ob.id = 'Hello'
var library1property = Symbol('id'); // Unique key
ob.library1property = "World"

// Then why not use uuid()?
// Symbols are not visible when iterating or stringifying, console.log()...
JSON.stringify(ob); // {id: 'Hello'}

// We can use it as a proxy to hide properties that no one can collide with
var favBook = Symbol('fav book');
ob = {
    name: 'Thomas Hunter II',
    age: 32,
    _favColor: 'blue',
    [favBook]: 'Metro 2033',
    [Symbol('visible')]: 'foo'
};
console.log(JSON.stringify(ob)) // {"name":"Thomas Hunter II","age":32,"_favColor":"blue"}
console.log(ob[favBook])        // "Metro 2033"


/* -- Symbol.for("key") --
Every Symbol.for("key") call will always return the same Symbol for a given value of "key".
When Symbol.for("key") is called, if a Symbol with the given key can be found in the global Symbol registry, that Symbol is returned. 
Otherwise, a new Symbol is created, added to the global Symbol registry under the given key, and returned.
*/
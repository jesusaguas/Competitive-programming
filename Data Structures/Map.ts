/*
---- Objects vs. Maps ----
Object is similar to Map, both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. 
However, there are important differences that make Map preferable in some cases:

- Accidental keys: 
    - A Map does not contain any keys by default.
    - Object has a prototype
- Key Types:
    - Map's keys can be any value (including functions, objects, or any primitive).
    - Objects must be either a String or a Symbol.
- Key Order:
    - A Map object iterates entries, keys, and values in the order of entry insertion.
    - Unordered
- Size:
    - The number of items in a Map is easily retrieved from its size property.
    - The number of items in an Object must be determined manually.
- Iteration:
    - A Map is an iterable, so it can be directly iterated.
    - Object does not implement an iteration protocol, and so objects are not directly iterable using the JavaScript for...of statement (by default).
- Serialization and parsing:
    - No native support for serialization or parsing.
    - Native support for serialization from Object to JSON, using JSON.stringify() and from JSON to Object, using JSON.parse().
*/

/** ------- CREATION  ------- **/
const myMap = new Map()
const myMapFromArray = new Map([['key1', 'value1'], ['key2', 'value2']]) // Use the regular Map constructor to transform a 2D key-value Array into a map


/** ------- ITERATION  ------- **/
for (const [key, value] of myMap) {
    console.log(key + ' = ' + value)
}

/** ------- INSERTION && UPDATE  ------- **/
myMap.set('a string', "value associated with 'a string'")
myMap.set({}, 'value associated with keyObj')
myMap.set(function() {}, 'value associated with keyFunc')


/** ------- GET  ------- **/
myMap.get('a string')    // "value associated with 'a string'"
myMap.has('notExists')   // false (True if the key exists)
myMap.get('notExists')   // undefined
var size = myMap.size    // 3


/** ------- DELETE  ------- **/
myMap.delete('a string') // True if successful, else false
myMap.clear() // Removes all key-value pairs from the Map object

/** -- EXTRA -- */
// Merge maps
const mergedMaps = new Map([...myMap, ...myMapFromArray, [1, 'eins']])
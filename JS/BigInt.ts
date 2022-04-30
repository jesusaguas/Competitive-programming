/** ------- BIGINT  ------- **/
/* 
Used for values larger than Number.MAX_SAFE_INTEGER (2^53 o 10^15).
Only available at es2020
*/

/** ------- CREATION  ------- **/
const previouslyMaxSafeInteger = 9007199254740991n

const alsoHuge = BigInt(9007199254740991)
const hugeString = BigInt("9007199254740991")
const hugeHex = BigInt("0x1fffffffffffff")
const hugeOctal = BigInt("0o377777777777777777")
const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111")
// ↪ 9007199254740991n

/** ------- OPERATIONS  ------- **/
// A BigInt value cannot be used with methods in the built-in Math object. 
// And cannot be mixed with a Number value in operations.
// 5+BigInt(4)
alsoHuge + BigInt(4);
// However, a Number value and a BigInt value may be compared as usual.
4 < alsoHuge;
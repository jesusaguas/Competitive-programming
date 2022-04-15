/** ------- NULL/UNDEFINED  ------- **/
/* 
 - The value null represents the intentional absence of any object value.
 - The value undefined represents a variable that has not been assigned a value.
*/
// NULL vs UNDEFINED
typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null  == null        // true
!null                // true
//isNaN(1 + null)      // false
//isNaN(1 + undefined) // true
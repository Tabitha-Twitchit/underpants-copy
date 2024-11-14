// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

//  Functional Library 

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
 TABI: Create methods from the instructions below. Do this like so:

 _.identity = function(){

 }
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(valA){

    return valA;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf  = function(val){

    if(Array.isArray(val)){
        return "array";
    } else if(val === null){
        return "null";
    }else{
    return typeof val;
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(arr, num){
    if(!Array.isArray(arr)){
        return [];
    }   
    // made these separate logic chains because they targeted dif variables
    if (typeof num !== "number"){
        return arr[0];
    } else if (num < 0){
        return [];
    } else {
        // The instruction here is to return numerous items from the array, how?
        // Ahh okay, this is cool to know! You don't need to loop to return multiple
        // values! Ofc ofc.
        return arr.slice(0, num);
    }
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(arr, num){
    if(!Array.isArray(arr)){
        return [];
    }   

    if (typeof num !== "number"){
        return arr[arr.length - 1];
    } else if (num < 0){
        return [];
    } else if (num > arr.length){
        return arr;
    } 
    else {
        // The instruction here is to return numerous items from the array, how?
        // Ahh okay, this is cool to know! You don't need to loop to return multiple
        // values! Ofc ofc.
        // console.log(arr.slice(num -1, arr.length));
        return arr.slice(num -1, arr.length)
        // This got awkward because it's asking for the last X number of items from 
        // the array, not array index, hence num -1
    }
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(arr, val){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === val){
            return i;
        } 
    }
    return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(arr, val){
    // declare a bool we'll work with later
    let flag;

    // loop array
    for (let i = 0; i < arr.length; i++){
        // using ternary operator set the flag true or false, depending
        arr[i] === val ? flag = true : flag = false;
        // if we find a match, we can exit the loop immediately
        if (flag){
            return true;
        }
    }
    // otherwise we complete the entire loop, and if falsey return false. 
    if (!flag){
        return false;
    }
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, func){
    // reused previously created typeOf (vs typeof) from function library above
    if(this.typeOf(collection) === "array"){
        for (let i = 0; i < collection.length; i++){
            func(collection[i], i, collection);
        }
    } else if (this.typeOf(collection) === "object"){
        for (let key in collection){
            // not sold this is the right way to access keys and values but is passing, so...?
            func(collection[key], key, collection)
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
#############################################################
_.indexOf = function(arr, val){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === val){
            return i;
        } 
    }
    return -1;
}
############################################################
I: an array in the argument, and a call of the prev index func
O: a new array minus the duplicates.
C: use the prev index function
*/
// APPROACH 1
// push all elements off into the new array so you have something to compare to

// loop the array

    // loop the new array within the other loop
    // compare each indexed element
    
    //  if they match delete them from the new array 

// APPROACH 2:
// indexOf returns an index, which would tell you WHAT INDEX to delete
// Say, using a splice method...
// 
// But we first need to know what values to feed it, so we have to 
// first find those values that need to be deleted that match

_.unique = function(arr){
    let outputArray = []

    for (let i = 0; i < arr.length; i++){
        // I'm iffy on this part for a couple reasons, calling indexOf 
        // properly and how to handle / use the return.  
        // 
        // indexOf doesn't provide a push, we have to use the return 
        // somehow to trigger the push logic, by, say checking the return...
        _.indexOf(outputArray, arr[i]);
        console.log("Still going?");
    }

    return outputArray
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* 
!!!!Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(arr, func){
    let newArray = [];

    for (let i = 0; i < arr.length; i++){
        if (func(arr[i], i, arr)){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func){
    const output = [];

    if(Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            // DOES ANY FUNC ON THE INDEXED VAL IN ANY COLLECTION
            output.push(func(collectio[i], i, collection));
        }
    } else {
        for (let key in collection){
        // TBD NEEDS COMPLETEION 
        }
    }

    return output;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
ADDITIONAL EXAMPLES:
// _.every([1, 2, 3, 4], function(n){ return n % 2 === 0}); // false (because not every time is even)
// _.every([2, 4, 6], function(n){ return n % 2 === 0}); // true (every item is even)
// _.every({ a: 1, b: 2 }, function(n){ return n > 1});// false (not every item is greater than 1)
// _.every({ a: 3, b: 4 }, function(n){ return n > 1}); /// true (every item is greater than 1)


// _.every([1, 2, 3]); // true (because every item is truthy)
// _.every([1, undefined, 3]); // false (because one item is falsey)
// _.every({ a: 1, b: 2 }); // true (because all of the values are truthy)
// _.every({ a: null, b: 2}); // false (because of the values if falsey)
*/


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


/** _.reduce
* WE WILL TALK ABOUT THIS IN CLASS
Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6

// Reduce has an additional argument always passed in that includes a "seed value"
// NOTES: Invokes a callback function to...return a single result.

// the strength of reduce is that unlike map and filter which return arrays, it can return anything. A string, num array etc


*/

_.reduce = function(array, func, seed){
    //creeate output 
    let output;
    // check if seed value is provided
    if(seed === undefined){
        output = array[0];
        for (let i = 1; i < array.length; i++){
            // reassigning output to the RESULT of invoking the callback function
            output = func(output, array[i], i);
        }
    } else {
        output = seed;
        for (let i = 0; i < array.length; i++){
            // reassigning output to the RESULT of invoking the callback function
            // A very MAJOR point of understanding is that output and "accumulator" 
            // in Alex's example are synonymous/passed, because in Alex's version it is what
            // is RETURNED from the CALLBACK ergo the RESULT of running the function 
            // AND assigning it the value of output.
            output = func(output, array[i], i);
        }
    }

    return output;
};


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}

// NOTE EXTEND WILL USE THE REST SYNTAX OR ARGUMENTS OBJECT
YOU NEED TO BE ABLE TO TAKE IN AN INDEFINITE NUMBER OF OBJECTS
// THese then get trascribed to a new object / array.
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
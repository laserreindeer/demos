var foo = "foo"; // <- Explicit
/**
 * There is an implicit definition of the variable called "bar" here, due to
 * "hoisting" (the automatic behavior of JavaScript of moving all variable
 * definitions to the top of the current scope's block). If you take a look at
 * line 24, you'll see a variable definition thats actually moved here.
 */
// var bar; <- Implicit

if (true) {
	console.log(foo); // "foo" is defined in the current scope.
	console.log(bar); // "bar" is defined in the current scope, with the "undefined" value.
}

(() => {
	console.log(foo); // "foo" is defined in the upper scope.
	console.log(bar); // "bar" is defined in the upper scope, with the "undefined" value.
})();

/**
 * This variable definition is moved to top by hoisting, and this line is turned
 * into an assignation instead of a definition.
 */
var bar = "bar"; // So this line is actually: bar = "bar"
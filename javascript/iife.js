/**
 * It's a general good practices to have your base script to run inside a
 * Immediately-invoked function expression (IIFE). This practice is very popular
 * to avoid window/global pollution, and having all your variables in a "private"
 * scope.
 */
(function () {
	var a = 1;
	let b = 2;
	const c = 3;
	
	/**
	 * The previously defined variables and constant are accessible in here:
	 * 
	 * This will log "1 2 3"
	 */
	console.log(a, b, c);
})();

/**
 * But outside the function, the variables and the constant are nonexistent:
 * 
 * This will log "undefined undefined undefined"
 */
console.log(a, b, c);

/**
 * An ES2015 fat arrow function can be used instead, and has the same effect.
 */
(() => {
	/**
	 * The same names can be used because this is yet another scope.
	 */
	var a = 4;
	let b = 5;
	const c = 6;
	
	/**
	 * This will log "4 5 6"
	 */
	console.log(a, b, c);
})();
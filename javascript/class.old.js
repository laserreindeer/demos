/**
 * Create a function with the initialization.
 */
function ExampleObject(exampleParameter) {
	this.exampleProperty = exampleParameter;
}

/**
 * Add methods trough the prototype property of the function.
 */
ExampleObject.prototype.exampleMethod = function () {
	return this.exampleProperty;
};

/**
 * Add static property.
 */
ExampleObject.exampleStaticProperty = "example";

/**
 * Add static method.
 */
ExampleObject.exampleStaticMethod = function () {
	return ExampleObject.exampleStaticProperty;
}

/**
 * To extend is needed to create a new function that will run the previous one
 * with a different scope.
 */
function ExampleObjectExtension() {
	ExampleObject.call(this, "Extension");
}

/**
 * The children function inherits all methods from the parent trough a copy of
 * the prototype object.
 */
ExampleObjectExtension.prototype = Object.create(ExampleObject.prototype);

/**
 * Create a new instance of the child object.
 */
const exampleObjectInstance = new ExampleObjectExtension();

/**
 * Use the method defined on the parent object.
 */
exampleObjectInstance.exampleMethod();

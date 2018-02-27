/******************************************************************************\
 * THE OLD METHOD                                                             *
\******************************************************************************/

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

/******************************************************************************\
 * THE NEW METHOD                                                             *
\******************************************************************************/

/**
 * Create a class
 */
class ExampleClass {
	/**
	 * Set the initialization of the class.
	 */
	constructor(exampleParameter) {
		this.exampleProperty = exampleParameter;
	}
	/**
	 * Add methods directly on the class.
	 */
	exampleMethod() {
		return this.exampleProperty;
	}
}

/**
 * The children function inherits on a more natural way.
 */
class ExampleClassExtension extends ExampleClass {
	/**
	 * "super" is a reference to the parent class.
	 */
	constructor() {
		super("Extension");
	}
}

/**
 * The creation of a new instance is the same.
 */
const exampleClassInstance = new ExampleClassExtension();

/**
 * The usage of the methods is also the same.
 */
exampleClassInstance.exampleMethod();
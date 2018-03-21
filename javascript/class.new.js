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
	 * Add static property (actually a static property accessor).
	 */
	static get exampleStaticProperty() {
		return "example";
	}

	/**
	 * Add static method.
	 */
	static exampleStaticMethod() {
		return ExampleClass.exampleStaticProperty;
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
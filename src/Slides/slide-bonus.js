// @flow

// Immutability operator
type immutableObject = {|
	+myAttr: string,
|};

const myObject: immutableObject = {
	myAttr: "don't touch this!",
};
myObject.myAttr = "oups!";

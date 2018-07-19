// @flow

// un type standard
type Dude = {|
	name: string,
	isOriginal: boolean,
|};

// l'instance de Dude
const dude: Dude = {
	name: "the Dude",
	isOriginal: true,
};

// un autre type
type Guy = {|
	name: string,
	age: number,
	isOriginal: boolean,
|};

// l'instance de Guy
const guy: Guy = {
	name: "Guy",
	age: 84,
	isOriginal: true,
};

// Peut être ça?
function clone(person: { name: string, isOriginal: boolean }) {
	const { name, isOriginal, ...rest } = person;
	return {
		name: `${name}#`,
		isOriginal: false,
		...rest,
	};
}

// oui
clone(dude);
// ...mais non
clone(guy).age;

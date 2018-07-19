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

// et comme ça?
function clone(person: Dude | Guy): Dude | Guy {
	const { name, isOriginal, ...rest } = person;
	return {
		name: `${name}#`,
		isOriginal: false,
		...rest,
	};
}

// non, toujours pas...
clone(guy).age;
clone(dude).age;


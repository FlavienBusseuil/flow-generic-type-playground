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

// on spécifie le type qu'on veut en entré de notre helper
type Person = {
	name: string,
	isOriginal: boolean,
};

// 2ème approche: le Type auto `*` fait la job pour nous!
function clone<T: Person>(person: T): T {
	const { name, isOriginal, ...rest } = person;
	return {
		name: `${name}#`,
		isOriginal: false,
		...rest,
	};
}

// ça marche!
clone(dude).age;	// 👍 un dude n'a pas d'age
clone(guy).age;		// 👍 guy a un age

const man = { name: 1, isOriginal: true };
// 👍 [Flow] Cannot call `clone` with `man` bound to `person` because number
// is incompatible with string in property `name`.
clone(man);

// Flow est smart mais on peut vouloir être précis pour éviter des erreurs:
clone<Dude>(dude);
clone<Guy>(guy);
clone<Dude>(guy);

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

// 2ème approche: le Type auto `*` fait la job pour nous!
function clone(person: *) {
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

// Équivalent à:
function clone(person: Dude) { /* ... */ };
function clone(person: Guy) { /* ... */ };


// drawbacks:
// * on ne spécifie pas explicitement le type souhaité puisqu'il est automatiquement déduit.
// * de la même manière le dev doit déduire les requis du helper en lisant son contenu.

// ainsi j'ai le droit de faire:
const man = {
	name: 1,			// 😕 #PasParfait
	isOriginal: true,
};
clone(man);

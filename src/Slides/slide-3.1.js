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

// 1ère approche:
function clone(person: Dude | Guy) {
	const { name, isOriginal, ...rest } = person;
	return {
		name: `${name}#`,
		isOriginal: false,
		...rest,
	};
}

// ça marche! :)
clone(guy).age;
// ...ouin, ou pas :(
clone(dude).age;

// drawbacks:
// * le helper dois connaitre l'ensemble les types possibles à l'avance
// * pénible à maintenir lorsqu'on ajoute des nouveaux types
// * on doit déduire les requis du helper en lisant son contenu

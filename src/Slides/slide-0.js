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

// un helper
function clone(dude: Dude): Dude {
	return {
		name: `${dude.name}#`,
		isOriginal: false,
	};
}

// Jusque là tout va bien.
clone(dude);

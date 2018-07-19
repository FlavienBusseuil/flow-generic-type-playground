// @flow
import { PureComponent } from "react";

// Les Types Generic de Flow à la rescousse!

// Array utilise les Types Generic:
const myStrings: Array<string> = ["s1", "s2"];

// Component aussi:
class myComponent extends PureComponent<{}, {}> {};


// Comment ça marche?
type MyType<T> = T;

const a: MyType<string> = "Ceci est une string";
const b: MyType<number> = "Ceci est n'est pas un number";


// Des trucs plus fou:
type Text = string;
type Sheet = Array<Array<string>>;
type Slides = Array<{| title: string, body: string |}>;

type Document<T = Text> = {
	title: string,
	content: T,
};

const textDoc: Document<> = {
	title: "test",
	content: "awsome text...",
};
const sheetDoc: Document<Sheet> = {
	title: "test",
	content: [["r1c1", "r1c2"], ["r2c1"], ["r3c1"]],
};
const slideDoc: Document<Slides> = {
	title: "test",
	content: [
		{ title: "slide1", body: "content1" },
		{ title: "slide2", body: "content2" },
	],
};

function getContent<T>(document: Document<T>): T {
	return document.content;
}

getContent<Text>(sheetDoc);					// 👍 pas un document text
getContent<Text>(textDoc);					// 👍
getContent<Sheet>(sheetDoc).map(e => e);	// 👍

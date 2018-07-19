// @flow

export type Element = {
	_id: string,
};
export type List<T: Element = {| _id: string |}> = Array<T>;

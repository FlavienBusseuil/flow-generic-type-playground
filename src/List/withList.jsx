// @flow
import React, { PureComponent, type ComponentType } from "react";
import update from "immutability-helper";

import { type List } from "./types";

type Props<Element> = {|
	list: List<Element>,
|};
type State<Element> = {|
	results: List<Element>,
|};
export type WithListType<Element = { _id: string }> = {|
	list: {|
		results: List<Element>,
		update: ((List<Element>) => List<Element>) => void,
	|},
|};

function withList<Element: { _id: string }>(
	WrappedComponent: ComponentType<WithListType<Element>>
) {
	class WithList extends PureComponent<Props<Element>, State<Element>> {
		static defaultProps = {
			list: [],
		};
		state = {
			results: [],
		};

		componentWillMount() {
			const { list } = this.props;
			this.setState({
				results: list,
			});
		}

		update = (updateList: (List<Element>) => List<Element>) => {
			const { results } = this.state;
			this.setState({
				results: update([], {
					$set: updateList(results),
				}),
			});
		};

		// expose some list functions here...

		render() {
			const { list, ...restProps } = this.props;
			const { results } = this.state;
			return (
				<WrappedComponent
					list={{
						results,
						update: this.update,
					}}
					{...restProps}
				/>
			);
		}
	}

	return WithList;
}

export default withList;

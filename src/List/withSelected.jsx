// @flow
import React, { PureComponent, type ComponentType } from "react";

import { type WithListType } from "./withList";

type State = {|
	result: ?string,
|};
type PropsIn = {
	...WithListType<>,
};
export type WithSelectedType = {|
	selected: {|
		result: ?string,
		select: (string) => void,
		unselect: () => void,
	|},
|};
type PropsOut = {
	...WithListType<>,
	...WithSelectedType,
};

function withSelected(WrappedComponent: ComponentType<PropsOut>) {
	class WithSelected extends PureComponent<PropsIn, State> {
		state = {
			result: null,
		};

		select = (_id: string) => {
			this.setState({
				result: _id,
			});
		};

		unselect = () => {
			this.setState({
				result: null,
			});
		};

		render() {
			const { result } = this.state;
			return (
				<WrappedComponent
					selected={{
						result,
						select: this.select,
						unselect: this.unselect,
					}}
					{...this.props}
				/>
			);
		}
	}

	return WithSelected;
}

export default withSelected;

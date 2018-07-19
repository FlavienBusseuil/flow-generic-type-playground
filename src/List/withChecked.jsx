// @flow
import React, { PureComponent, type ComponentType } from "react";
import update from "immutability-helper";

import { type WithListType } from "./withList";

type State = {|
	results: Array<string>,
|};
type PropsIn = {
	...WithListType<>,
};
export type WithCheckedType = {|
	checked: {|
		results: Array<string>,
		check: (string, ?boolean) => void,
		checkMany: (Array<string>, ?boolean) => void,
		checkAll: (?boolean) => void,
		toggle: (string) => void,
	|},
|};
type PropsOut = {
	...WithListType<>,
	...WithCheckedType,
};

function withChecked(WrappedComponent: ComponentType<PropsOut>) {
	class WithChecked extends PureComponent<PropsIn, State> {
		state = {
			results: [],
		};

		check = (_id: string, checked: ?boolean = true) => {
			this.checkMany([_id], checked);
		};

		checkMany = (ids: Array<string>, checked: ?boolean = true) => {
			const { results } = this.state;

			this.setState({
				results: update(
					results,
					checked
						? {
								$push: ids.filter((_id) => !results.includes(_id)),
						  }
						: {
								$set: results.filter((_id) => !ids.includes(_id)),
						  },
				),
			});
		};

		toggle = (_id: string) => {
			const { results } = this.state;
			this.setState({
				results: update(
					results,
					results.includes(_id)
						? {
								$splice: [[results.indexOf(_id), 1]],
						  }
						: {
								$push: [_id],
						  },
				),
			});
		};

		checkAll = (checked: ?boolean = true) => {
			const { list } = this.props;
			const { results } = this.state;

			this.setState({
				results: update(
					results,
					checked
						? {
								$set: list.results.map((result) => result._id),
						  }
						: {
								$set: [],
						  },
				),
			});
		};

		render() {
			return (
				<WrappedComponent
					checked={{
						...this.state,
						check: this.check,
						checkMany: this.checkMany,
						checkAll: this.checkAll,
						toggle: this.toggle,
					}}
					{...this.props}
				/>
			);
		}
	}

	return WithChecked;
}

export default withChecked;

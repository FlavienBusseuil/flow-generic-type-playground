// @flow
import React, { PureComponent } from "react";
import { compose } from "redux";
import type { HigherOrderComponent } from "react-flow-types";

import withList, { type WithListType } from "./List/withList";
import withChecked, { type WithCheckedType } from "./List/withChecked";
import withSelected, { type WithSelectedType } from "./List/withSelected";

type StudentType = {|
	_id: string,
	fname: string,
	lname: string,
|};

type Props = {|
	...WithListType<StudentType>,
	...WithCheckedType,
	...WithSelectedType,
|};

class MyList extends PureComponent<Props> {
	componentWillMount() {
		this.props.list.update(() => [
			{ _id: "1", fname: "fn1", lname: "ln1" },
			{ _id: "2", fname: "fn2", lname: "ln2" },
			{ _id: "3", fname: "fn3", lname: "ln3" },
			{ _id: "4", fname: "fn4", lname: "ln4" },
			{ _id: "5", fname: "fn5", lname: "ln5" },
			{ _id: "6", fname: "fn6", lname: "ln6" },
		]);
	}
	render() {
		const { list, checked, selected } = this.props;
		return (
			<ul>
				{list.results.map((e) => (
					<li key={e._id}>
						<span
							onClick={() => {
								checked.toggle(e._id);
							}}
						>[{checked.results.find((c) => c === e._id) ? "X" : "_"}]
						</span>
						<span
							onClick={() => {selected.select(e._id);}}
							className={selected.result === e._id ? "selected" : ""}
						>
							{e.fname} {e.lname}
						</span>
					</li>
				))}
			</ul>
		);
	}
}

export default compose(withList, withChecked, withSelected)(MyList);

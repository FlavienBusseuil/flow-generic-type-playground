// @flow
import React, { PureComponent } from 'react';

import MyList from "./MyList";

type Props = {|
|};

class App extends PureComponent<Props> {
  render() {
    return (
      <div className="App">
	  	<MyList />
      </div>
    );
  }
}

export default App;

// Look at ReachRouter for setting pages rather than using state

import React, { Component } from 'react';
import "./style.css";
import { Navigation } from './Components/navigation';
import { Dashboard } from "./Components/Pages/Dashboard";
import { Entry } from "./Components/Pages/entry";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dashboard: true,
      entry: false
    }
  }

  handler = (e) => {
    switch (e.target.id) { //Remove all aspects unless it can be used to toggle dropdown
      case "entry":
        this.setState({dashboard: false, entry: true});
        break;
      case "home":
        this.setState({dashboard: true, entry: false});
        break;
      default:
        this.setState({dashboard: true, entry: false});
    }
  }

  render() {
    if (this.state.dashboard) {
      return (
        <React.Fragment>
          <Navigation clicker={this.handler}/>
          <Dashboard />
        </React.Fragment>
      );     
    } else if (this.state.entry) {
      return (
        <React.Fragment>
          <Navigation clicker={this.handler} />
          <Entry />
        </React.Fragment>
      )
    }
  }
}

export default App;
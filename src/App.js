import React, { Component } from 'react';
import "./style.css";
import { Navigation } from './navigation';
import { Dashboard } from "./Dashboard";
import { Entry } from "./entry";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dashboard: true,
      entry: false
    }
  }

  handler = (e) => {
    switch (e.target.id) { //change this to reflect new ids in navigation.js
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
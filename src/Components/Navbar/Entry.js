import React, {Component} from "react";

export class Entry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false,
            display: "none"
        }
    }

    dropdown = () => {
        this.setState({selected: !this.state.selected})
        if (this.state.selected) {
            this.setState({display: "block"}); 
        } else {
            this.setState({display: "none"});
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="menu-heading">
                    <span className="menu-heading" onClick={this.dropdown}>
                        <i className="fas fa-pen nav">
                            <span id="7" onClick={this.dropdown} className="nav-text">Entry</span>
                            <span className="plus">+</span>
                        </i>
                    </span>
                    <ul className="menu-drop" style={{display: this.state.display}}>
                        <div className="dropdown-menu">
                            <li>My Timesheet</li>
                            <li>Staff Expenses</li>
                        </div>
                        <div className="dropdown-menu">
                            <li>Task Pad</li>
                            <li>Manage Menu</li>
                        </div>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}
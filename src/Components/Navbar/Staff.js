import React, {Component} from "react";

export class Staff extends Component {
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
                    <span onClick={this.dropdown}>
                        <i className="far fa-user nav">
                            <span className="nav-text">Staff</span>
                            <span className="plus">+</span>
                        </i>
                    </span>
                    <ul className="menu-drop" style={{display: this.state.display}}>
                        <div className="dropdown-menu">
                            <li>Search</li>
                            <li>Reports</li>
                        </div>
                        <div className="dropdown-menu">
                            <li>All Staff Details</li>
                            <li>Global Std Job Management</li>
                            <li>Global Tax Job Management</li>
                            <li>Staff Jobs</li>
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
import React, {Component} from "react";

export class Contact extends Component {
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
                        <i className="fas fa-mobile-alt nav">
                            <span className="nav-text">Contact</span>
                            <span className="plus">+</span>
                        </i>
                    </span>
                    <ul className="menu-drop" style={{display: this.state.display}}>
                        <div className="dropdown-menu">
                            <li>Dashboard</li>
                            <li>Search</li>
                            <li>Reports</li>
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
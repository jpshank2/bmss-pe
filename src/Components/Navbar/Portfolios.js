import React, {Component} from "react";

export class Portfolios extends Component {
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
                <span onClick={this.dropdown}>
                    <i className="fas fa-briefcase nav">
                        <span className="nav-text">Portfolios</span>
                        <span className="plus">+</span>
                    </i>
                </span>
                <ul style={{display: this.state.display}}>
                    <div className="dropdown-menu">
                        <li>Main Portfolio Summary</li>
                        <li>Special Portfolio</li>
                    </div>
                    <div className="dropdown-menu">
                        <li>Task Pad</li>
                        <li>Manage Menu</li>
                    </div>
                </ul>
            </React.Fragment>
        )
    }
}
import React, {Component} from "react";

export class Home extends Component {
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
                <span>
                    <i className="fas fa-home nav" onClick={this.dropdown} title="Home"></i>
                </span>
            </React.Fragment>
        )
    }
}
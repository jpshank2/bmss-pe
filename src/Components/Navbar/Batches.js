import React, {Component} from "react";

export class Batches extends Component {
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
                    <i className="far fa-folder nav" title="Batches" onClick={this.dropdown}></i>
                </span>
                <ul style={{display: this.state.display}}>
                    <li>Add JS functionality</li>
                    <li>Clients</li>
                    <li>Jobs</li>
                </ul>
            </React.Fragment>
        )
    }
}
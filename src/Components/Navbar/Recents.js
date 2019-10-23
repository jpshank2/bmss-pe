import React, {Component} from "react";

export class Recents extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false,
            display: "none"
        }

        this.recent = []
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
                    <i className="fas fa-angle-right nav" title="Recent Items" onClick={this.dropdown}></i>
                </span>
                <ul style={{display: this.state.display}}>
                    <li>Change Me</li>
                </ul>
            </React.Fragment>
        )
    }
}
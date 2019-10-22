import React, {Component} from "react";

export class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {menus: [
            {id: 0, selected: false, display: "none"},
            {id: 1, selected: false, display: "none"},
            {id: 2, selected: false, display: "none"},
            {id: 3, selected: false, display: "none"},
            {id: 4, selected: false, display: "none"},
            {id: 5, selected: false, display: "none"},
            {id: 6, selected: false, display: "none"},
            {id: 7, selected: false, display: "none"},
            {id: 8, selected: false, display: "none"},
            {id: 9, selected: false, display: "none"},
            {id: 10, selected: false, display: "none"}
        ]}

        this.dropdown = this.dropdown.bind(this);
    }

    dropdown(e) {
      // this.setState({menus: !this.menus[parseInt(e.target.id)].selected})
       //this.state.menus[e.target.id].selected = !this.state.menus[e.target.id].selected
        if (this.state.menus[parseInt(e.target.id)].selected) {
            return this.state.menus[e.target.id].display = "block"
        }
    }

    render() {
        console.log(this.state.menus[0].selected)
        return (
            <nav id="navigation">
                <div>
                    <i className="fas fa-angle-right nav" id="0" title="Recent Items" onClick={this.dropdown}></i>
                    <ul style={{ display: this.state.menus[0].display}}>
                        <li>Test Item</li>
                    </ul>
                </div>
                <i className="far fa-folder nav" id="1" title="Batches"></i>
                <i className="fas fa-home nav" id="2" onClick={this.props.clicker} title="Home"></i>
                <i className="far fa-user nav"><span id="3" className="nav-text">Staff</span><span className="plus">+</span></i>
                <i className="far fa-folder nav"><span id="4" className="nav-text">Client</span><span className="plus">+</span></i>
                <i className="fas fa-plus-circle nav"><span id="5" className="nav-text">Client Take On</span><span className="plus">+</span></i>
                <i className="fas fa-mobile-alt nav"><span id="6" className="nav-text">Contact</span><span className="plus">+</span></i>
                <i className="fas fa-pen nav"><span id="7" onClick={this.props.clicker} className="nav-text">Entry</span><span className="plus">+</span></i>
                <i className="fas fa-briefcase nav"><span id="8" className="nav-text">Portfolios</span><span className="plus">+</span></i>
                <i className="fas fa-wrench nav"><span id="9" className="nav-text">Admin</span><span className="plus">+</span></i>
                <i className="fa fa-list-alt nav"><span id="10" className="nav-text">Reports</span><span className="plus">+</span></i>
            </nav>
        )
    }
}
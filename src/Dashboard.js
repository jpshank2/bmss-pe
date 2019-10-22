import React, {Component} from "react";

export class Dashboard extends Component {    
    render() {
        return (
            <div>
                <h1 className="user">Staff Dashboard for Jeremy Shank</h1>
                <section className="dash">
                    <div className="dashcard">
                        <h2 className="dashtitle">Timesheets</h2>
                    </div>
                    <div className="dashcard">
                        <h2 className="dashtitle">Job Control</h2>
                    </div>
                    <div className="dashcard">
                        <h2 className="dashtitle">Drafts As Creator</h2>
                    </div>
                    <div className="dashcard">
                        <h2 className="dashtitle">Staff Assurance</h2>
                    </div>
                    <div className="dashcard">
                        <h2 className="dashtitle">Staff Jobs</h2>
                    </div>
                    <div className="dashcard">
                        <h2 className="dashtitle">Leave Balance</h2>
                    </div>
                    <div className="dashcard">
                        <h2 className="dashtitle">Reports</h2>
                    </div>
                    <div className="dashcard">
                        <h2 className="dashtitle">Staff Productivity</h2>
                    </div>
                    <div className="dashcard">
                        <h2 className="dashtitle">Staff KPIs</h2>
                    </div>
                    <div className="dashcard">
                        <h2 className="dashtitle">Job Ownership Portfolio</h2>
                    </div>
                    <div className="dashcard">
                        <h2 className="dashtitle">Service Ownership Portfolio</h2>
                    </div>
                    <div className="dashcard">
                        <h2 className="dashtitle">Client Ownership Portfolio</h2>
                    </div>
                </section>
            </div>
        )
    }
}
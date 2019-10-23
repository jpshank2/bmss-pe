import React, { Component } from "react";
import { TimesheetCard } from "../DashboardCards/TimesheetCard";
import { JobControlCard } from "../DashboardCards/JobControlCard";
import { DraftsAsCreatorCard } from "../DashboardCards/DraftsAsCreatorCard";
import { StaffAssuranceCard } from "../DashboardCards/StaffAssuranceCard";
import { StaffJobsCard } from "../DashboardCards/StaffJobsCard";
import { LeaveBalanceCard } from "../DashboardCards/LeaveBalanceCard";
import { ReportsCard } from "../DashboardCards/ReportsCard";
import { StaffProductivityCard } from "../DashboardCards/StaffProductivityCard";
import { StaffKPIsCard } from "../DashboardCards/StaffKPIsCard";
import { JobOwnershipPortfolioCard } from "../DashboardCards/JobOwnershipPortfolioCard";
import { ServiceOwnershipPortfolioCard } from "../DashboardCards/ServiceOwnershipPortfolioCard";
import { ClientOwnershipPortfolioCard } from "../DashboardCards/ClientOwnershipPortfolioCard";

export class Dashboard extends Component {    
    render() {
        return (
            <div style={{marginTop: "50px"}}>
                <h1 className="user">Staff Dashboard for Jeremy Shank</h1>
                <section className="dash">
                    <TimesheetCard />
                    <JobControlCard />
                    <DraftsAsCreatorCard />
                    <StaffAssuranceCard />
                    <StaffJobsCard />
                    <LeaveBalanceCard />
                    <ReportsCard />
                    <StaffProductivityCard />
                    <StaffKPIsCard />
                    <JobOwnershipPortfolioCard />
                    <ServiceOwnershipPortfolioCard />
                    <ClientOwnershipPortfolioCard />
                </section>
            </div>
        )
    }
}
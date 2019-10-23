import React, {Component} from "react";
import {Recents} from "./Navbar/Recents";
import {Batches} from "./Navbar/Batches";
import {Home} from "./Navbar/Home";
import {Staff} from "./Navbar/Staff";
import {Client} from "./Navbar/Client";
import {ClientTakeOn} from "./Navbar/ClientTakeOn";
import {Contact} from "./Navbar/Contact";
import {Entry} from "./Navbar/Entry";
import { Portfolios } from "./Navbar/Portfolios";
import { Admin } from "./Navbar/Admin";
import { Reports } from "./Navbar/Reports";

export class Navigation extends Component {
    render() {
        return (
            <nav id="navigation">
                <Recents />
                <Batches />
                <Home />
                <Staff />
                <Client />
                <ClientTakeOn />
                <Contact />
                <Entry />
                <Portfolios />
                <Admin />
                <Reports />
            </nav>
        )
    }
}
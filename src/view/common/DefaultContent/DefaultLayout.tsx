import { Component } from "react";
import { MainContent } from "../MainContent/MainContent";
import { NavBar } from "../Navbar/NavBar";
import { Footer } from "../Footer/Footer";

export class DefaultLayout extends Component {

    render() {
        return (
            <>
             <NavBar/>
            <MainContent/>
            <Footer/>
            </>
        );
    }
}
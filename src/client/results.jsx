import React from "react";
import {Link} from "react-router-dom";

export class Results extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <>
                <header id="page-header">
                    <h1> Match over </h1>
                    <h3> Something something points and results blah blah </h3>

                    <Link to="/">Go Back</Link>
                </header>
            </>
        )
    }
}
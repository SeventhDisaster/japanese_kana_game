import React from "react";
import {Link} from "react-router-dom";

export class NotFound extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <>
                <header id="page-header">
                    <h1> 404 - Not Found </h1>
                    <h3> You got lost somewhere, idiot. </h3>

                    <Link to="/">Go Back</Link>
                </header>
            </>
        )
    }
}
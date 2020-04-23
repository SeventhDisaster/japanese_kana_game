import React from "react";
import ReactDOM from "react-dom";
import {Results} from './results';
import {Game} from "./game";
import {Home} from "./home";
import {NotFound} from "./notfound";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {
    return (
        <div id="page-container">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/hiraquiz" render={() => <Game category={"Hiragana"}/> /* Hiragana Quiz */ }/>
                    <Route exact path="/kataquiz" render={() => <Game category={"Katakana"}/> /* Katakana Quiz */ }/>
                    <Route exact path="/phonquiz" render={() => <Game category={"Phonetic"}/> /* Phonetic Quiz */ }/>
                    <Route exact path="/kanaquiz" render={() => <Game category={"All"}/> /* All Quizzes */ }/>
                    <Route exact path="/results" component={Results}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
import React from "react";
import ReactDOM from "react-dom";
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
                    <Route exact path="/hiraquiz" render={() => <Game category="Hira"/> /* Hiragana Quiz */ }/>
                    <Route exact path="/kataquiz" render={() => <Game category="Kata"/> /* Katakana Quiz */ }/>
                    <Route exact path="/phonquiz" render={() => <Game category="Phon"/> /* Phonetic Quiz */ }/>
                    <Route exact path="/kanaquiz" render={() => <Game category="Kana"/> /* All Quizzes */ }/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
const React = require('react');
const { mount } = require('enzyme');
const { Home } = require("../../src/client/home");
const {StaticRouter, Switch, Route} = require("react-router-dom");

test("isHomeRendered", () => {
    const driver = mount(
        <StaticRouter context={{}} location={'localhost:8080'}>
            <Switch>
                <Route component={Home}/>
            </Switch>
        </StaticRouter>
        );
    expect(driver.find("#page-header")).toBeDefined();
    expect(driver.find("#game-title")).toBeDefined();
    expect(driver.find("#game-desc")).toBeDefined();
    expect(driver.find(".mode-container")).toBeDefined();
})
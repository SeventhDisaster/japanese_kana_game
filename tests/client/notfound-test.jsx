const React = require('react');
const { mount } = require('enzyme');
const { NotFound } = require("../../src/client/notfound");
const {StaticRouter, Switch, Route} = require("react-router-dom");

test("is404PageRendered", () => {
    const driver = mount(
        <StaticRouter context={{}} location={'localhost:8080/thispagedoesnotexist'}>
            <Switch>
                <Route component={NotFound}/>
            </Switch>
        </StaticRouter>
    );
    expect(driver.find("#not-found-code")).toBeDefined();
    expect(driver.find("#not-found-desc")).toBeDefined();
})
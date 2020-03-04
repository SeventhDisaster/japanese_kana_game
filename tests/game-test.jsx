const React = require('react');
const { mount } = require('enzyme');
const {Game} = require("../src/client/game");

function checkGameHeaderDisplayed(driver) {
    const headerContainer = driver.find('#page-header');
    expect(headerContainer.length).toEqual(1);

    const gameTitle = driver.find('#game-title');
    expect(gameTitle.length).toEqual(1);

    const gameDesc = driver.find('#game-desc');
    expect(gameDesc.length).toEqual(1);
}

test("Test Rendered Game Header", () => {
    const driver = mount(<Game/>);
    checkGameHeaderDisplayed(driver);
})
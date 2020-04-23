const request = require('supertest')
const app = require("../../../src/server/app");

test("Test generate match from API", async () => {
    const response = await request(app).post("/api/games?category=All&amount=5")

    expect(response.status).toBe(201);
    expect(response.body.length).toBe(5);
})
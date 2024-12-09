import request from "supertest";
import app from "../src/app";

describe("Pokemon", () => {
  const server = request(app);
  test("GET /random should return a random pokemon data", async () => {
    const response = await server.get("/random");
    expect(response.status).toBe(200);

    expect(response.body.id).toBeDefined();
    expect(response.body.image).toBeDefined();
    expect(response.body.names).toBeDefined();
  });

  test("createRandomResponse() should false when answer is wrong", async () => {
    const pokemonResponse = await server.get("/random");
    const resultResponse = await server.post("/verify").send({
      id: pokemonResponse.body.id,
      choice: "falseName",
    });

    const nameExists = pokemonResponse.body.names.includes(
      resultResponse.body.name
    );

    expect(resultResponse.body.correct).toBe(false);
    expect(nameExists).toBe(true);
  });

  test("createRandomResponse() should return 400 when a parameter is mising", async () => {
    const resultResponse = await server.post("/verify").send({
      id: 123,
    });

    expect(resultResponse.status).toBe(400);
  });
});

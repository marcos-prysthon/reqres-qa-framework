// tests/api/users/createUser.spec.js
import { test, expect } from "@playwright/test";
import { generateUser } from "../../../helpers/factories/userFactory.js";

test.describe("Create User API", () => {
  test("should create a user with valid name and job", async ({ request }) => {
    const newUser = generateUser();

    const response = await request.post("/api/users", {
      data: newUser,
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body).toHaveProperty("id");
    expect(body).toHaveProperty("createdAt");
    expect(body.name).toBe(newUser.name);
    expect(body.job).toBe(newUser.job);
  });
});

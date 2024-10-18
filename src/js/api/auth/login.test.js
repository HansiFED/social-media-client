import { login } from "./login.js";
import { save } from "../../storage/save.js";

jest.mock("../../storage/save.js", () => ({
  save: jest.fn(),
}));

global.fetch = jest.fn();

describe("Testing the login function", () => {
  beforeEach(() => {
    fetch.mockReset();
    save.mockReset();
  });

  it("should save a token upon successful login", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        accessToken: "token",
        user: "blalalal",
      }),
    });

    const email = "test@stud.noroff.no";
    const password = "noroff12365";
    const accessToken = "token";
    const userProfile = { user: "blalalal" };

    await login(email, password);

    expect(save).toHaveBeenCalledWith("token", accessToken);
    expect(save).toHaveBeenCalledWith("profile", userProfile);
  });

  it("should not save a token on login failure", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: "Bad request",
    });

    const email = "test@stud.noroff.no";
    const password = "wrongPassword";

    await expect(login(email, password)).rejects.toThrow("Bad request");

    expect(save).not.toHaveBeenCalled();
  });
});

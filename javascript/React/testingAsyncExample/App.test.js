import { render, screen } from "@testing-library/react";
import App from "./App";
import axios from "axios";

describe("Async component", () => {
  test("renders post", async () => {
    // replace axios with a mock function
    axios.get = jest.fn();
    // data should mock to original data
    axios.get.mockResolvedValueOnce({
      data: [{ id: "p1", title: "Mock Post" }],
    });

    render(<App />);
    const listItemElements = await screen.findAllByRole(
      "listitem",
      { exact: false },
      { timeout: 1000 }
    );
    expect(listItemElements).not.toHaveLength(0);
  });
});

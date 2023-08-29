import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { expect } from "vitest";

/*
 * Create a suite using the global describe function, and add
 * all relevant tests underneath it.
 *
 * render component
 * get element
 * assert the element is correct
 */

describe("App component", () => {
  test("should render 'Basic testing' paragraph", () => {
    render(<App />);
    const heading = screen.getByText("basic test", { exact: false });
    expect(heading).toBeInTheDocument();
  });

  test("should change text when button is clicked", () => {
    render(<App />);
    // Check that text is present
    const preClickText = screen.getByText("State Unchanged", { exact: false });
    expect(preClickText).toBeInTheDocument();
    // Click the button
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Check that text is changed
    const postClickText = screen.getByText("State Changed", { exact: false });
    expect(postClickText).toBeInTheDocument();
    // make sure original text is not present
    // when text is not present use queryByText to return null if nothing found
    const originalText = screen.queryByText("State Unchanged", {
      exact: false,
    });
    expect(originalText).not.toBeInTheDocument();
  });
});

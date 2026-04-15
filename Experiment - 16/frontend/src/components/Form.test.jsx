import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Form from "./Form";

describe("Login Form Component", () => {

  it("RENDERS email and password fields", () => {
    render(<Form />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();

  });

});
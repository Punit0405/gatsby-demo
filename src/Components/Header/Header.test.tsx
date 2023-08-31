import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header/Header";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";

jest.mock("gatsby", () => ({
    Link: ({ to, children }: any) => <a href={to}>{children}</a>,
}));

describe("Header", () => {
    const mockLinks = [
        {
            title: "INDUSTRIES",
            link: "/industries",
            id: 1,
        },
    ];

    it("Testing the Language Selector", async () => {
        user.setup();
        window.analytics = {
            track: jest.fn(),
        };
        render(<Header links={mockLinks} />);
        const angleDownElement = screen.getByTestId("angleDown");
        expect(angleDownElement).toBeInTheDocument();
        await user.click(angleDownElement);
        const angleUpElement = screen.queryByTestId("angleUp");
        expect(angleUpElement).toBeInTheDocument();
        const PLELEMENT = screen.getByText("PL");
        expect(PLELEMENT).toBeInTheDocument();
        await user.click(PLELEMENT);
        const upElement = screen.queryByTestId("angleUp");
        expect(upElement).not.toBeInTheDocument();
        expect(angleDownElement).toBeInTheDocument();
        const PLELEMENT2 = screen.getAllByText("PL");
        expect(PLELEMENT2[0]).toBeInTheDocument();
    });
});

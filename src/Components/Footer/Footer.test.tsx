import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import Footer from "./Footer";

jest.mock("gatsby", () => ({
    Link: ({ to, children }: any) => <a href={to}>{children}</a>,
}));

describe("Footer", () => {
    it("Rendering  the footer", async () => {
        user.setup();
        render(<Footer />);
        const intiveEle = screen.getByText("© intive GmbH 2023");
        expect(intiveEle).toBeInTheDocument();
    });
    it("Rendering  the link", async () => {
        user.setup();
        render(<Footer />);
        const linkGovernance = screen.getByRole("link", {
            name: "GOVERNANCE",
        });
        const linkPrivacyPolicy = screen.getByRole("link", {
            name: "PRIVACY POLICY",
        });
        expect(linkGovernance).toBeInTheDocument();
        expect(linkPrivacyPolicy).toBeInTheDocument();
    });
    it("Rendering  the icons", async () => {
        user.setup();
        render(<Footer />);
        const faceBook = screen.getByTestId("facebook");
        expect(faceBook).toBeInTheDocument();
        const instagram = screen.getByTestId("instagram");
        expect(instagram).toBeInTheDocument();
        const linkedin = screen.getByTestId("linkedin");
        expect(linkedin).toBeInTheDocument();
        const medium = screen.getByTestId("medium");
        expect(medium).toBeInTheDocument();
        const youtube = screen.getByTestId("youtube");
        expect(youtube).toBeInTheDocument();
        const twitter = screen.getByTestId("twitter");
        expect(twitter).toBeInTheDocument();
        const tiktok = screen.getByTestId("tiktok");
        expect(tiktok).toBeInTheDocument();
    });
});

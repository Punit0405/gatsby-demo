import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import Layout from "./Layout";


jest.mock("gatsby", () => ({
    Link: ({ to, children }: any) => <a href={to}>{children}</a>,
    useStaticQuery: jest.fn().mockReturnValue({
        nav:{
            links:[
                {
                    title: "INDUSTRIES",
                    link: "/industries",
                    id: 1,
                },
            ]
        }
    }),
    graphql: jest.fn()
}));

describe("Footer", () => {
    it("Rendering  the Layout", async () => {
        user.setup();
        render(<Layout><p>test</p></Layout>);
        const testELE = screen.getByText("test");
        expect(testELE).toBeInTheDocument();
    });
    it("Footer Rendering", async () => {
        user.setup();
        render(<Layout>testing</Layout>);
        const linkGovernance = screen.getByRole("link", {
            name: "GOVERNANCE",
        });
        const linkPrivacyPolicy = screen.getByRole("link", {
            name: "PRIVACY POLICY",
        });
        expect(linkGovernance).toBeInTheDocument();
        expect(linkPrivacyPolicy).toBeInTheDocument();
    });
    it("Header Rendering", async () => {
        user.setup();
        window.analytics = {
            track: jest.fn(),
        };
        render(<Layout>testing</Layout>);
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

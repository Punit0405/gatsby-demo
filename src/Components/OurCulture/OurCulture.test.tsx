import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import OurCulture from "./OurCulture";


jest.mock("gatsby", () => ({
    Link: ({ to, children }: any) => <a href={to}>{children}</a>,
    useStaticQuery:jest.fn().mockReturnValue({}),
    graphql:jest.fn()
}));



describe("Rendering Our Culture", () => {
    it("Rendering  the our culture component", async () => {
        user.setup();
        render(<OurCulture/>);
        const heading = screen.getByRole("heading",{
            name:"Our Culture"
        });
        expect(heading).toBeInTheDocument();
        const paragraph = screen.getByText(  /enthusiastic teams accomplish amazing things\. at intive, we champion collaboration, empathy, and inclusion/i  );
        expect(paragraph).toBeInTheDocument();
        const button = screen.getByRole("button",{
            name:"JOIN US"
        });
        expect(button).toBeInTheDocument();

    });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import OurCustomers from "./OurCustomers";
import "resize-observer-polyfill/dist/ResizeObserver.global";



jest.mock("gatsby", () => ({
    Link: ({ to, children }: any) => <a href={to}>{children}</a>,
    useStaticQuery:jest.fn().mockReturnValue({
        site:{ info:{
            brands:[
                "https://images.ctfassets.net/ue4ib83wzj4v/55k0HZMElryiLE16Jo1dJg/a43bd0c865c8dc677ac930d2d74a5392/paramount.svg",
                "https://images.ctfassets.net/ue4ib83wzj4v/4sAr2NN8D2dtAY2ZRklEJh/39c2fd6b04d00ff58ab442d6813eb631/Audi.svg"
            ]
        }}
    }),
    graphql:jest.fn()
}));



describe("Rendering Our Customers", () => {
    it("Rendering  the our Customers component", async () => {
        user.setup();
        render(<OurCustomers/>);
        const heading = screen.getByRole("heading",{
            name:"Our customers"
        });
        expect(heading).toBeInTheDocument();
    });
});

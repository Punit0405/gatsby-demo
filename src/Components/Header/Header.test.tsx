import React from "react";
import { render ,fireEvent ,screen } from "@testing-library/react";
import Header from "../Header/Header";


// Mock FontAwesomeIcon  omponent
jest.mock("@fortawesome/react-fontawesome", () => ({
    FontAwesomeIcon: ({ icon }:any) => <span>{icon.iconName}</span>,
}));

// Mock the Gatsby Link component
jest.mock("gatsby", () => ({
    Link: ({ to, children }:any) => <a href={to}>{children}</a>,
}));

describe("Header", () => {
    const mockLinks = [{
        title:"Test",
        link:"/test",
        id:1
    },{
        title:"test2",
        link:"/test2",
        id:2
    }];

    // it("renders correctly", () => {
    //     const { findByt } = render(<Header links={mockLinks} />);
    
    //     const logoElement = ("svg"); // Replace with actual logo content

    //     expect(logoElement).toBeDefined();
        
    // });

    it("toggles dropdown", () => {
        render(<Header links={mockLinks} />);
        const angleDownElement = screen.getByText(/faAngleDown/i); // Using a regular expression
    
        expect(screen.queryByText(/en/i)).toBeNull(); // Using a regular expression
        fireEvent.click(angleDownElement);
        expect(screen.getByText(/en/i)).toBeInTheDocument(); 
    });
});

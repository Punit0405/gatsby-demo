import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import CarouselComponent from "./Carousel";

jest.mock("gatsby", () => ({
    Link: ({ to, children }: any) => <a href={to}>{children}</a>,
    useStaticQuery:jest.fn().mockReturnValue({allFile:{
        nodes:[
            {
                "name": "AIML_at_intive",
                "childImageSharp": {
                    "gatsbyImageData": {
                        "layout": "fullWidth",
                        "placeholder": {
                            "fallback": "data:image/webp;base64,UklGRrgAAABXRUJQVlA4WAoAAAAQAAAAEwAACQAAQUxQSBgAAAABH3D7/4iIgkG2kXr+JnvTJ4jof1zV4A9WUDggegAAAHAEAJ0BKhQACgA+0VSjS6gkoyGwCAEAGglqAJ0yga/+AxLZ/IIPEGODSl4AAP4mFLD1uLTpKMBnM6Bas/xO6zFdEwTXC7BntMABL7pHeL/8Q+JXf8vP+E1+ILY+/31vmTD+kU175U6CL8l+yiJrEj2bnRKJ4F3LplAA"
                        },
                        "images": {
                            "fallback": {
                                "src": "/static/4dec9af61437db812a78c0454dd9fe60/f0eba/AIML_at_intive.webp",
                                "srcSet": "/static/4dec9af61437db812a78c0454dd9fe60/5fd7a/AIML_at_intive.webp 750w,\n/static/4dec9af61437db812a78c0454dd9fe60/906ff/AIML_at_intive.webp 1080w,\n/static/4dec9af61437db812a78c0454dd9fe60/7ed27/AIML_at_intive.webp 1366w,\n/static/4dec9af61437db812a78c0454dd9fe60/f0eba/AIML_at_intive.webp 1440w",
                                "sizes": "100vw"
                            },
                            "sources": []
                        },
                        "width": 1,
                        "height": 0.5090277777777777
                    }
                },
                "sourceInstanceName": "images"
            },
            {
                "name": "Welcome_to_the_Era_of_Digital_Excitement",
                "childImageSharp": {
                    "gatsbyImageData": {
                        "layout": "fullWidth",
                        "placeholder": {
                            "fallback": "data:image/webp;base64,UklGRmgAAABXRUJQVlA4IFwAAAAQBACdASoUAAoAPtFUo0uoJKMhsAgBABoJagCdMoADgeZF+E09/4qGAAD+8toYhZmFTBTQHUH0vBGM9By1YKwtqOMr5bodg+oL4qR4viHMkf2fcd4CtYLOYUgAAA=="
                        },
                        "images": {
                            "fallback": {
                                "src": "/static/8ea2d490daaf2b79f6f71dedad3a625a/f0eba/Welcome_to_the_Era_of_Digital_Excitement.webp",
                                "srcSet": "/static/8ea2d490daaf2b79f6f71dedad3a625a/5fd7a/Welcome_to_the_Era_of_Digital_Excitement.webp 750w,\n/static/8ea2d490daaf2b79f6f71dedad3a625a/906ff/Welcome_to_the_Era_of_Digital_Excitement.webp 1080w,\n/static/8ea2d490daaf2b79f6f71dedad3a625a/7ed27/Welcome_to_the_Era_of_Digital_Excitement.webp 1366w,\n/static/8ea2d490daaf2b79f6f71dedad3a625a/f0eba/Welcome_to_the_Era_of_Digital_Excitement.webp 1440w",
                                "sizes": "100vw"
                            },
                            "sources": []
                        },
                        "width": 1,
                        "height": 0.5090277777777777
                    }
                },
                "sourceInstanceName": "images"
            },
            {
                "name": "MicrosoftTeams-image__2_",
                "childImageSharp": {
                    "gatsbyImageData": {
                        "layout": "fullWidth",
                        "placeholder": {
                            "fallback": "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAACQBACdASoUAAoAPtFWo0uoJKMhsAgBABoJagCdMoRgAAuf82BL5CB8RHKTF3gA+D3KItreHlzacwGwTzVv2vtd4S0tcE+UJXwJJQuzd7jptl6biiJlLagA"
                        },
                        "images": {
                            "fallback": {
                                "src": "/static/f9b761d92a4503d6dc74b4658a6bfb2e/605d1/MicrosoftTeams-image__2_.webp",
                                "srcSet": "/static/f9b761d92a4503d6dc74b4658a6bfb2e/ee7ce/MicrosoftTeams-image__2_.webp 750w,\n/static/f9b761d92a4503d6dc74b4658a6bfb2e/819dc/MicrosoftTeams-image__2_.webp 1080w,\n/static/f9b761d92a4503d6dc74b4658a6bfb2e/7b8ce/MicrosoftTeams-image__2_.webp 1366w,\n/static/f9b761d92a4503d6dc74b4658a6bfb2e/605d1/MicrosoftTeams-image__2_.webp 1810w",
                                "sizes": "100vw"
                            },
                            "sources": []
                        },
                        "width": 1,
                        "height": 0.5
                    }
                },
                "sourceInstanceName": "images"
            },
            {
                "name": "EdTech_Header",
                "childImageSharp": {
                    "gatsbyImageData": {
                        "layout": "fullWidth",
                        "placeholder": {
                            "fallback": "data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAABQBACdASoUAAoAPtFWpEwoJKOiMAgBABoJZACdMoR2WCACUrADDV7Wt6CAAP7w3unz+QdWby9BZ+CdWEvZTNfKgYUU5pAT9BVj/K1wf7n+6eQKGwrjB6BXgy+3u/2zEL/HdN9dcVv+ADwAAAA="
                        },
                        "images": {
                            "fallback": {
                                "src": "/static/1ecdec4e62d260b1aeebfcb275770e52/e0a47/EdTech_Header.webp",
                                "srcSet": "/static/1ecdec4e62d260b1aeebfcb275770e52/ee7ce/EdTech_Header.webp 750w,\n/static/1ecdec4e62d260b1aeebfcb275770e52/819dc/EdTech_Header.webp 1080w,\n/static/1ecdec4e62d260b1aeebfcb275770e52/7b8ce/EdTech_Header.webp 1366w,\n/static/1ecdec4e62d260b1aeebfcb275770e52/e0a47/EdTech_Header.webp 1920w",
                                "sizes": "100vw"
                            },
                            "sources": []
                        },
                        "width": 1,
                        "height": 0.5
                    }
                },
                "sourceInstanceName": "images"
            }
        ]
    }}),
    graphql:jest.fn()
}));



describe("Rendering Corousel", () => {
    it("Rendering  Corousel and testing image", async () => {
        user.setup();
        render(<CarouselComponent/>);
        const testComp1 = screen.getByTestId("test-1");
        expect(testComp1).toBeInTheDocument();
    });
});

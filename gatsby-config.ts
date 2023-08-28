import type { GatsbyConfig } from "gatsby";


// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
    siteMetadata: {
        title: "Intive Demo",
        siteUrl: "https://www.yourdomain.tld",
        headerLinks:["INDUSTRIES","SERVICES","INSIGHTS","ABOUT","CAREERS","CONTACT"],
        carouselImages:["https://images.ctfassets.net/ue4ib83wzj4v/3xDSG1SOrBpIwYw5YDrzHb/032d607ceb0d6e5af20c5b9e3a224c26/MicrosoftTeams-image__2_.png?w=1810&h=905&q=100&fm=png&bg=transparent",
            "https://images.ctfassets.net/ue4ib83wzj4v/hgHqHsOOGxSXmnmJ9Qf7k/da5c3f8d6b84b3f3582c269271bb606e/Holistic_Shopping_Experience_campaign.png?w=1810&h=905&q=100&fm=png&bg=transparent",
            "https://images.ctfassets.net/ue4ib83wzj4v/2sItMWjiZXM9QXAqk2RPCw/a501afbd10218cf1330201168d9fd034/EdTech_Header.png?w=1810&h=905&q=100&fm=png&bg=transparent"],
        customerLogos:[
            "https://images.ctfassets.net/ue4ib83wzj4v/55k0HZMElryiLE16Jo1dJg/a43bd0c865c8dc677ac930d2d74a5392/paramount.svg",
            "https://images.ctfassets.net/ue4ib83wzj4v/4sAr2NN8D2dtAY2ZRklEJh/39c2fd6b04d00ff58ab442d6813eb631/Audi.svg",
            "https://images.ctfassets.net/ue4ib83wzj4v/72RnLiGg3uMHwvSiKSMrbg/6fa388f98ebb30940e2fcf477b7a5b8c/BASF.svg",
            "https://images.ctfassets.net/ue4ib83wzj4v/55k0HZMElryiLE16Jo1dJg/a43bd0c865c8dc677ac930d2d74a5392/paramount.svg",
            "https://images.ctfassets.net/ue4ib83wzj4v/5dYIpcJVxfZlktwJUksS6C/452e1b9e3a8c0e1ecbff81101c0dad73/nubi.svg",
            "https://images.ctfassets.net/ue4ib83wzj4v/NLu6eYXslY70pAkN8u1Ny/d4ab7bc2d9eb3ad7f21e1eb0adb35d3a/netzsch.svg",
            "https://images.ctfassets.net/ue4ib83wzj4v/3fwelp34KtTZyoBaYmwf0l/808b0bc1be1092b450f763007ed2618d/mosaic.svg",
            "https://images.ctfassets.net/ue4ib83wzj4v/5sg00GGfRBTDxGcFD618u1/13b54edee69f5411faefe3382fc95237/kaplan.svg",
            "https://images.ctfassets.net/ue4ib83wzj4v/3emGM5lXMZgwCWNtfeGvuZ/daa8de46c9ddf6589ccfee0b7ab39032/intersport.svg",
            "https://images.ctfassets.net/ue4ib83wzj4v/4LEH3vNr9eMzhkytfjCB2H/91969fdf280963e8e1ef000f8efdd8f8/facebook.svg",
            "https://images.ctfassets.net/ue4ib83wzj4v/1Ujh09G9f1PKQNhih0W1L/153edc1acd2574c7b645cd93f37cefbd/amc_networks.svg",
            "https://images.ctfassets.net/ue4ib83wzj4v/5iHniBNpmnYFqTqrkItJyX/2dde6baeab8baa043711b3933bd4921c/ae.svg",
            "https://images.ctfassets.net/ue4ib83wzj4v/6myI8qHEJLUwOBHmkAGiI2/62eee5279302f841d3ea6573f473c06d/arri.svg",
            "https://images.ctfassets.net/ue4ib83wzj4v/1GRLuJ4p1FLQ2QJEgbdccD/e5820bc2060e0bb3a42f20e38c763358/osn.svg",
            "https://images.ctfassets.net/ue4ib83wzj4v/4s9JozF3GRSJPoaVxjnJLh/2edd77a42f936d29188401a1b086fd31/Galicia_Logo_square.svg"
        ],
        industries:[
            "AUTOMOTIVE",
            "TECHNOLOGY,MEDIA & COMMUNICATOINS",
            "ENERGY & UTILITIES",
            "FINTECH",
            "INDUSTRIAL",
            "LIFE SCIENCES",
            "ECOMMERCE,RETAIL & CONSUMER PRODUCTS",
            "TELECOMMUNICATIONS",
            "TRANSPOTATION"
        ]
    },
    graphqlTypegen: true,
    plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
        resolve: "gatsby-source-filesystem",
        options: {
            "name": "images",
            "path": `${__dirname}/src/images/`
        }
    },
    {
        resolve: "gatsby-source-contentful",
        options: {
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            // Learn about environment variables: https://gatsby.dev/env-vars
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        },
    },
    {
        resolve: "gatsby-omni-font-loader",
        options: {
            enableListener: true,
            preconnect: ["https://fonts.googleapis.com", "https://fonts.gstatic.com"],
            web: [
                {
                    name: "Lato",
                    file: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700&display=swap",
                },
            ],
        },
    },
    {
        resolve: "gatsby-plugin-segment-js",
        options: {
            // your segment write key for your production environment
            // when process.env.NODE_ENV === 'production'
            // required; non-empty string
            prodKey: "SEGMENT_PRODUCTION_WRITE_KEY",
    
            // if you have a development env for your segment account, paste that key here
            // when process.env.NODE_ENV === 'development'
            // optional; non-empty string
            devKey: "MKwxUXeE693fMEXnDqS9AfarBjTcrEsW",
    
            // Boolean indicating if you want this plugin to perform any automated analytics.page() calls
            // at all, or not.
            // If set to false, see below on how to track pageviews manually.
            // 
            // This plugin will attempt to intelligently prevent duplicate page() calls.
            // 
            // Default: true
            trackPage: true,
    
            // Boolean indicating if you want this plugin to perform a page() call immediately once the snippet
            // is loaded.
            // 
            // You might want to disable this if you *only* want page() calls to occur upon Client-side routing
            // updates. See `trackPageOnRouteUpdate` option.
            // 
            // This plugin will still attempt to intelligently prevent duplicate page() calls.
            // 
            // Default: true
            trackPageImmediately: true,
    
            // Boolean indicating whether to ignore `page` calls by this plugin before we call `analytics.load`
            // and/or the `ready` event has been emitted by `analytics`.
            // 
            // Useful in some cases to prevent issues "queuing" `page` events before Segment is fully loaded.
            trackPageOnlyIfReady: false,
    
            // Boolean indicating whether to perform any page() calls during Client-side routing updates.
            // 
            // You might want to disable `trackPageImmediately` if you *only* want page() calls to occur upon
            // Client-side routing updates.
            // 
            // This plugin will still attempt to intelligently prevent duplicate page() calls.
            // 
            // Default: true
            trackPageOnRouteUpdate: true,
    
            // Number indicating what delay (in ms) should be used when calling analytics.page() in response
            // to a Gatsby `onRouteUpdate` event. This can help to ensure that the segment route tracking is 
            // in sync with the actual Gatsby route. Otherwise you can end up in a state where the Segment
            // page tracking reports the previous page on route change.
            // 
            // See https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/ for more information.
            // 
            // Default: 50
            trackPageOnRouteUpdateDelay: 50,
    
            // Boolean indicating whether or not to add the document.title as the first argument to
            // the analytics.page() calls. Segment uses some sane defaults, but some users of this plugin
            // have wanted to do this in the past.
            // 
            // E.g `analytics.page(document.title)`
            // 
            // Default: false
            trackPageWithTitle: false,
          
            // Boolean indicating whether to call analytics.load() immediately, or to delay it by a specified
            // number of ms. Can be useful if you want to wait a specifc amount of time before calling
            // analytics.load() and kicking off the activity that occurs with that call.
            // 
            // Default: false
            delayLoad: false,
    
            // Number indicating (in ms) how long to wait for before analytics.load() will be called if
            // the `delayLoad` option is set to `true`.
            // 
            // Default: 1000
            delayLoadDelay: 1000,
    
            // Boolean indicating whether to delay calling analytics.load() until either:
            // 1) The User interacts with the page by scrolling
            // OR
            // 2) The User triggers a Gatsby route change.
            // 
            // The `delayLoad` option can be used in addition to this option.
            // 
            // NOTE: 
            // The route change will only be triggered if you leverage client-side routing (ie, Gatsby <Link>)
            // So if you leverage server-side routing with this feature, only a User scroll will trigger
            // the `load` call. This is because client-side routing does not do
            // a full page refresh, but server-side routing does. Therfore server-side routing will never
            // appear to have been triggered by a User interaction.
            // 
            // This is an advanced feature most often used to try to help improve your website's TTI (for SEO, UX, etc).
            // 
            // See here for more context:
            // Client-side routing and browser code: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
            // GIF: https://github.com/benjaminhoffman/gatsby-plugin-segment-js/pull/19#issuecomment-559569483
            // TTI: https://github.com/GoogleChrome/lighthouse/blob/master/docs/scoring.md#performance
            // Problem/solution: https://marketingexamples.com/seo/performance
            // Default: false
            delayLoadUntilActivity: false,
            delayLoadUntilActivityAdditionalDelay: 0,
            manualLoad: false,
            host: "https://cdn.segment.io",
            customSnippet:`!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){if(window.analytics.initialized)return window.analytics[e].apply(window.analytics,arguments);var i=Array.prototype.slice.call(arguments);i.unshift(e);analytics.push(i);return analytics}};for(var i=0;i<analytics.methods.length;i++){var key=analytics.methods[i];analytics[key]=analytics.factory(key)}analytics.load=function(key,i){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=i};analytics._writeKey="MKwxUXeE693fMEXnDqS9AfarBjTcrEsW";;analytics.SNIPPET_VERSION="4.16.1";
            analytics.load("MKwxUXeE693fMEXnDqS9AfarBjTcrEsW");
            analytics.page();
            }}();`
        }
    }
    ]
};

export default config;

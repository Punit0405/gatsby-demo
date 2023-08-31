import React from "react";
import CarouselComponent from "../Components/Carousel/Carousel";
import OurCustomers from "../Components/OurCustomers/OurCustomers";
import HumanCentricComponent from "../Components/HumanCentric/HumanCentricComponent";
import OurIndustries from "../Components/OurIndustries/OurIndustries";
import "../styles/global.css";
import OurCulture from "../Components/OurCulture/OurCulture";
import OurOffices from "../Components/OurOffices/OurOffices";
import Layout from "../Components/Layout";

const index = () => {
    return (
        <Layout>
            <CarouselComponent />
            <OurCustomers />
            <HumanCentricComponent />
            <OurIndustries />
            <OurCulture />
            <OurOffices />
        </Layout>
    );
};

export default index;

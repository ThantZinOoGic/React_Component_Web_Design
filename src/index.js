import React from "react";
import ReactDOM from "react-dom/client";
import HomeSection from "./HomeSection";
import About from "./about/About";
import Contact from "./Contact";
import Footer from "./Footer";
import FeatureSection1 from "./feature/FeatureSection1";
import FeatureSection2 from "./feature/FeatureSection2";
import FeatureSection3 from "./feature/FeatureSection3";
import PriceingSection1 from "./pricing/PriceingSection1";
import PricingSection2 from "./pricing/PricingSection2";
import Feedback from "./about/Feedback";
import NewsSection from "./about/NewsSection";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.css";
import AOS from "aos";
import "aos/dist/aos.css";
import NavSection from "./NavSection";
AOS.init();




const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <NavSection/>
      <Outlet/>
      <Footer/>
    </div>,
    children: [
      {
        path: "/",
        element : <HomeSection/>
      },
      {
        path: "/feature",
        element: <div>
                  <FeatureSection1/>
                  <FeatureSection2 />
                  <FeatureSection3 />
                </div>,
      },
      {
        path: "/price",
        element: <div>
                  <PriceingSection1 />
                  <PricingSection2 />
                </div>,
      },
      {
        path: "/feedback",
        element: <Feedback />,
      },
      {
        path: "/about",
        element: <div>
                    <About/>
                    <NewsSection/>
                  </div>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />
  </React.StrictMode>
);

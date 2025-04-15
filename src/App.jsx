import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Home from "./components/home/Home";
import Fashion from "./components/Fashion";
import BestDeals from "./components/BestDeals";
import Electronics from "./components/Electronics";
// import BestSellers from "./components/BestSellers";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
// import ElectronicsHomeBuyNow from "./components/BuyNow/ElectronicsHomeBuyNow";
// import TopStyleBuyNow from "./components/BuyNow/TopStylesBuyNow";
// import BestDealsHomeBuyNow from "./components/BuyNow/BestDealsHomeBuyNow";
// import ElectronicsBuyNow from "./components/BuyNow/ElectronicsBuyNow";
// import FashionBuyNow from "./components/BuyNow/FashionBuyNow";
import BestDealsBuyNow from "./components/BuyNow/BuyNowPage";
import BuyNowPage from "./components/BuyNow/BuyNowPage";


// const App = () => {
//     return <h1 className="text-red-400">Hello</h1>
// }


const rout = createBrowserRouter([
    {
        path:'/',
        element:<Body/>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path: '/Electronics',
                element: <Electronics/>
            },
            {
                path: '/Fashion',
                element: <Fashion/>
            },
            {
                path: '/BestDeals',
                element: <BestDeals/>
            },
            // {
            //     path: '/BestSellers',
            //     element: <BestSellers/>
            // }
        ]
    },
    {
        path: '/Login',
        element: <LoginPage/>
    },
    {
        path: '/SignUp',
        element: <SignUpPage/>
    },
    // {
    //     path: '/BuyNow/ElectronicsHome/:id',  
    //     element: <ElectronicsHomeBuyNow/>
    //  },
    // {
    //     path: '/BuyNow/TopStyles/:id',  
    //     element: <TopStyleBuyNow/>
    //  },
    // {
    //     path: '/BuyNow/BestDealsHome/:id',  
    //     element: <BestDealsHomeBuyNow/>
    //  },
    // {
    //     path: '/BuyNow/Electronics/:id',  
    //     element: <ElectronicsBuyNow/>
    //  },
    // {
    //     path: '/BuyNow/Fashion/:id',  
    //     element: <FashionBuyNow/>
    //  },
    {
        path: '/BuyNow/:id',  
        element: <BuyNowPage/>
     },
     
])

const root = createRoot(document.getElementById("root"))
root.render(<RouterProvider router= {rout}></RouterProvider>)
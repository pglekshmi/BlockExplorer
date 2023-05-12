import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Highlight from "./Highlight";
import RootLayout from "./RootLayout";
import TransLayout from "./TransLayout";

import Transactions from "./Transactions";
import Transdetails from "./Transdetails";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Highlight />} />
            {/* <Route index element={<Table />} /> */}
            {/* <Route to="transactions" element={<TransLayout />}/> */}
            <Route path="blockdetails" element={<TransLayout />}/>
            <Route path="transactions" element={<Transactions />} />
            <Route path="transdetails" element={<Transdetails />}/>
            
        </Route>
    )
)

function Home() {
    return (

        <RouterProvider router={router} />
    );
}
export default Home;
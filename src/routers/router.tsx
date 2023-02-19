import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const AppRouters = () => {

    return (
        <Fragment>

            <Routes>
                <Route path="*" element={<Login />} />
                <Route path="/inicio" element={<Home />} />
            </Routes>
        </Fragment>
    )
}


export default AppRouters
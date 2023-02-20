import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Template from "src/components/template/Template";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const AppRouters = () => {

    return (
        <Fragment>
            <Routes>
                <Route path="*" element={<Login />} />
                <Route path="/inicio"
                    element={
                        <Template>
                            <Home />
                        </Template>}
                ></Route>
            </Routes>
        </Fragment>
    )
}


export default AppRouters
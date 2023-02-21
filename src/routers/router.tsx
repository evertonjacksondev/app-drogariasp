import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Template from "src/components/template/Template";
import HomeDetail from "src/pages/home/HomeDetail";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const AppRouters = () => {

    return (
        <Fragment>
            <Routes>
                <Route path="*" element={<Login />} />
                <Route path="/consulta" element={<Template title='Consultar Medicamentos'><Home /></Template>} />
                <Route path="/consulta/:id" element={<Template title='Cadastro de Medicamentos'><HomeDetail /></Template>} />
            </Routes>
        </Fragment>
    )
}


export default AppRouters
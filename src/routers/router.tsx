import { Route, Routes } from "react-router-dom";


const AppRouters = () => {

    return (
        <Routes>
            <Route path="/" element={<p>teste</p>} />
            <Route path="/about" element={<p>teste</p>} />
        </Routes>
    )
}


export default AppRouters
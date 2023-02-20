import { Fragment } from "react"
import Footer from "../elements/Footer"
import NavBar from "../navbar/NavBar"

interface PropsTemplate {
    children: JSX.Element,
};

const Template = ({ children }: PropsTemplate) => {
    return (
        <Fragment>
            <NavBar />
            {children}
            <Footer />
        </Fragment>
    )
}

export default Template
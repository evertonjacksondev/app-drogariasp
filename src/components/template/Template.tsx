import { Fragment } from "react"
import NavBar from "../combinations/NavBar"
import Container from "../elements/Container"
import Footer from "../elements/Footer"
import { H1 } from "../elements/H1"

interface PropsTemplate {
    children: JSX.Element,
    title: string,
};

const Template = ({ children, title }: PropsTemplate) => {
    return (
        <Fragment>
            <NavBar />
            <Container>
                <H1>{title}</H1>
            </Container>
            {children}
            <Footer />
        </Fragment >
    )
}

export default Template
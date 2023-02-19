import { Fragment } from "react";
import { Footers } from "src/components/combinations/Footer";

import Table from "src/components/combinations/Table";
import Container from "src/components/elements/Container";
import ContainerFooter from "src/components/elements/ContainerFooter";
import { H1 } from "src/components/elements/h1";
import NavBar from "src/components/navbar/NavBar";


const Home = () => {
    return (

        <Fragment>
            <NavBar />
            <Container>
                <H1>Consultar Medicamentos</H1>
            </Container>
            <Container>
                <Table />
            </Container>
            <ContainerFooter>
                <Footers />
            </ContainerFooter>
        </Fragment>
    );
}

export default Home
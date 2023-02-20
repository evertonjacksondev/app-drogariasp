import { Fragment } from "react";
import Table from "src/components/combinations/Table";
import Container from "src/components/elements/Container";
import { H1 } from "src/components/elements/H1";



const Home = () => {
    return (
        <Fragment>
            <Container>
                <H1>Consultar Medicamentos</H1>
            </Container>
            <Container>
                <Table />
            </Container>
        </Fragment>
    );
}

export default Home
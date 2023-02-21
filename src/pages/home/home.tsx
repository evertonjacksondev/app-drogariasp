import { Fragment } from "react";
import IconButton from "src/components/combinations/IconButton";
import Table from "src/components/combinations/Table";
import Container from "src/components/elements/Container";
import { Input } from "src/components/elements/Input";
import * as C from "src/components/elements/Section";



const Home = () => {
    return (
        <Fragment>
            <C.ConsultFilter>
                <Input type='text' placeholder="Descrição do Produto" />
                <Input type='number' placeholder="Código EAN(GTIN)" />
                <Input type='number' placeholder="Nota Fiscal" />
                <Input type='number' placeholder="Número Lote" />
            </C.ConsultFilter>
            <C.ConsultFilter>
                <IconButton iconName="search" label="Pesquisar..." background=" #ee7373" />
                <IconButton iconName="clear_all" label="Limpar Filtros" background=" #ee7373" />
                <IconButton iconName="upload" label="Upload XML" background="#ee7373" />
            </C.ConsultFilter>
            <Container>
                <Table />
            </Container>
        </Fragment>
    );
}

export default Home
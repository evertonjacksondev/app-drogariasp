import { Fragment } from "react";
import IconButton from "src/components/combinations/IconButton";
import Table from "src/components/combinations/Table";
import { Button } from "src/components/elements/Button";
import Container from "src/components/elements/Container";
import { H1 } from "src/components/elements/H1";
import { Input } from "src/components/elements/Input";
import * as C from "src/components/elements/Section";



const Home = () => {
    return (
        <Fragment>
            <C.ConsultFilter>
                <Input placeholder="Descrição do Produto" />
                <Input placeholder="Código EAN(GTIN)" />
                <Input placeholder="Nota Fiscal" />
                <Input placeholder="Número Lote" />
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
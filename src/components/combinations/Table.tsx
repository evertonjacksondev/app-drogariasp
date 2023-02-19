import { Fragment } from "react";
import { Button } from "src/components/elements/Button";
import styled from "styled-components";

const TableHeader = styled.th`
    align-items: 'center';
    border: '1px solid black';
    background: #487a8f;
    color: white;
    max-width: 1120px;
    margin: 20px auto;
    width: 25%;
    justify-content: space-around;
    padding: 15px 0px;
  
  `
const TableRow = styled.tr`
  align-items: 'center';
  // :hover {
  //   box-shadow: 10px 5px 5px #aba6a2;
  // }
  :nth-child(even) {
    background-color: #cbd8f0;
  }
`
const TableData = styled.td`
align-items: 'center';
border: 0px solid black;
text-align: center;
`
const Tables = styled.table`
font-size: 12px;
max-width: 1120px;
width: 100%;
align-items: 'center';
border-collapse: collapse;
@media screen and (max-width: 768px) {
  overflow-x: auto;
}
`

const Table = () => {
    return (

        <Fragment>

            <Tables>
                <TableRow>
                    <TableHeader>Descrição do Produto</TableHeader>
                    <TableHeader>Código Interno</TableHeader>
                    <TableHeader>Nota Fiscal</TableHeader>
                    <TableHeader>Número Lote</TableHeader>
                    <TableHeader>Código EAN(GTIN)</TableHeader>
                    <TableHeader>Quantidade</TableHeader>
                    <TableHeader>Ação</TableHeader>
                </TableRow>
                <TableRow>
                    <TableData>Dorflex</TableData>
                    <TableData>12312318239</TableData>
                    <TableData>Dipirona</TableData>
                    <TableData>Sonrisal</TableData>
                    <TableData>Engov</TableData>
                    <TableData>2</TableData>
                    <TableData><Button>Detalhes</Button></TableData>
                </TableRow>
                <TableRow>
                    <TableData>Morfina</TableData>
                    <TableData>12312318239</TableData>
                    <TableData>Hidrocodona</TableData>
                    <TableData>Metadona</TableData>
                    <TableData>Oxicodona</TableData>
                    <TableData>20</TableData>
                    <TableData>
                        <Button>
                            Detalhes
                        </Button>
                    </TableData>
                </TableRow>
            </Tables>
        </Fragment>
    );
}

export default Table
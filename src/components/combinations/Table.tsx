import { Fragment } from "react";
import styled from "styled-components";
import IconButton from "./IconButton";

const TableHeader = styled.th`
    align-items: 'center';
    border: '1px solid black';
    background: #487a8f;
    color: white;
    max-width: 1120px;
    margin: 20px auto;
    width: 20%;
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
width: 100%;
align-items: 'center';
border-collapse: collapse;
@media screen and (max-width: 768px) {
  overflow-x: auto;
}
`
const TableSection = styled.section`
  max-width: 1120px;
  display: flex;
  flex-direction: row;`

const Table = () => {
    return (

        <Fragment>
            <Tables>
                <TableRow>
                    <TableHeader>Descrição do Produto</TableHeader>
                    <TableHeader>Código Interno</TableHeader>
                    <TableHeader>Série - Nota Fiscal</TableHeader>
                    <TableHeader>Número Lote</TableHeader>
                    <TableHeader>Código EAN(GTIN)</TableHeader>
                    <TableHeader>Quantidade</TableHeader>
                    <TableHeader>Ação</TableHeader>
                </TableRow>
                <TableRow>
                    <TableData>Dorflex</TableData>
                    <TableData>12312318239</TableData>
                    <TableData>2-78999</TableData>
                    <TableData>3000</TableData>
                    <TableData>7896962338618</TableData>
                    <TableData>2</TableData>
                    <TableData> <TableSection>
                        <IconButton height={'25px'} width={'25px'} iconName="edit" label="" background=" #5a5553" />
                        <IconButton height={'25px'} width={'25px'} iconName="delete" label="" background=" #5a5553" />

                    </TableSection></TableData>
                </TableRow>
                <TableRow>
                    <TableData>Dorflex</TableData>
                    <TableData>12312318239</TableData>
                    <TableData>2-78999</TableData>
                    <TableData>3000</TableData>
                    <TableData>7896962338618</TableData>
                    <TableData>2</TableData>
                    <TableData> <TableSection>
                        <IconButton height={'25px'} width={'25px'} iconName="edit" label="" background=" #5a5553" />
                        <IconButton height={'25px'} width={'25px'} iconName="delete" label="" background=" #5a5553" />
                    </TableSection></TableData>
                </TableRow>
                <TableRow>
                    <TableData>Dorflex</TableData>
                    <TableData>12312318239</TableData>
                    <TableData>2-78999</TableData>
                    <TableData>3000</TableData>
                    <TableData>7896962338618</TableData>
                    <TableData>2</TableData>
                    <TableData> <TableSection>
                        <IconButton height={'25px'} width={'25px'} iconName="edit" label="" background=" #5a5553" />
                        <IconButton height={'25px'} width={'25px'} iconName="delete" label="" background=" #5a5553" />
                    </TableSection></TableData>
                </TableRow>
                <TableRow>
                    <TableData>Dorflex</TableData>
                    <TableData>12312318239</TableData>
                    <TableData>2-78999</TableData>
                    <TableData>3000</TableData>
                    <TableData>7896962338618</TableData>
                    <TableData>2</TableData>
                    <TableData> <TableSection>
                        <IconButton height={'25px'} width={'25px'} iconName="edit" label="" background=" #5a5553" />
                        <IconButton height={'25px'} width={'25px'} iconName="delete" label="" background=" #5a5553" />
                    </TableSection></TableData>
                </TableRow>
                <TableRow>
                    <TableData>Dorflex</TableData>
                    <TableData>12312318239</TableData>
                    <TableData>2-78999</TableData>
                    <TableData>3000</TableData>
                    <TableData>7896962338618</TableData>
                    <TableData>2</TableData>
                    <TableData> <TableSection>
                        <IconButton height={'25px'} width={'25px'} iconName="edit" label="" background=" #5a5553" />

                        <IconButton height={'25px'} width={'25px'} iconName="delete" label="" background=" #5a5553" />

                    </TableSection></TableData>
                </TableRow>
                <TableRow>
                    <TableData>Dorflex</TableData>
                    <TableData>12312318239</TableData>
                    <TableData>2-78999</TableData>
                    <TableData>3000</TableData>
                    <TableData>7896962338618</TableData>
                    <TableData>2</TableData>
                    <TableData> <TableSection>
                        <IconButton height={'25px'} width={'25px'} iconName="edit" label="" background=" #5a5553" />
                        <IconButton height={'25px'} width={'25px'} iconName="delete" label="" background=" #5a5553" />

                    </TableSection></TableData>
                </TableRow>
                <TableRow>
                    <TableData>Dorflex</TableData>
                    <TableData>12312318239</TableData>
                    <TableData>2-78999</TableData>
                    <TableData>3000</TableData>
                    <TableData>7896962338618</TableData>
                    <TableData>2</TableData>
                    <TableData> <TableSection>
                        <IconButton height={'25px'} width={'25px'} iconName="edit" label="" background=" #5a5553" />

                        <IconButton height={'25px'} width={'25px'} iconName="delete" label="" background=" #5a5553" />

                    </TableSection></TableData>
                </TableRow>  <TableRow>
                    <TableData>Dorflex</TableData>
                    <TableData>12312318239</TableData>
                    <TableData>2-78999</TableData>
                    <TableData>3000</TableData>
                    <TableData>7896962338618</TableData>
                    <TableData>2</TableData>
                    <TableData> <TableSection>
                        <IconButton height={'25px'} width={'25px'} iconName="edit" label="" background=" #5a5553" />
                        <IconButton height={'25px'} width={'25px'} iconName="delete" label="" background=" #5a5553" />
                    </TableSection></TableData>
                </TableRow>
                <TableRow>
                    <TableData>Morfina</TableData>
                    <TableData>12312318239</TableData>
                    <TableData>2-78999</TableData>
                    <TableData>3000</TableData>
                    <TableData>7896962338618</TableData>
                    <TableData>20</TableData>
                    <TableData>
                        <TableSection>
                            <IconButton height={'25px'} width={'25px'} iconName="edit" label="" background=" #5a5553" />
                            <IconButton height={'25px'} width={'25px'} iconName="delete" label="" background=" #5a5553" />
                        </TableSection>
                    </TableData>
                </TableRow>
                <TableRow>
                    <TableData>Morfina</TableData>
                    <TableData>12312318239</TableData>
                    <TableData>2-78999</TableData>
                    <TableData>3000</TableData>
                    <TableData>7896962338618</TableData>
                    <TableData>20</TableData>
                    <TableData>
                        <TableSection>
                            <IconButton height={'25px'} width={'25px'} iconName="edit" label="" background=" #5a5553" />
                            <IconButton height={'25px'} width={'25px'} iconName="delete" label="" background=" #5a5553" />
                        </TableSection>
                    </TableData>
                </TableRow>
                <TableRow>
                    <TableData>Morfina</TableData>
                    <TableData>12312318239</TableData>
                    <TableData>2-78999</TableData>
                    <TableData>3000</TableData>
                    <TableData>7896962338618</TableData>
                    <TableData>20</TableData>
                    <TableData>
                        <TableSection>
                            <IconButton height={'25px'} width={'25px'} iconName="edit" label="" background=" #5a5553" />
                            <IconButton height={'25px'} width={'25px'} iconName="delete" label="" background=" #5a5553" />
                        </TableSection>
                    </TableData>
                </TableRow>
                <TableRow>
                    <TableData>Morfina</TableData>
                    <TableData>12312318239</TableData>
                    <TableData>2-78999</TableData>
                    <TableData>3000</TableData>
                    <TableData>7896962338618</TableData>
                    <TableData>20</TableData>
                    <TableData>
                        <TableSection>
                            <IconButton height={'25px'} width={'25px'} iconName="edit" label="" background=" #5a5553" />
                            <IconButton height={'25px'} width={'25px'} iconName="delete" label="" background=" #5a5553" />
                        </TableSection>
                    </TableData>
                </TableRow>
                <TableRow>
                    <TableData>Morfina</TableData>
                    <TableData>12312318239</TableData>
                    <TableData>2-78999</TableData>
                    <TableData>3000</TableData>
                    <TableData>7896962338618</TableData>
                    <TableData>20</TableData>
                    <TableData>
                        <TableSection>
                            <IconButton height={'25px'} width={'25px'} iconName="edit" label="" background=" #5a5553" />
                            <IconButton height={'25px'} width={'25px'} iconName="delete" label="" background=" #5a5553" />
                        </TableSection>
                    </TableData>
                </TableRow>
                <TableRow>
                    <TableData>Morfina</TableData>
                    <TableData>12312318239</TableData>
                    <TableData>2-78999</TableData>
                    <TableData>3000</TableData>
                    <TableData>7896962338618</TableData>
                    <TableData>20</TableData>
                    <TableData>
                        <TableSection>
                            <IconButton height={'25px'} width={'25px'} iconName="edit" label="" background=" #5a5553" />
                            <IconButton height={'25px'} width={'25px'} iconName="delete" label="" background=" #5a5553" />
                        </TableSection>
                    </TableData>
                </TableRow>
                <TableRow>
                    <TableData>Morfina</TableData>
                    <TableData>12312318239</TableData>
                    <TableData>2-78999</TableData>
                    <TableData>3000</TableData>
                    <TableData>7896962338618</TableData>
                    <TableData>20</TableData>
                    <TableData>
                        <TableSection>
                            <IconButton height={'25px'} width={'25px'} iconName="edit" label="" background=" #5a5553" />
                            <IconButton height={'25px'} width={'25px'} iconName="delete" label="" background=" #5a5553" />
                        </TableSection>
                    </TableData>
                </TableRow>
                <TableRow>
                    <TableData>Morfina</TableData>
                    <TableData>12312318239</TableData>
                    <TableData>2-78999</TableData>
                    <TableData>3000</TableData>
                    <TableData>7896962338618</TableData>
                    <TableData>20</TableData>
                    <TableData>
                        <TableSection>
                            <IconButton height={'25px'} width={'25px'} iconName="edit" label="" background=" #5a5553" />
                            <IconButton height={'25px'} width={'25px'} iconName="delete" label="" background=" #5a5553" />
                        </TableSection>
                    </TableData>
                </TableRow>
                <TableRow>
                    <TableData>Morfina</TableData>
                    <TableData>12312318239</TableData>
                    <TableData>2-78999</TableData>
                    <TableData>3000</TableData>
                    <TableData>7896962338618</TableData>
                    <TableData>20</TableData>
                    <TableData>
                        <TableSection>
                            <IconButton height={'25px'} width={'25px'} iconName="edit" label="" background=" #5a5553" />
                            <IconButton height={'25px'} width={'25px'} iconName="delete" label="" background=" #5a5553" />
                        </TableSection>
                    </TableData>
                </TableRow>
                <TableRow>
                    <TableData>Morfina</TableData>
                    <TableData>12312318239</TableData>
                    <TableData>2-78999</TableData>
                    <TableData>3000</TableData>
                    <TableData>7896962338618</TableData>
                    <TableData>20</TableData>
                    <TableData>
                        <TableSection>
                            <IconButton height={'25px'} width={'25px'} iconName="edit" label="" background=" #5a5553" />
                            <IconButton height={'25px'} width={'25px'} iconName="delete" label="" background=" #5a5553" />
                        </TableSection>
                    </TableData>
                </TableRow>
                <TableRow>
                    <TableData>Morfina</TableData>
                    <TableData>12312318239</TableData>
                    <TableData>2-78999</TableData>
                    <TableData>3000</TableData>
                    <TableData>7896962338618</TableData>
                    <TableData>20</TableData>
                    <TableData>
                        <TableSection>
                            <IconButton height={'25px'} width={'25px'} iconName="edit" label="" background=" #5a5553" />
                            <IconButton height={'25px'} width={'25px'} iconName="delete" label="" background=" #5a5553" />
                        </TableSection>
                    </TableData>
                </TableRow>
                <TableRow>
                    <TableData>Morfina</TableData>
                    <TableData>12312318239</TableData>
                    <TableData>2-78999</TableData>
                    <TableData>3000</TableData>
                    <TableData>7896962338618</TableData>
                    <TableData>20</TableData>
                    <TableData>
                        <TableSection>
                            <IconButton height={'25px'} width={'25px'} iconName="edit" label="" background=" #5a5553" />
                            <IconButton height={'25px'} width={'25px'} iconName="delete" label="" background=" #5a5553" />
                        </TableSection>
                    </TableData>
                </TableRow>
            </Tables>
        </Fragment>
    );
}

export default Table

import { Fragment } from "react"
import IconButton from "src/components/combinations/IconButton"

import { Input } from "src/components/elements/Input"
import *  as C from "src/components/elements/Section"



const HomeDetail = () => {
    return (
        <Fragment>
            <C.HomeRowSection>
                <Input placeholder="Descrição do Produto* " />
                <Input placeholder="Código EAN(GTIN)*" type={'number'} />
                <Input placeholder="Nota Fiscal*" type={'number'} />
            </C.HomeRowSection>
            <C.HomeRowSection>
                <Input placeholder="Número Lote*" type={'number'} />
                <Input placeholder="Quantidade*" type={'number'} />
            </C.HomeRowSection>
            <C.HomeButtonSection>
                <IconButton iconName='save' background="#458992" label='Salvar' />
                <IconButton iconName='delete' background="#da4c4c" label='Excluir' />
                <IconButton iconName='arrow_back' background=" #5a5553" label='Voltar' />
            </C.HomeButtonSection>

        </Fragment >
    )
}

export default HomeDetail
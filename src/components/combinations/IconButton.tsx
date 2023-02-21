import React, { Fragment } from 'react'
import { Button } from '../elements/Button'
import { Icon } from '../elements/Icon'


interface IProps {
    iconName: string,
    height?: string,
    width?: string,
    background: string,
    label: string,
}
const IconButton = ({ iconName, background, label, ...others }: IProps) => {
    return (
        <Fragment>
            <Button {...others} background={background}>
                <Icon name={iconName} />
                {label}
            </Button>

        </Fragment >
    )
}

export default IconButton
import 'material-icons/iconfont/material-icons.css'

interface IProps {
    name: string,
}

export const Icon = (props: IProps) => {
    return (
        <i translate="no" style={{ fontSize: 13 }} className='material-icons'>{props.name ? props.name : ''}</i>

    )
}



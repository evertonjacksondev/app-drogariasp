import 'material-icons/iconfont/material-icons.css'

interface IProps {

    name: string,
}

export const Icon = (props: IProps) => {
    return (

        <i className='material-icons'>{props.name ? props.name : ''}</i>

    )
}
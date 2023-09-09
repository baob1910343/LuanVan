import React from 'react'
// import { Button } from 'antd'
import {SearchOutlined} from '@ant-design/icons'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
const ButtonInputSearch =(props) => {
    const {size, placeholder, textButton} = props
    return (
        <div className='row'>
            <InputComponent className='col-md-8 bg-light' size={size} placeholder={placeholder} />
            <ButtonComponent className='col-md-3 cl-79BCCF bg-C3E3FA' size={size} icon={<SearchOutlined/>} textButton={textButton}/>
        </div>
    )
    //dùng nhiều chỗ chỉ cần truyền vào size place,text
}
export default ButtonInputSearch
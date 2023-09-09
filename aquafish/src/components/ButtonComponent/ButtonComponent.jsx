import { Button } from 'antd'
import React from 'react'

const ButtonComponent =({size,textButton, ...rest}) => {
    return (
        
        <Button className='col-md-3 cl-79BCCF bg-C3E3FA' size={size} >{textButton}</Button>
            
            
       
    )
}
export default ButtonComponent
import { Button } from 'antd'
import React from 'react'

const ButtonComponent =({size,textButton, ...rest}) => {
    return (
        
        <Button className='col-md-3 cl-79BCCF' size={size} >{textButton}</Button>
            
            
       
    )
}
export default ButtonComponent
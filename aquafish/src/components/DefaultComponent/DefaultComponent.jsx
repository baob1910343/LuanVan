import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
const DefaultComponent =({children}) => {
    return (
        <div>
            <HeaderComponent/>
            {children}
            
        </div>//hien thi cung header
    )
}
export default DefaultComponent
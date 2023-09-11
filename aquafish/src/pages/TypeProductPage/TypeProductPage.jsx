//khi chọn menu chuyển sang trang danh mục sp
import React from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import CartComponent from '../../components/CartComponent/CartComponent'
import { Pagination } from 'antd'
const TypeProductPage =() => {
    const onChange =()=>{}
    return ( 
       <div className='container bg-svg  '>
            <div className='row '>
                <div className='col-md-2 '>
                    <div className='col p-3'><NavbarComponent/></div>
                </div>
                <div className='col-md-10'>
                    <div className='row'>
                    <div className='col-md-2'><CartComponent/></div>
                    <div className='col-md-2'><CartComponent/></div>
                    <div className='col-md-2'><CartComponent/></div>
                    <div className='col-md-2'><CartComponent/></div>
                    <div className='col-md-2'><CartComponent/></div>
                    <div className='col-md-2'><CartComponent/></div>
                    <div className='col-md-2'><CartComponent/></div>
                    </div>
               </div> 
           </div>                
            <div className='row  p-2 text-center'>
                <Pagination showQuickJumper defaultCurrent={2} total={100} onChange={onChange} />
            </div>

        </div>
    )
}
export default TypeProductPage
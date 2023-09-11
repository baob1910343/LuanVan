import React from 'react'
import imageProduct from '../../assets/images/l397-pleco.webp'
import imageProduct1 from '../../assets/images/l397-alenquer-tiger-pleco-1.webp'
import imageProduct2 from '../../assets/images/l397-alenquer-tiger-pleco.webp'
import { Image, InputNumber } from 'antd'
import  '../style_components.css'
import { MinusOutlined, PlusOutlined, StarFilled } from '@ant-design/icons'
const ProductDetailsComponent =() => {
    const onChange = () =>{}
    return ( 
       <div className='container'>
            <div className='row  flex-row' >
                <div className='col-md-5 bg-dark'>   
                 <div className='col-md-12'>
                    <Image src={imageProduct} preview="false"/>
                 </div>
                 <div className='row'>

                 <div className='col-md-4'>
                    <Image src={imageProduct1} preview="false"/>
                 </div>
                 <div className='col-md-4'>
                    <Image src={imageProduct2} preview="false"/>
                 </div>
                <div className='col-md-4'>
                    <Image src={imageProduct1} preview="false"/>
                </div>
                </div>
                </div>
                <div className='col-md-7 bg-success'>   
                    <div className='row'> 
                        <div className='text1'>L397 Alenquer Tiger Pleco (4cm) </div>
                        <div className='row d-flex'>
                            <div className='col-md-2 text-warning'> 
                                <StarFilled/><StarFilled/><StarFilled/><StarFilled/><StarFilled/> 
                            </div>
                            <div className='col'> <span>| Đã bán 100+ </span></div>
                       </div>
                        <div className='row m-2 text2 bg-light'> 1.000.000đ</div>
                        <div  className='text3 '>
                            <span className='text-muted'>Giao đến</span>
                            <span className='address m-4'><u>Q. Ninh Kiều. P. Xuân Khánh, Cần Thơ</u></span>
                            <span className='address text-primary'>Đổi địa chỉ</span>
                        </div>
                        <div className='display-6 row border rounded m-2'>
                            <div>Số lượng</div>
                            <div className='row'>
                                <div className='col-md-1'><MinusOutlined/></div>
                                <div className='col-md-2 text-center'><InputNumber min={1} max={10} defaultValue={3} onChange={onChange}/></div>
                                <div className='col-md-1'><PlusOutlined/></div>
                            </div>
                        </div>
                        <div className='row m-2 '>
                            <div className='col-md-2 btn btn-danger m-2'>Chọn Mua</div> 
                            <div className='col-md-2 btn btn-light m-2'>Mua trả sau</div>
                        </div>
                    </div>
                </div>
            </div>
            
       </div>   
    )
}
export default ProductDetailsComponent
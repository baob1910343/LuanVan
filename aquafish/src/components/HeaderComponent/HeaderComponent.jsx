import { Badge, Col, Row } from 'antd'
// import Search from 'antd/es/input/Search'
import React from 'react'
import {UserOutlined,CaretDownOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
// import { store } from '../../assets/images/store.png';
import '../style_components.css'
const HeaderComponent =() => {
    return (
        <div className='container  bg-primary p-3 '> 
            <Row className=' p-5 '>
                <Col span={5} className=' h1 display-4'>             
               <b> Fish Aquarium</b>
                </Col>
                <Col span={9} >
                    <div className='row'>
                        <ButtonInputSearch
                            size="large"
                            //size có thể thay đổi tùy ý khi dùng lại conponent
                            placeholder="Nhập sản phẩm cần tìm"
                            textButton="Tìm kiếm"       
                        // onSearch={onSearch}
                        />
                    </div>
                </Col>
                <Col span={10}>
                    <div className='row'>
                          
                                    <div className='display-5 col-md-1'><UserOutlined /></div>
                                    <div className='col-md-4'>
                                        <span> Đăng nhập/ Đăng ký</span>
                                        <div>
                                            <span> Tài khoản </span> 
                                            <CaretDownOutlined />
                                        </div>
                                    </div>
                      
                                
                                    <div className=' col-md-1 '><Badge className='display-5'count={4} size='small'><ShoppingCartOutlined /></Badge></div>
                                        <span className='col-md-4 pt-2'> Giỏ hàng </span> 
                                
                       
                    </div>
                </Col>             
            </Row>
        </div>
    )
}
export default HeaderComponent
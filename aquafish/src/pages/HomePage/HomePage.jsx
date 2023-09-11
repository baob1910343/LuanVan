import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/L46.png'
import slider2 from '../../assets/images/L191.png'
import slider3 from '../../assets/images/L200.png'
import '../stylepage.css'
import { RightSquareOutlined} from '@ant-design/icons'
import CartComponent from '../../components/CartComponent/CartComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
const HomePage =() => {
    
    const arr =  ['Cá cảnh', 'Phụ kiện thủy sinh','a' ]
    return (
        <div className='container bg-svg'> 
             <div className='row'>
                    <div className='d-flex '>
                        {arr.map((item)=>{
                            return(
                        <div className='p-4'> <TypeProduct  name={item} key={item}/></div>
                        )})}            
                    </div> 
                </div>
                <div className='row p-3'>
                    <div className='col-md-8 '>
                        <div className='col-md text1 '> CHÀO MỪNG BẠN ĐÃ ĐẾN AQUA FISH</div> 
                        <div className='col-md text2'> AQUA FISH </div> 
                        <div className='col-md text3'> NƠI KHỞI NGUỒN ĐAM MÊ</div> 
                        <div className='col-md text4'> Cửa hàng cá cảnh là một nơi tuyệt vời để khám phá và thỏa mãn niềm đam mê về thế giới cá và thủy sinh thực vật. Tại cửa hàng này, bạn sẽ được hòa mình vào không gian xanh mát và tĩnh lặng, với những hồ cá đầy màu sắc và các trang trí độc đáo.</div>               
                        <div className='btn btn-2 btn-light m-2'><p className=' btn-1  m-2 p-2'>Mua Ngay< RightSquareOutlined /></p> </div>
                        
                        </div>
                    <div className='col-md-4 '>
                        <SliderComponent arrImages ={[slider1,slider2,slider3]}/>  
                    </div>
                    
              </div>
                <div className='row m-2 p-2 '>
                    <div className='col-md-2 bg-success pt-2 pb-2'>   <CartComponent/></div>
                    <div className='col-md-2 bg-success pt-2 pb-2'>   <CartComponent/></div>
                    <div className='col-md-2 bg-success pt-2 pb-2'>   <CartComponent/></div>
                    <div className='col-md-2 bg-success pt-2 pb-2'>   <CartComponent/></div>
                    <div className='col-md-2 bg-success pt-2 pb-2'>   <CartComponent/></div>
                    <div className='col-md-2 bg-success pt-2 pb-2'>   <CartComponent/></div>
                   
                </div> 
                 <div className=' row justify-content-center p-2 btn-light'><ButtonComponent textButton={'Xem Thêm'} /></div>
                   
        </div>
                
        //truyen hinh anh truc tiep vao mang arr
    )
}
export default HomePage 
 // <div className='col-md-2 bg-light'><NavbarComponent/></div>

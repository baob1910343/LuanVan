import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/L46.png'
import slider2 from '../../assets/images/L191.png'
import slider3 from '../../assets/images/L200.png'
import '../stylepage.css'
import { RightSquareOutlined} from '@ant-design/icons';

const HomePage =() => {
    
    const arr =  ['Cá cảnh', 'Phụ kiện thủy sinh','a' ]
    return (
            <div className='container bg-linearn'> 
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
                        <div className='col-md text1 '> CÁ CẢNH HÔM NAY</div> 
                        <div className='col-md text2'> HÃY ĐAM MÊ </div> 
                        <div className='col-md text3'> THEO PHONG CÁCH CỦA BẠN</div> 
                        <div className='col-md text4'> Trong sâu thẳm cửa hàng cá cảnh, tôi tìm thấy sự thanh thản. Những chú cá duyên dáng nhảy múa trong khu bảo tồn thủy sinh của chúng mang lại sự bình yên cho trái tim tôi.</div>               
                        <div className='btn btn-2 btn-light m-2'><p className=' btn-1  m-2 p-2'>Mua Ngay< RightSquareOutlined /></p> </div>
                        
                        </div>
                    <div className='col-md-4 '>
                        <SliderComponent arrImages ={[slider1,slider2,slider3]}/>  
                    </div>
                   
                </div>
                </div>
        //truyen hinh anh truc tiep vao mang arr
    )
}
export default HomePage
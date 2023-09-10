import { StarOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import React from 'react'
const CartComponent =({size,textButton, ...rest}) => {
    return ( 

        <Card
            hoverable
            style={{ width: 200 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
        <div>Pleco L46</div>
        <div className='pt-2'> <span>4.9 </span><StarOutlined className='text-warning' />
         <span>| Đã bán 100+ </span>
         </div>
         <div className='text-danger pt-3'><b>300.000d</b></div>
        </Card>
    )
}
export default CartComponent
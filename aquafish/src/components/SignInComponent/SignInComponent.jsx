
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import React from 'react'
const SignInComponent =() => {
    const onFinish = ()=>{
    }
    return ( 
       <div className='col-md-3 bg-light p-5 rounded'>
       <Form
       name="normal_login"
       className="login-form"
       initialValues={{ remember: true }}
       onFinish={onFinish}
     >
        <div className='p-2'>Đăng nhập </div>
       <Form.Item
         name="username"
         rules={[{ required: true, message: 'Please input your Username!' }]}
       >
         <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
       </Form.Item>
       <Form.Item
         name="password"
         rules={[{ required: true, message: 'Please input your Password!' }]}
       >
         <Input
           prefix={<LockOutlined className="site-form-item-icon" />}
           type="password"
           placeholder="Password"
         />
       </Form.Item>
       <Form.Item>
         <Form.Item name="remember" valuePropName="checked" noStyle>
           <Checkbox>Nhớ tài khoản của tôi</Checkbox>
         </Form.Item>
 
         <a className="login-form-forgot" href="#">
           Quên mật khẩu
         </a>
       </Form.Item>
 
       <Form.Item>
         <Button type="primary" htmlType="submit" className="login-form-button">
           Đăng nhập
         </Button>
         hoặc <a href="#">Đăng ký ngay!</a>
       </Form.Item>
     </Form>
       </div>   
    )
}
export default SignInComponent
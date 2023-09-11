
import { Checkbox, Rate} from 'antd'
import React from 'react'
const onChange =()=>{

    }
const NavbarComponent =() => {
const renderContent =(type, options) =>{
        switch(type){
            
            case 'text':
                return options.map((option)=>{
                    return <h5>{option}</h5>
                })
            case 'checkbox':
                return(
                    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                        {options.map((option)=>{
                            return(
                                <Checkbox value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                        
                    </Checkbox.Group>
                ) 
                case 'star':
                        return options.map((option)=>{
                            console.log('check',option)
                                return(
                                <div>
                                <Rate disabled defaultValue={option} />
                                <span> {`Từ ${option}  sao`}</span>
                                </div>
                            )
                        })
                        case 'price':
                            return options.map((option)=>{
                                    return(
                                    <div className='btn btn-light bg-success'>
                                    {option}
                                    </div>
                                )
                            })
            default:
                return {}
        }
    }
    return ( 

       <div className='row bg-light rounded m-2 p-2 h4'> Danh mục sản phẩm
       <div className='m-1 pt-3 text-muted'> {renderContent ('text',['Pleco','Corydoras','angel'])}</div>
    
       </div>
    )
}
export default NavbarComponent
//    <div className='m-2 pt-2'> {renderContent ('checkbox',[
    //         {value: 'Pleco', label: 'Pleco'},
    //         {value: 'Corydoras', label: 'Corydoras'},

    //    ])}</div>
    //    <div className='m-2 pt-2'> {renderContent ('star',[3,4,5])}</div>
    //    <div className='m-2 pt-2'>{renderContent ('price',['Dưới 100.000','Trên 100.000'])}</div>
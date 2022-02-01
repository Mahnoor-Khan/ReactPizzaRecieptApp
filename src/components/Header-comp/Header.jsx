import React, { Component, useRef, useState } from 'react';
import style from './style.header.module.scss'
import header from '../../assets/header.png'
import pizza from '../../assets/pizza.png'
import { Input } from 'antd';
import { CheckOutlined  } from '@ant-design/icons';
import { Modal, Button  } from 'antd';


const MainHeader = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [pizzaName , setPizzaName] = useState('')
    const DisCode =useRef('')
    const [total , setTotal] = useState(0)
    const [checkValue1 , setCheckValue1] =useState(false)  
    const [checkValue2 , setCheckValue2] =useState(false)  
    const [checkValue3 , setCheckValue3] =useState(false)  
    const [pizzaPrice , setPizzaPrice] =useState(0)  
    const [quantity , setQuantity] =useState(1)  

    const price=(Rs)=>{
        setPizzaPrice(Rs)
        let newTotal
        checkValue1 ? newTotal=Rs + 50 : newTotal=Rs ;
        checkValue2 ? newTotal=newTotal + 200 : newTotal= newTotal ;
        checkValue3 ? newTotal=newTotal + 100 : newTotal=newTotal ;
        setTotal(newTotal) 
       }

       const Increment=()=>{
           setTotal(total + pizzaPrice)
           setQuantity(quantity + 1)
       }
       const discount=()=>{
           document.getElementsByClassName('dis')
           console.log(DisCode.current.value)
       }
       const Decrement=()=>{
           if(quantity > 1){
            setTotal(total - pizzaPrice)
            setQuantity(quantity - 1)
           }
        
    }

       const ExtraPrice=(extraRs )=>{
           let newTotal
        if (extraRs == 50) {
          if (checkValue1 !== true) {
            setCheckValue1(true);
            newTotal = total + extraRs;
            setTotal(newTotal);
          } else if (checkValue1 == true) {
            setCheckValue1(false);
            newTotal = total - extraRs;
            setTotal(newTotal);
          }
        } else if (extraRs == 200) {
          if (checkValue2 !== true) {
            setCheckValue2(true);
            newTotal = total + extraRs;
            setTotal(newTotal);
          } else if (checkValue2 == true) {
            setCheckValue2(false);
            newTotal = total - extraRs;
            setTotal(newTotal);
          }
        } else if (extraRs == 100) {
          if (checkValue3 !== true) {
            setCheckValue3(true);
            newTotal = total + extraRs;
            setTotal(newTotal);
          } else if (checkValue3 == true) {
            setCheckValue3(false);
            newTotal = total - extraRs;
            setTotal(newTotal);
          }
        }
           
       }

    const showModal = (Name) => {
        setIsModalVisible(true);
        setPizzaName(Name)
        console.log(pizzaName)
      };
    
    return (
      <>
        <div className={style.header}>
          <img src={header} className={style.headerImg} />
        </div>

        <h1 className={style.headerHeading}>Enjoy The deals </h1>
        <div className={style.PizzaCardsDiv}>
          <div className={style.pizzaCard}>
            <img src={pizza} className={style.pizzaImg} />
            <h2>Greek Pizza</h2>
            <p className={style.priceTag}>Rs 500 - 1000</p>
            <hr className={style.hrTag} />
            <button
              className={style.orderBtn}
              onClick={() => showModal("Greek Pizza")}
            >
              Order Now
            </button>
          </div>
          <div className={style.pizzaCard}>
            <img src={pizza} className={style.pizzaImg} />
            <h2>Chicago Pizza</h2>
            <p className={style.priceTag}>Rs 500 - 1000</p>
            <hr className={style.hrTag} />
            <button
              className={style.orderBtn}
              onClick={() => showModal("Chicago Pizza")}
            >
              Order Now
            </button>
          </div>
          <div className={style.pizzaCard}>
            <img src={pizza} className={style.pizzaImg} />
            <h2>California Pizza</h2>
            <p className={style.priceTag}>Rs 500 - 1000</p>
            <hr className={style.hrTag} />
            <button
              className={style.orderBtn}
              onClick={() => showModal("California Pizza")}
            >
              Order Now
            </button>
          </div>
        </div>

        <Modal
          title={pizzaName}
          visible={isModalVisible}
          footer={null}
        >
        <div>
          <div className={style.radioBtnsDiv}>
            <div className={style.radioBtn}>
              <input type="radio" value="regular" name="size" onClick={()=>price(500)}/>
              <label>Regular <span className={style.priceSpan}>(Rs 500)</span></label>
            </div>
            <div className={style.radioBtn}>
              <input type="radio" value="Medium" name="size" onClick={()=>price(800)} />
              <label>Medium <span className={style.priceSpan}>(Rs 800)</span></label>
            </div>
            <div className={style.radioBtn}>
              <input type="radio" value="Large" name="size" onClick={()=>price(1000)} />
              <label>Large <span className={style.priceSpan}>(Rs 1000)</span></label>
            </div>
          </div>

          <div className={style.checkboxDiv}>
            <div className={style.checkboxBtn}>
              <input type="checkbox" value="extra cheese" onClick={()=>ExtraPrice(50 , checkValue1)} />
              <label>Extra Cheese</label>
            </div>
            <div className={style.checkboxBtn}>
              <input type="checkbox" value="extra chicken" onClick={()=>ExtraPrice(200 , checkValue2)}/>
              <label>Extra Chicken</label>
            </div>

            <div className={style.checkboxBtn}>
              <input type="checkbox" value="extra mayo" onClick={()=>ExtraPrice(100 , checkValue3)} />
              <label>Extra Mayo</label>
            </div>
          </div>

          <h2>
            Quantity : <span className='IncBtn' onClick={Increment}>+</span> <span className='quantity'>{quantity}</span> <span className='DecBtn' onClick={Decrement}>-</span>
          </h2>
          <h2>
            Total: <span id='total'>{total}</span>
          </h2>

          <br />

          <Button type="primary" size="10" onClick={discount}>
            10% Discount
          </Button>
          <span> </span>
          <Button type="primary" size="10" onClick={discount}>
            20% Discount
          </Button>
          <br/>
          <br/>
          <div className={style.orderNowbtnDiv}>
          </div>

          <div className={style.codeSection}>
          <Input size="large" placeholder="large size" ref={DisCode}  />
          <br/>
          <Button type="primary" size="10">
         Enter
          </Button>

          </div>

          <Button type="success" shape="round"  size="10">
          Order Now
        </Button>
          </div>
        </Modal>
      </>
    );
}
 
export default MainHeader;